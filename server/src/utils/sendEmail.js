import nodemailer from `nodemailer`

const sendEmail = async (to, subject, mailBody) => {
    try{
        const transpoter = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user:process.env.GMAIL_USER,
                pass:process.env.GMAIL_PASSCODE,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to,
            subject,
            html: mailBody,
        };
        
        const result = await transpoter.sendMail(mailOptions);
        console.log(`Email sent successfully to`, result.messageId);
        return true;
    }catch (error){
        console.error(`Error Sending Email`,error)
        return false;
    }
};