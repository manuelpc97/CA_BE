var user = require('../schemas/user');

exports.createUser = (request, response) => {
    var newUser = new user({
        username : request.body.username, 
        password: request.body.password,
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email, 
        id: request.body.id, 
        phone: request.body.phone
    });
    
    newUser.save();
    response.sendStatus(200);
}

exports.logIn = (request, response) => {
    user.find({username: request.body.username}, (error, filteredUser) => {
        if(error){
            response.sendStatus(500);
        }else{
            if(filteredUser[0] && filteredUser[0].password === request.body.password){
                response.json(filteredUser[0]);
            }else{
                response.sendStatus(401);
            }
        }
    })
}