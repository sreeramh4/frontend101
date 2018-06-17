//Combines objects, object methods, arrays, array methods
//You cant access the method/property inside the object directly
//so to use it syntax is:
//objectName.propertyName
//eg: facebookProfile.message

//postMessage is the name of the Method, post is the name of the function
var facebookProfile = {

    name: "S",
    friends: 11,
    messages: ["This", "aint", "a", "song", "for","the"],
    postMessage: function post(message){
        facebookProfile.messages.push(message);
    },
    deleteMessage: function del(index){
        facebookProfile.messages.splice(index,1);
    },
    addFriend: function addFriend(){
        facebookProfile.friends+=1;
    },
    removeFriend: function removeFriend(){
        facebookProfile.friends-=1;
    }

};

facebookProfile.deleteMessage(2);
console.log(facebookProfile.messages);