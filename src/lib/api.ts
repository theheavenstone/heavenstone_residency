export interface ContactFormData {
    name: string;
    role: string;
    contact: string;
    message: string;
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
            console.log('Error response received:', await response.text());
            throw new Error("Failed to send message");
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error sending contact form:", error);
        throw error;
    }
};
