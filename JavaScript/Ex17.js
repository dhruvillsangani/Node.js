// - Create a function that takes variable number of argument and print the sum of arguments

add = (...arguments)=>{

    const args = Array.from(arguments);
    return args.reduce((pre,curr)=> pre + curr);
}

console.log(add(1,12,3,4));