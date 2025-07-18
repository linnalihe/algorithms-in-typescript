//https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75

function mergeAlternately(word1: string, word2: string): string {
    //create empty string
    let newword = ""
    //iterate through each word1 and word2 alternating to append to empty string
    // we need the index so use for loop
    // look with index of longest string
    for(let i =0; i< Math.max(word1.length, word2.length); i++){

        if (i < word1.length) newword +=word1[i]
        if (i < word2.length) newword +=word2[i]

    }
    // append the remaining word to empty string

    return newword;

};

console.log(mergeAlternately("abc","def"));