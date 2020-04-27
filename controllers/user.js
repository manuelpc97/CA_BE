var user = require('../schemas/user');

exports.createUser = async (request, response) => {
    try{
        var newUser = new user({
            username : request.body.username, 
            password: request.body.password,
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            email: request.body.email, 
            id: request.body.id, 
            phone: request.body.phone
        });
        
        await newUser.save();
        response.sendStatus(200);
    }catch(exception){
        response.status(500).send(exception);
    }
}

exports.logIn = async (request, response) => {
    try{
        var users = await user.find({username: request.body.username});
        
        if(users.length !== 0){
            var filteredUser = users[0];
            if(filteredUser && filteredUser.password === request.body.password){
                response.status(200).json(filteredUser);
            }else{
                response.status(401).send('User not found');
            }
        }else{
            response.status(401).send("User not found");;
        }
    }catch(exception){
        response.status(500).send(exception);
    }
}