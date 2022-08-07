function memoize(fn)
{   const cache = new Map();
    return function(...args)
    {
        const key = args.toString();
        if(cache.has(key))
        {
            console.log('Available');
            return cache.get(key);
        }
        cache.set(key,fn(...args));
        console.log('Not');
        return cache.get(key);
    }
}

function add(...args)
{
    const ar = Array.from(args);
    let sum = 0;
    for(let i =0; i<ar.length; i++)
    {
        sum = sum + ar[i];
    }
    return sum;
}

const memoized = memoize(add);

console.time();
console.log(memoized(758,689,235,14));
console.timeEnd();

console.log("=========================================");

console.time();
console.log(memoized(758,689,235,14));
console.timeEnd();
