// Problem: Given an array of objects, transform it into a single object where the keys are derived from a specified property of the original objects, and the values are the objects themselves.

// Input:
interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

// Output (transformed by 'id'):
// {
//   '1': { id: 1, name: 'Alice', email: 'alice@example.com' },
//   '2': { id: 2, name: 'Bob', email: 'bob@example.com' },
//   '3': { id: 3, name: 'Charlie', email: 'charlie@example.com' },
// }

// create a new dictionary
// iterate through and create an object for each
// set the id as the keys

interface Result {
  [key: string]: Object; // Defines a dictionary where keys are strings and values are strings
}

function createKeyedDictionary(input: User[]){

  const res: Result = {}
  for(let idx=0; idx<input.length; idx++){

    const { id } = input[idx]
    const keyVal: string = id+""
    res[keyVal] = {...input[idx]}
  }

  return res

}

console.log(createKeyedDictionary(users))