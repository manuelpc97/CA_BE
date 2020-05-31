var crypto = require('crypto');
var user = require('../schemas/user');

exports.createUser = async (request, response) => {
    try{
        var cipher = crypto.createCipher('aes128', 'password');
        var encrypted = cipher.update(request.body.password, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        var newUser = new user({
            username : request.body.username, 
            password: encrypted,
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            email: request.body.email, 
            id: request.body.id, 
            phone: request.body.phone
        });
        
        await newUser.save();
        response.status(200).send({message: 'SUCCESS CREATING USER'});
    }catch(exception){
        response.status(500).send(exception);
    }
}

exports.logIn = async (request, response) => {
    try{
        var users = await user.find({username: request.body.username});
        if(users.length !== 0){
            var filteredUser = users[0];
            var cipher = crypto.createCipher('aes128', 'password');
            var encrypted = cipher.update(request.body.password, 'utf8', 'hex');
            encrypted += cipher.final('hex');
            if(filteredUser && filteredUser.password === encrypted){
                response.status(200).json(filteredUser);
            }else{
                response.status(401).send({message: 'User not found'});
            }
        }else{
            response.status(401).send({message: 'User not found'});;
        }
    }catch(exception){
        response.status(500).send({message: 'User not found'});
    }
}