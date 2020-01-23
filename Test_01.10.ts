export class Person {
    protected name: string;

    constructor(name: string)
    {
        this.name = name;
    }

    sayHello()
    {
        return "Hello, " + this.name;
    }

}

//import { Person } from './person';
//import 키워드를 통해 외부 클래스 포함하는 것이 가능하다.
//트랜스파일링시 임포트된 클래스 포함


class Student extends Person
{
    study(): string
    {
        return `${this.name} is studying!!`;
    }
}

import * as _ from "lodash";

class Startup {
    public static main(): number {
        const group = _.groupBy(['one','two','three'], 'length');

        console.log(group);        return 0;
        
    }
}

Startup.main();

let foo: string = 'hello';

function multiply1(x: number, y: number): number{
    return x * y;    
}

const multiply2 = (x: number, y: number): number => x*y;//람다 표현식?

class sum
{
    constructor(public i: number, public j: number) {}
    Add() {return (this.i + this.j)}
}

window.onload = () =>
{
    var button = document.createElement('button')
    button.innerText = "SUM"
    button.onclick = function()
    {
        var first = parseFloat((<HTMLInputElement> document.getElementById("Text1")).value);
        var second = parseFloat((<HTMLInputElement>document.getElementById("Text2")).value);
        var total = new sum(first, second);
        alert("Add of Two number " + total.Add());
    }
}

const done: boolean = true;

const numbers: number[] = [1,2,3];
const messages: string[] = ["hello", "world"];

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

function sum2(x: number, y: number): number
{
    return null;
}

function sumArray(numbers: number[]): number
{
    return numbers.reduce((acc, current)=>acc + current, 0);
}

function returnNothing(): void
{
    console.log('I am just saying hello world!');
}


interface Shape {
    getArea(): number;
}

class Circle implements Shape // 인터페이스를 받아올 경우 구현해야 한다.
{
    radius: number;
    constructor(_radius: number)
    {
        this.radius = _radius;        //this 태그를 꼭 달아줘야만 멤버참조가 되는 모양
    }
    getArea()
    {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape
{
width: number;
height: number;
constructor(width: number, height: number)
{
    this.width = width;
    this.height = height;
}
getArea()
{
    return this.width * this.height;
}
}

const shapes: Shape[] = [new Circle(5), new Rectangle(10,5)];

shapes.forEach(Element =>
    {
        console.log(Element.getArea());
    });// 원소 참조형 루프
