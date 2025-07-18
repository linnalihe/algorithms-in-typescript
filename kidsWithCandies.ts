// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/?envType=study-plan-v2&envId=leetcode-75

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    
    // need the max of the array -> iterate once O(N)
    // need to compare idx val + extraCandies to max -> O(N)
    // need to store max and result -> O(N)

    const result : boolean [] = Array.from(candies, (x) => false)
    let largestCandies = candies[0]
    
    for (let idx =1; idx < candies.length; idx++){
        if( candies[idx] > largestCandies ){
            largestCandies = candies[idx];
        }
    }

    for(let idx=0; idx < candies.length; idx++){
        if(candies[idx]+extraCandies >= largestCandies){
            result[idx] = true
        }
    }
    

    return result
};

function kidsWithCandiesV2(candies: number[], extraCandies: number): boolean[] {

    // find the max in the candies array
    // compare candy + extraCandies with the max
    const maxCandies = candies.reduce((acc, curr) =>Math.max(acc, curr))
    return candies.map(num => num + extraCandies >= maxCandies)
    
};

console.log(kidsWithCandies([2,3,5,1,3], 3))
console.log(kidsWithCandiesV2([2,3,5,1,3], 3))