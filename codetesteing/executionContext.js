// execution context 
var sq = square(3);
var n = 2;

function square (num){
    console.log("function logs")
    var ans = num + num;
    return ans 
}


console.log(sq);

