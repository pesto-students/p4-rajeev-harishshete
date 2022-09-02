async function doTask1()
{
    console.log('Inside toTask1');
    return 1;
}

async function doTask2()
{
    console.log('Inside toTask2');
    return 2;
}

async function doTask3()
{
    console.log('Inside toTask3');
    return 3;
}

async function ExecuteUsingSyncAndAwit()
{
    //Here, Awit below will make sure Sequtential Execution of these functions
    console.log(await doTask1()); 
    console.log(await doTask2());
    console.log(await doTask3());
}


function * ExecuteUsingGenerator(){

    console.log('Generator started...');
    
    yield doTask1();
    yield doTask2();
    yield doTask3();
}

//Executing methods using generators
let generator = ExecuteUsingGenerator();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
//generator.next();
//generator.next();

console.log('**************************************');
ExecuteUsingSyncAndAwit();