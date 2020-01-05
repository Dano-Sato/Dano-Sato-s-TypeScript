//Get whole string from the Img processor file.

const fs = require('fs');
const BDom = require('beautiful-dom');


let path='/Users/satodano/ImgReader.html';
var m,
    urls = [];
let str2 = fs.readFileSync(path,'utf8',function (err, data)
                         {
                           if (err)
                             {
                               return console.error(err);
                             }
                         }
                  
                        );

let dom=new BDom(str2);
let ImgNode = dom2.querySelectorAll('img');
let ProcessedStr = '';
for(var val of ImgNode)
  {
    let tempStr=val.outerHTML;
   console.log(tempStr);
    ProcessedStr+=tempStr;
    ProcessedStr+="\n";
      
  }

//Write processed code to the img processor file.
fs.writeFile(path,ProcessedStr, function(err) {
  if(err) {
    return console.error(err);
  } console.log("File created!");
});


