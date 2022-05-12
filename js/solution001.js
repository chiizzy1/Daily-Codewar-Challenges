
                        /*  *****
Challenge: Sum of positive

Instructions: You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
              
                 MY Solution
function positiveSum(arr) {
    const allPositives = x => x > 0
    let newArr = arr.filter(allPositives)
    const totalPrice = newArr.reduce((acc, val) =>{
          return acc + val
          }, 0)
       
     return totalPrice
       
  }

               CodeWars Solution

function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

 */
