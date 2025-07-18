//Problem: Given an array of strings, group anagrams together. Anagrams are words or phrases formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Input:
const words = ["eat", "tea", "tan", "ate", "nat", "bat"];

// Output:
// [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]

// iterat list and sort each item to compare
// use dict with key to compare against

interface Grouped {
  [key: string] : string[]
}

function groupAnagram(input: string[]){

  const grouped: Grouped = {}
  input.forEach((item) => {

    const itemAsList = item.split('')
    itemAsList.sort()
    const itemSorted: string = itemAsList.join('') 


    if(itemSorted in grouped){
      grouped[itemSorted].push(item)
    }else{
      grouped[itemSorted] = [item]
    }
  }
  )

  const res: string[][] = Object.values(grouped)
  return res

}

console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]))