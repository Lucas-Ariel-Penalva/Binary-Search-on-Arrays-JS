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
