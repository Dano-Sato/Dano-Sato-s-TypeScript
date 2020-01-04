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

//Get whole string from the Img processor file.


//Process the html code to get img sources.
//Regular Expression method.
/*
var str = '<img src="http://site.org/one.jpg />\n <img src="http://site.org/two.jpg />',
    rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g,
    rex2 = ;
while ( m = rex.exec(str2)) 
{
  urls.push( m[1] );
}*/
//Didn't Work.

let dom=new BDom(str2);
let ImgNode = dom.querySelectorAll('img')
let ProcessedStr = '';
for(var val of ImgNode)
  {
    console.log(val.outerHTML)
    ProcessedStr+=val.outerHTML;
    ProcessedStr+="\n";
  }

//Write processed code to the img processor file.
fs.writeFile(path,ProcessedStr, function(err) {
  if(err) {
    return console.error(err);
  } console.log("File created!");
});


