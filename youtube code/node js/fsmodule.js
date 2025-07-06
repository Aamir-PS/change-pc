/*
fs.readFile('index.txt', 'utf8', (err, data)=>{
    console.log(err, data)
    })
    */
   const fs = require('fs');
// const a = fs.readFileSync('index.txt')
// console.log(a.toString())

 const b = fs.writeFileSync('file2.txt', "this is a data2"
    /* ()=>{
    console.log("written to the file" */ 
    );
    console.log(b)
// });
    console.log("Finished reading file")