// Count Inverse In An Array



// Count the number of inversions in a given array of numbers. A pair (nums[i], nums[j]) is said to form an inversion if nums[i] > nums[j] and i < j.









function count_inversions(nums) {
   
    let count = 0
    
    for( let i = 0; i < nums.length;i++){
        
         for(let j = nums.length-1; j >= 0; j--){
             console.log("is i " + nums[i] + " > " + nums[j] + " ?" + " and is i " + "< " + nums[j]);
            if(nums[i] > nums[j] && i < j){
                console.log(count + " this is count at indici" + j);
                count += 1
            }
         }
    }
    
       console.log(count + " final count")
     return count;
 }