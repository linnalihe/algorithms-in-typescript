function gcdOfStrings(str1: string, str2: string): string {

    // check repeating substring
    // if not repeating then there is no GCD
    if (str1 + str2 != str2 + str1) return ""

    // we know that it's a repeating substring
    // keep cutting the substring by the shorter substring
    // by using modulo to get the remainder
    let str1Len = str1.length
    let str2Len = str2.length
    while( str2Len ) [str1Len, str2Len] = [str2Len, str1Len % str2Len]

    return str2.substring(0, str1Len)

};

console.log(gcdOfStrings("abcabcabc","abc"));