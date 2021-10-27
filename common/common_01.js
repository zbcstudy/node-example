let {sin, cos, random} = Math;

console.log(typeof sin);
console.log(typeof cos);
console.log(typeof random);

console.log(sin(100));

let [a, b, c, d, e] = "hello";
console.log(a, b, c, d, e);


let {length} = "hi";
console.log(length);

console.log("hello word".includes("hello", 0));

console.log("hello word".endsWith("d"));

console.log("hello word".startsWith("d"));


// 模板字符串
let user = {
    name: "zbc",
    age: 19,
    gender: '1'
};

let tmp = `
    <div>
        <span>${user.name}</span>
        <span>${user.age}</span>
        <span>${user.gender}</span>
        <span>${1 + 1}</span>
    </div>  
`;

console.log(tmp)
