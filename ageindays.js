function ageindays(person){
    
    const fullname = person.firstName + " "+ person.lastName ;

    const ageindays = person.age * 365 ;

    return{
        fullname : fullname,
        ageindays  : ageindays
    }
}

const person = {
    firstName: "Veeresh",
    lastName: "Shetty",
    age: 22
};

const result = ageindays(person);
console.log(result);