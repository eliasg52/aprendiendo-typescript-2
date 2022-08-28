// Type Annotations
let myName: string = 'Elias';

const sumar = (a: number, b: number) => {
  return a + b;
};

let myLastname = 'garcia' as string;
/* myLastname = 5; ERROR*/

// Inferred Types
let myAge = 23;
/* myAge = '22'; ERROR*/

// Union Types
const numbersAndStrings: (number | string)[] = [2, 'a', 4];

let theAnswer: string | number = 23;
theAnswer = 'asd';

// Objects and Interfaces
interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: 'asd',
  age: 23,
};

// Optional Properties
interface PersonWithDog {
  name: string;
  age: number;
  dogName?: string; // con el ? le decimos que es una propiedad opcional. Puede estar como no
}

const user2: PersonWithDog = {
  name: 'asd',
  age: 23,
};

const userWithDog: PersonWithDog = {
  name: 'asd',
  age: 23,
  dogName: 'India',
};

// Generics
function sortItems<MyArrayType>(
  items: MyArrayType[],
  compareFn: (a: MyArrayType, b: MyArrayType) => number
): MyArrayType[] {
  return items.sort(compareFn);
}

const numbers = [3, 2, 6, 8, 4];
const sortedNumbers = sortItems<number>(numbers, (a, b) => a - b);

// Type Assertions
type Streamer = 'affiliate' | 'partner';

interface PersonYoutube {
  name: string;
  age: number;
  streamerType: Streamer;
}

const person3: PersonYoutube = {
  name: 'elias',
  age: 32,
  streamerType: 'affiliate',
};
