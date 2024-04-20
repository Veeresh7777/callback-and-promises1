function manipulateString(str) {// Convert the characters of the string to uppercase
    const manipulatedString = str.toUpperCase();
    
    function logString() {
        
        console.log("The manipulated string is: " + manipulatedString);
    }

    return logString;
}


const originalString = "hello world";


const callback = manipulateString(originalString);

callback();
