// Problem: Given a nested array of numbers, flatten it into a single-dimensional array.

// Input:
const nestedArray = [1, [2, 3], [4, [5, 6]], 7];

// Output:
// [1, 2, 3, 4, 5, 6, 7]

// recursive function where if the item is a number, append
// if the item is an arry then call self


function flattenArray(arr: any []) {

  const res: number[] = []

  flattenArrayHelper(arr, res)

  return res

}

function flattenArrayHelper(subArr: any[], res: number[]){


    for(let idx=0; idx<subArr.length; idx++){
      if(typeof subArr[idx] === 'number'){
      res.push(subArr[idx])
    }else{
      flattenArrayHelper(subArr[idx], res)
    }
  }
}

const result = flattenArray([1, [2, 3], [4, [5, 6]], 7])
console.log(result)

const correctAnswer = [1, 2, 3, 4, 5, 6, 7]

console.log(`Your result is correct: ${result.join('') == correctAnswer.join('')}`)