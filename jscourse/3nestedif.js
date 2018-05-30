/*
 * Programming Quiz: Musical Groups (3-3)
 TIP: Make sure to test your code with different values. For example,

If musicians equals 3, then trio should be printed to the console.
If musicians equals 20, then this is a large group should be printed to the console.
If musicians equals -1, then not a group should be printed to the console.
 */

// change the value of `musicians` to test your conditional statements
var musicians = -1;

if(musicians===1){
    console.log("solo");
}
else if(musicians===2){
    console.log("duet");
}
else if(musicians===3){
    console.log("trio");
}
else if(musicians===4){
    console.log("quartet");
}
else if(musicians>4){
    console.log("this is a large group");
}
else{
    console.log("not a group");
}
