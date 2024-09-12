const friends: [string,number,boolean,number] = ["asma,ali,hamza",88,true,789];
friends.push("8888,888","dhd",93000,"78888")

// for(let i=0; i < friends.length; i++){
//     console.log(friends[i]);
// }


// instead of For Loop

friends.map((friend) =>{ 
    console.log(friend);
})

// Objects

interface objectTypes{
    name: string, age:number, education:string, skills:{coding:string, tech:string}
}

let person: moreData = {
    name:"jamila",
    age:22,
    education:"BSIT",
    skills:{
        coding:"typescript",
        tech:"react"
    },
    fathername: "M.ameer"
}

console.log(person.education);


// interface

interface moreData extends objectTypes{
    fathername: string
}

// Unions Types

let DegreeName: string | number ="BSCS";
DegreeName = 999;


// Function Types

// --- return type


 function add(): number{
    return 1+3;
 }

//  --Parameters Types

function minus(a: number, b:number) :number{
    return a-b;
}

// -- Named Types

function divide({a,b}:{a:number, b:number}):number{
    return a+b;
}


// -- Rest Parameters

function rest(...values:number[]): number{
    return values.reduce((a,b) => a+b, 0)
}

// -- Optional Parameters

function choice(a:number, b?:number):number{
    return a;
}


// --------  Type casting

let x:unknown = 'Pakistan'
// method one
console.log((x as string).length)
// method two
console.log((<string>x).length)



//--  Typescript BAsic GEnerics(create dynamic types)

function createPair<A,B>(name: A, age: B): [A,B] {
    return [name, age];
}
console.log(createPair<string, number>('jamila',44));
console.log(createPair<number, string>(44,'asma'));