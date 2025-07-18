// https://leetcode.com/problems/maximum-product-subarray/
function maxProduct(nums: number[]): number {

    // bruteforce is iterating through all subarrays, calculating the product
    // and returning the highest value
    // the most efficient solution is DP
    // keep track of 2 numbers -> min and max of the current subarray

    let result = nums.reduce((acc, curr) => curr > acc ? curr : acc)
    let minVal = 1
    let maxVal = 1

    for(let idx = 0; idx < nums.length; idx++){
        const curr = nums[idx]
        if(curr == 0){
            minVal = 1
            maxVal = 1
        }else{
            let productWithMax = curr * maxVal
            let productWithMin = curr * minVal
            minVal = Math.min(productWithMin, productWithMax , curr)
            maxVal = Math.max(productWithMin, productWithMax, curr)

            result = Math.max(maxVal, result)
        }

    }
    return result
};