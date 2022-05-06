const bcrypt = require("bcrypt");
const password = "password";
bcrypt.hash(password, 12).then(hash=>{
    console.log(hash);
})