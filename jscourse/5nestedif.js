var balance = 325.00;
var checkBalance = true;
var isActive = true;

if (checkBalance ===true){
    if(isActive===true && balance>0){
        console.log("Your balance is $"+balance.toFixed(2)+".");
    }
    else if(isActive===false){
        console.log("Your account is no longer active.");
    }
    else if(balance===0){
        console.log("Your balance is empty.");
    }
    else{
        console.log("Your balance is negative. Please contact bank.");
    }
}
else{
    console.log("Thank You. Have a nice day!");
}