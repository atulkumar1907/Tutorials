const fs = require('fs');
const path = require('path');
require("colors");

const dirPath  =path.join(__dirname, 'file')
const input = process.argv;

if(input[2]=="add")
{
    fs.writeFileSync(`file/${input[3]}`, input[4]);
}else if(input[2]=="remove")
{
    fs.unlinkSync(`file/${input[3]}`);
}
else if(input[2]=="append")
{
    fs.appendFileSync(`file/${input[3]}`,`\n \n${input[4]}`);
}else
{
    console.log(' Invalid Input! '.italic.magenta.bgWhite.bold);
}

// fs.rename(currFile, newfilename_with-path)
// fs.readfile(filename, callback)
