function reverseWords(s: string): string {

    // trim and fix the string
    // return s if it's only one word
    // array of strings to and then swap order
    // return array joined by space

    function swap(arr: string[], idx1: number, idx2: number){
        let temp = arr[idx1]
        arr[idx1] = arr[idx2]
        arr[idx2] = temp
    }

    const newS = s.trim().split(' ')
    const sArr = [...newS].filter((x) => x.length > 0)

    let leftIdx = 0
    let rightIdx = sArr.length-1
    while(leftIdx < rightIdx){
        swap(sArr, leftIdx, rightIdx)
        leftIdx++
        rightIdx--
    }

    return sArr.join(' ')
    
};

function reverseWordsV2(s: string): string {

    // trim and fix the string
    // return s if it's only one word
    // array of strings to and then swap order
    // return array joined by space

    // remove white space from string
    let nS = s.trim()
    // create a list from the words and split using 1 or more spaces
    let wordsList = nS.split(/\s+/)    
    wordsList.reverse()
    return wordsList.join(' ')
};

console.log(reverseWords("i just had macoroni and meatballs for lunch"))
console.log(reverseWordsV2("i just had macoroni and meatballs for lunch"))