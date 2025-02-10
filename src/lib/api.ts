export interface ContactFormData {
    name: string;
    phone_number: string;
    email: string;
    role: string;
    country_code: string;
}

export const sendContactForm = async (data: ContactFormData) => {

    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to send message");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error sending contact form:", error);
        throw error; // Rethrow error for handling in calling function
    }
};
