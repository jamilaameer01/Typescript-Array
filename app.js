const friends = ["asma,ali,hamza", 88, true, 789];
friends.push("8888,888", "dhd", 93000, "78888");
// for(let i=0; i < friends.length; i++){
//     console.log(friends[i]);
// }
// instead of For Loop
friends.map((friend) => {
    console.log(friend);
});
let person = {
    name: "jamila",
    age: 22,
    education: "BSIT",
    skills: {
        coding: "typescript",
        tech: "react"
    }
};
console.log(person.education);
export {};
