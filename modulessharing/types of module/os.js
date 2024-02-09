const os = require('os');

const user = os.userInfo();
console.log(user);

console.log(`the system uptime is ${os.uptime()}`)

const userinfo = {
    user: os.type,
    relase:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem()
}
console.log(userinfo)