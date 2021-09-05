/* Implementation of binary search on a SORTED NUMBER ARRAY. */

function binarySearchNum(arr,num){
    let start = 0;
    let end = arr.length -1;

    while(start <= end){
        let middle = Math.floor((start + end) / 2);

        if(arr[middle] === num) return middle;

        arr[middle] < num ? start = middle + 1 : end = middle -1;
    }

    return -1
}

/* Implementation of binary search on an ALPHABETICALLY SORTED STRING ARRAY using the "localeCompare" method

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare

String.prototype.localeCompare() is useful for comparing strings as the optional arguments let you specify the language you are working with and much more 
such as how punctuation or case should be treated by the comparison function. It's better practice than relying on the pseudo-alphabetical sort that 
Array.prototype.sort() applies when you don't specify any argument (Javascript Array Sort also modifies the array in place, which can create mutations). */

function binarySearchStr(arr,str){

    let start = 0;
    let end = arr.length -1;
  
    while(start <= end){
      let middle = Math.floor((start + end) / 2);
      let comparison = str.localeCompare(arr[middle],"en");
    
      if(comparison === 0) return middle;
      
      if(comparison < 0 ){
        end = middle -1;
      } else start = middle +1;
  
    }
  
    return -1
  }
