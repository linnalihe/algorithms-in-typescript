function reverseVowels(s: string): string {

    // create an array for string and
    // iterate from front and back to swap the vowels
    // if they are vowels

    function swap(arr: string[], idx1: number, idx2: number){
        let temp = arr[idx1]
        arr[idx1] = arr[idx2]
        arr[idx2] = temp
    }

    let vowelsRef = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    let idxLeft = 0
    let idxRight = s.length -1

    const sArr = [...s]

    while(idxLeft < idxRight){
        if(!vowelsRef.includes(sArr[idxLeft]) && idxLeft < s.length){
            idxLeft++
        }
        if(!vowelsRef.includes(sArr[idxRight]) && idxRight >= 0){
            idxRight--
        }

        if(vowelsRef.includes(sArr[idxRight]) && vowelsRef.includes(sArr[idxLeft])){
        swap(sArr, idxLeft, idxRight)
        idxLeft++
        idxRight--
        }

     

    }

    return sArr.join('')

    
    
};

console.log(reverseVowels("IceCreAm"))
console.log(reverseVowels("leetcode"))