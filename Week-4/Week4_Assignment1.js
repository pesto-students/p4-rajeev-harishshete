const p = new Promise(function getNumber(resolve, reject){
    //Generating and storing random number between 0-1.
    let randomNumber = Math.random();
    console.log("Generated Random Number is: " + randomNumber );

    if(randomNumber%5==0){
        reject(20);
    }
    else
    {
        resolve(new Date().toLocaleTimeString());
    } 
});

//Handling Resolve and Reject 
p.then(time => {console.log("promise was Resolved at: " + time )},time => {console.log("promise was Resolved at: " + time )});




