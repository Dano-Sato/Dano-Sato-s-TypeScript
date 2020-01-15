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
