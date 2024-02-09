const path = require('path')

const filepath = path.join('/modulessharing' , 'types of module' , 'os.js');
 
console.log(filepath);
 
//absoulte path name
const absolute = path.resolve(__dirname , 'new' , 'old' , 'f.txt');
console.log(absolute);