function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    // decrement n to 0 and return true if n is 0
    // at each step, check if there is a spot for flower
    // when the 0 idx is 0, have to check if 1 idx is also 0 to plant
    // typescript doesn't have out of bound error
    
    for(let idx=0; idx<flowerbed.length; idx++){
        let prev = idx-1
        let next = idx+1
        if(flowerbed[prev] != 1 
        && flowerbed[next] != 1 
        && flowerbed[idx]  != 1){
            n-=1
            flowerbed[idx] = 1
        }
    }

    return n<=0
};

function canPlaceFlowersV2(flowerbed: number[], n: number): boolean {
    // decrement n to 0 and return true if n is 0
    // at each step, check if there is a spot for flower
    // when the 0 idx is 0, have to check if 1 idx is also 0 to plant
    // check that n > 0 before running another loop
    
    for(let idx=0; n>0 && idx<flowerbed.length; idx++){
        let prev = idx-1
        let next = idx+1
        if(flowerbed[prev] != 1 
        && flowerbed[next] != 1 
        && flowerbed[idx]  != 1){
            n--
            idx++
        }
    }

    return n==0
};

console.log(canPlaceFlowers([1,0,0],2));
console.log(canPlaceFlowersV2([1,0,0],2));