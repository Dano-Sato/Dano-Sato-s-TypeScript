const fs = require('fs');



let path='/Users/satodano/ImgReader.txt';
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
var str = '<img src="http://site.org/one.jpg />\n <img src="http://site.org/two.jpg />',
    rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g,
    rex2 = ;
while ( m = rex.exec(str2)) 
{
  urls.push( m[1] );
}


//Write processed code to the img processor file.
fs.writeFile(path,urls, function(err) {
  if(err) {
    return console.error(err);
  } console.log("File created!");
});


