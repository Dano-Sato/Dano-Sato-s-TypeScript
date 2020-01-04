var fs = require('fs');
var BDom = require('beautiful-dom');
var path = '/Users/satodano/ImgReader.txt';
var m, urls = [];
var str2 = fs.readFileSync(path, 'utf8', function (err, data) {
    if (err) {
        return console.error(err);
    }
});
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
var dom = new BDom(str2);
var ImgNode = dom.querySelectorAll('img');
var ProcessedStr = '';
for (var _i = 0, ImgNode_1 = ImgNode; _i < ImgNode_1.length; _i++) {
    var val = ImgNode_1[_i];
    console.log(val.outerHTML);
    ProcessedStr += val.outerHTML;
    ProcessedStr += "\n";
}
ProcessedStr += "^M";
//Write processed code to the img processor file.
fs.writeFile(path, ProcessedStr, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("File created!");
});
