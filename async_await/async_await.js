const { get } = require("lodash");

const API_URL = "https://api.github.com/users/sanket5803";

async function getdata() {
    const err = new Error("invalid api");
    try {
        const data = await fetch(API_URL);
        const result = await data.json();
        console.log(result);
    } catch (error) {
        console.log(err.message); // Use the outer 'err' variable or rename the variable in the catch block
    }
}

getdata().catch((err) => console.log(err));// just another way to catch error 
 