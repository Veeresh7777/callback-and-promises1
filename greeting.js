function greetWithName(name) {
    return new Promise((resolve, reject) => {
        // Check if the name is provided
        if (!name) {
            // If name is not provided, reject the promise
            reject("Name is required!");
        } else {
            // If name is provided, resolve the promise with the greeting message
            resolve(`Hello, ${name}!`);
        }
    });
}

// Example usage:
const name = "Veeresh";


greetWithName(name)
    .then(greeting => {
        console.log(greeting); 
    })
    .catch(error => {
        console.error(error);
    });
