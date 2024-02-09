const { readFileSync , writeFileSync } = require("fs");

    const first = fs.readFileSync('./new/old/f.txt', 'utf8');
    const second = fs.readFileSync('./new/old/s.txt', 'utf8');
    
    console.log(first);
    console.log(second);

    writeFileSync('./new/old/field.txt' , `welcome`)
    
