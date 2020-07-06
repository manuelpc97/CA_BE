// const sgMail = require('@sendgrid/mail');
// const mailgun = require("mailgun-js");
const dotenv = require('dotenv');
dotenv.config();
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill('9wilxIR9RB8ZslgnpP1RUQ');

// exports.sendEmail = async (req, res) => {
//     console.log('process.env.API_KEY_PUBLIC, process.env.API_KEY_PRIVATE--->', process.env.API_KEY_PUBLIC, process.env.API_KEY_PRIVATE);
//     const mailjet = require('node-mailjet')
//         .connect(process.env.API_KEY_PUBLIC, process.env.API_KEY_PRIVATE)
//     const {
//         adressEmailTo,
//         nameTo,
//         adressEmailFrom,
//         subject,
//         message
//     } = req.body;

//     const params = {
//         Messages: [
//             {
//                 From: {
//                     Email: "danielaosorto@yahoo.es",
//                     Name: "SEGURÚ"
//                 },
//                 To: [
//                     {
//                         "Email": adressEmailTo,
//                         "Name": nameTo
//                     }
//                 ],
//                 Subject: "Greetings from Mailjet.",
//                 TextPart: "My first Mailjet email",
//                 HTMLPart: "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
//                 CustomID: "AppGettingStartedTest"
//             }
//         ]
//     }

//     const response = await mailjet
//         .post("send", { 'version': 'v3.1' })
//         .request(params);

//     res.send(response);
// }

exports.sendEmail = async (req, res) => {
    // sgMail.setApiKey(process.env.EMAIL_API_KEY);
    // console.log('process.env.EMAIL_API_KEY---> ', process.env.EMAIL_API_KEY);
    // try {
    const {
        toEmail,
        nameTo,
        fromName,
        fromEmail,
        subject,
        message
    } = req.body;

    //     const emailToSend = {
    //         to: toEmail,
    //         from: fromEmail,
    //         subject,
    //         text: message,
    //         html: '<strong>Testing html param</strong>',
    //     };
    //     const emailResponse = await sgMail.send(emailToSend);
    //     console.log('emailResponse ---> ', emailResponse);
    //     res.send({ emailResponse });
    // } catch (error) {
    //     console.log('error ----> ', error);
    //     res.send({ error });
    // }

    // try {
    //     const {
    //         toEmail,
    //         // nameTo,
    //         // fromEmail,
    //         subject,
    //         message
    //     } = req.body;


    //     const DOMAIN = "sandbox06c14fc6e356410f9df32b5bcb6c278f.mailgun.org";
    //     const mg = mailgun({ apiKey: "51175276b9553c99881aa05d13ce6d1b-913a5827-e8077dd9", domain: DOMAIN });
    //     const data = {
    //         from: "Mailgun Sandbox <postmaster@sandbox06c14fc6e356410f9df32b5bcb6c278f.mailgun.org>",
    //         to: toEmail,
    //         subject,
    //         text: message
    //     };
    //     const emailResponse = await mg.messages().send(data)

    //     console.log('emailResponse ---> ', emailResponse);
    //     res.send({ emailResponse });
    // } catch (error) {
    //     console.log('error ----> ', error);
    //     res.send({ error });
    // }c
    try {
        const Mandrillmessage = {
            html: "<p>Testing HTML mandrill</p>",
            text: message,
            subject,
            from_email: fromEmail,
            from_name: fromName,
            to: [{
                email: toEmail,
                name: nameTo,
                type: 'to'
            }],
        }

        // const emailResponse = await mandrill_client.messages.send({ message: Mandrillmessage })
        // console.log('emailResponse ---> ', emailResponse);
        // res.send({ emailResponse });
        mandrill_client.messages.send({ message: Mandrillmessage }, function (result) {
            console.log(result);
            /*
            [{
                    "email": "recipient.email@example.com",
                    "status": "sent",
                    "reject_reason": "hard-bounce",
                    "_id": "abc123abc123abc123abc123abc123"
                }]
            */
           res.send({ result: result });
        }, function (e) {
            // Mandrill returns the error as an object with name and message keys
            res.send({ error: e });
            console.log('A mandrill error occurred: ' + e.name + ' - ' + e.message);
            // A mandrill error occurred: Unknown_Subaccount - No subaccount exists with the id 'customer-123'
        });
    } catch (error) {
        console.log('error ----> ', error);
        res.send({ error });
    }

}