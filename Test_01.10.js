"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        return "Hello, " + this.name;
    };
    return Person;
}());
exports.Person = Person;
//import { Person } from './person';
//import 키워드를 통해 외부 클래스 포함하는 것이 가능하다.
//트랜스파일링시 임포트된 클래스 포함
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.study = function () {
        return this.name + " is studying!!";
    };
    return Student;
}(Person));
var _ = require("lodash");
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        var group = _.groupBy(['one', 'two', 'three'], 'length');
        console.log(group);
        return 0;
    };
    return Startup;
}());
Startup.main();
var foo = 'hello';
function multiply1(x, y) {
    return x * y;
}
var multiply2 = function (x, y) { return x * y; }; //람다 표현식?
