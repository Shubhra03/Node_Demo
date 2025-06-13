function debugMessage() {
    console.log("Debugging in progress...");
    var a = 5;
    if(a = 5) {
        console.log("a is equal to 5");
    }
    else{
        console.log("a is not equal to 5");
    }
}

module.exports = debugMessage;