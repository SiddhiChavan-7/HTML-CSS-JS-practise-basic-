
// --- practice logic 

//Q use rest parameter to accept any number of scores and return the total

function getscore(...scores){
    let total = 0;
   scores.forEach(function(val){
    total = total+val;
   });
   return total;
}
console.log(getscore(10,10,10,10));