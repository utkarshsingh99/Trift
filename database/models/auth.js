const mongoose = require('mongoose')

const AccountSchema = new mongoose.Schema({
    id: Number,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    profilePicture: String,
    bannerPicture: String,
    description: String,
    DepartingCity_id: Number,
    residentCounty_id: Number,
    HomeTown_id: Number,
    id_Roles: Number,
    id_Personalities: Number,
    createdAt: Date,
    updatedAt: Date
})

// exports.authSignup = (data) => {
AccountSchema.statics.authSignup = function (data) {
    let newUser = new Account(data);
    
    return newUser.save()
}

AccountSchema.statics.emailExists = function (data) {
    return Account.findOne({email: data.email})
}

AccountSchema.statics.login = function (data) {
    return Account.findOne({email: data.email})
}

    // let insertAuthSignup = `INSERT INTO 
    //     Account(email,password) VALUES('${data.email}', '${data.password}')`;

    // return insertAuthSignup;


// exports.isEmailExist = (data) => {

//     let verifyEmail = `SELECT * FROM Account  WHERE email = '${data.email}' `;
//     return verifyEmail;
// }

const Account = mongoose.model('Account', AccountSchema)

module.exports = Account