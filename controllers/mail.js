const nodeMailer = require('nodemailer');

exports.sendEmail = (form, tag) => {
    if(tag !== 'insuranceId') return;
    const auth = {
        type: 'OAuth2',
        user: process.env.EMAIL
    };
    let transporter = nodeMailer.createTransport({
        service: 'smtp.gmail.com',//smtp.gmail.com  //in place of service use host...
        secure: false,//true
        port: 25,//465
        ignoreTLS: true,
        auth 
    });

    transporter.set('oauth2_provision_cb', (user, renew, callback)=>{
        let accessToken = userTokens[user];
        if(!accessToken){
            return callback(new Error('Unknown user'));
        }else{
            return callback(null, accessToken);
        }
    });
    
    let div = prepareForm(form);
    let mailOptions = {
        from: 'mcanelo41@gmail.com',
        to: 'mpcanelo42@gmail.com',
        subject: 'SEGURU MESSAGE', 
        text: 'Formulario completado', 
        html: div
    }

    transporter.sendMail(mailOptions, (error, data) => {
        if(error){
            console.log('ERROR SENDING EMAIL: ', error);
            return;
        }
        if(data){
            console.log('SUCESS SENDING EMAIL');
        }
    });
}

const prepareForm = (form) => {
    const intermediateForm = form.split('\'').join('"');
    const json = JSON.parse(intermediateForm);
    let div = '<div><h1>' + json.formName +  '</h1><br>'
    json.completedQuestions.forEach(question => {
        div += getQuestions(question);
        if(question.completedSubquestions){
            question.completedSubquestions.forEach(subquestion => {
                div += getQuestions(subquestion);
            })
        }
    });
    div += '</div>';
    return div;
}

const getQuestions = (question) => {
    if(!question.question) return '';
    const questionTag = '<h4>' +question.question+ '</h4>';
    let answerTag = '<p>';
    answerTag += question.answer? question.answer: (question.checked? (question.checked === true? 'Si' : 'No') : 'No');
    answerTag += '</p>';

    let div = '<div>' + questionTag + answerTag + '</div><br>';
    return div;
}

