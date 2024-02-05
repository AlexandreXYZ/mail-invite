interface MailSenderReq {
    subject: string,
    email: string,
    content: string,
}

interface MailSenderRes {
    message: string;
    sucess: boolean;
}

export const mailSender = async ({ subject, email, content }: MailSenderReq): Promise<any> => {
    return await fetch('/api/email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ subject, email, content })
    })
        .catch((err) => console.error(err));
};