var ImgReader = /** @class */ (function () {
    function ImgReader() {
    }
    ImgReader.prototype.Exam = function (code) {
        console.log(code.match(/<img[^>]+src="http([^">]+)/g));
    };
    return ImgReader;
}());
var m, urls = [], str = '<img src="http://site.org/one.jpg />\n <img src="http://site.org/two.jpg />', rex = /<img[^>]+src="?([^"\s]+)"?\s*\/>/g;
while (m = rex.exec(str)) {
    urls.push(m[1]);
}
console.log(urls);
var t = new ImgReader();
t.Exam("<img src=http://static2.ccn.com/ccs/2013/02/img_example.jpg />");
