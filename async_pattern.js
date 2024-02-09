const fs = require('fs').promises;// method -3

async function calling() {
    try {
        const var1 = await fs.readFile('C:\\Users\\HP\\Desktop\\Node\\content\\file.txt', 'utf8');
        const var2 = await fs.readFile('C:\\Users\\HP\\Desktop\\Node\\content\\world.txt', 'utf8');
        await fs.writeFile('C:\\Users\\HP\\Desktop\\Node\\content\\hello.txt', `hello there ${var1}, ${var2}`);
    } catch (err) {
        console.error(err);
    }
}

calling();


//const readFilePromise = util.promisify(fs.readFile);// this util.promissfy will return promise this apporach is more cleanr 
// const writeFilePromise = util.promisify(fs.writeFile);

//method 2
// function getText(path){
//     return new Promise(function (resolve, reject) {
//         fs.readFile(path, 'utf8', function (err, data) {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// }