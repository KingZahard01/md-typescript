console.log("Hello via Bun!");

// Variables

let myStr: string = "Hola";
console.log(myStr);
console.log(typeof myStr);

let myNum: number = 5;
console.log(myNum);
console.log(typeof myNum);

let myNum2 = 6.5;
console.log(myNum2);
console.log(typeof myNum2);

console.log(myNum + myNum2);

let myBool: boolean = false;
myBool = true;
console.log(myBool);
console.log(typeof myBool);

let myUndefined: undefined;
// myUndefined = "My" // Error
console.log(myUndefined);

// Constantes

const myConst = "Mi constante";
// myConst = "Otra constante"; // Error
console.log(myConst);

// Controles de flujo

if (myNum == 10) {
  console.log("Su valor es 10");
} else if (myNum == 6) {
  console.log("Su valor es 5");
} else {
  console.log("El valor no es 10");
}

// Funciones

function myFunction(): string {
  return "Mi funcion";
}
console.log(myFunction());

function mySum(a: number, b: number): number {
  return a + b;
}
console.log(mySum(3, 4));

// Listas
let myList: Array<string> = ["juan", "pedro", "luis"];
console.log(myList);

// Set

let mySet: Set<string> = new Set(["juan", "pedro", "luis", "juan"]);
mySet.add("33");
console.log(mySet);

// Mapas

let myMap: Map<string, number> = new Map([
  ["juan", 22],
  ["pedro", 33],
]);
myMap.set("luis", 44);
console.log(myMap);
console.log(myMap.get("juan"));

// Bucles

for (const value of myList) {
  console.log(value);
}

let myCounter = 0;
while (myCounter < myList.length) {
  console.log(myList[myCounter]);
  myCounter++;
}

// Clases

class MyClass {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let myClass = new MyClass("Juan", 11);
console.log(myClass);
console.log(myClass.name);

// Enumerados

enum MyEnum {
  TYPESCRIPT = "typescript",
  PYTHON = "python",
  JAVA = "java",
}

const myEnum = MyEnum.TYPESCRIPT;
console.log(myEnum);
