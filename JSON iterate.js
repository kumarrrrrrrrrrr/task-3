
// for loop
let a = ["a", "b", "c"];
for (let index = 0; index < a.length; ++index) {
    const element = a[index];
    console.log(element);
}



// for in
let b = [];
a[0] = "a";
a[10] = "b";
a[10000] = "c";
for (const name in b) {
    if (Object.hasOwn(b, name) &&       
        /^0$|^[1-9]\d*$/.test(name) &&  
        name <= 4294967294              
       ) {
        const element = b[name];
        console.log(b[name]);
    }
}

// for of

let c  = ["a", "b", "c"];
for (const element of c) { 
    console.log(element);
}

// forEach

let d = ["a", "b", "c"];
d.forEach((element) => {
    console.log(element);
});