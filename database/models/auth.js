exports.authSignup = (data) => {

    let insertAuthSignup = `INSERT INTO 
        Account(email,password) VALUES('${data.email}', '${data.password}')`;

    return insertAuthSignup;
}

exports.isEmailExist = (data) => {

    let verifyEmail = `SELECT * FROM Account  WHERE email = '${data.email}' `;
    return verifyEmail;
}
