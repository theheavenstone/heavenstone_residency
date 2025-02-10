import type { NextApiRequest, NextApiResponse } from "next";
import { ContactFormData } from "@/lib/api";
import { mailOptions, transporter } from "../../config/nodemailer";

interface ContactMessageFields {
  [key: string]: string;
}

const CONTACT_MESSAGE_FIELDS: ContactMessageFields = {
  name: "Full Name",
  role: "Role",
  contact: "Contact",
  message: "Message",
};

const generateEmailContent = (data: ContactFormData) => {
  const name = data.name.trim();

  const contactValue = data.contact.trim();
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactValue);
  const isPhone = /^[0-9]{10}$/.test(contactValue);

  let contactHref = contactValue;
  if (isEmail) {
    contactHref = `mailto:${contactValue}`;
  } else if (isPhone) {
    contactHref = `tel:${contactValue}`;
  }

  const modifiedData = {
    name: name,
    contact: `<a href="${contactHref}" style="color: blue; text-decoration: none;">${data.contact}</a>`,
    role: data.role,
    message: data.message
  };

  const stringData = Object.entries(modifiedData).reduce(
    (str, [key, val]) => (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n\n`),
    ""
  );

  const htmlData = Object.entries(modifiedData).reduce((str, [key, val]) => {
    return (str += `
        <h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3>
        <p class="form-answer" align="left">${val}</p>`);
  }, "");

  return {
    text: stringData,
    html: `<!DOCTYPE html>
      <html>
      <head>
        <title>New Contact Message</title>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <style type="text/css">
          body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
          table { border-collapse: collapse !important; }
          body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
          .form-container { margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc; }
          .form-heading { color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0; }
          .form-answer { color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0; }
        </style>
      </head>
      <body>
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
          <tr>
            <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px">
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px">
                <tr>
                  <td>
                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td>
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                              <td style="font-size: 16px; line-height: 25px; color: #232323;">
                                <h2>New Enquiry Message</h2>
                                <div class="form-container">${htmlData}</div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>`,
  };
};


const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data: ContactFormData = req.body;


    if (!data || !data.name || !data.contact || !data.role) {
      console.log("Invalid data received");
      return res.status(400).send({ message: "Bad request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: `Heavenstone Residency: ${data.name} is Looking for an Apartment`,
      });

      return res.status(200).json({ success: true, message: "Message sent successfully" });
    } catch (err) {
      console.log(err);
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
      return res.status(400).json({ message: "Unknown error occurred" });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};
export default handler;
