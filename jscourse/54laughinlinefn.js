var laugh = function(num){
    var print="";
    for(var i=num; i>0; i--){
        if(i>1){
            print+="ha";
        }
        else if (i===1){
            print+="ha!";
        }
    }
    return(print);
}/* finish the function expression */

console.log(laugh(10));

