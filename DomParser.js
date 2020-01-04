var fs = require('fs');
var path = '/Users/satodano/ImgReader.txt';
var m, urls = [];
var str2 = fs.readFileSync(path, 'utf8', function (err, data) {
    if (err) {
        return console.error(err);
    }
});
var str = '<img src="http://site.org/one.jpg />\n <img src="http://site.org/two.jpg />', rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;
while (m = rex.exec(str2)) {
    urls.push(m[1]);
}
fs.writeFile(path, urls, function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("File created!");
});
