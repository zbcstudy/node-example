// 参数默认值
// es5时的做法
function test(info) {
    let res = info || "default";
    console.log(res);
}

test();
test("param");

// es6时的写法
function new_test(param = "default value") {
    console.log(param);
}

new_test();
new_test("new param");

// 参数结构赋值
function test02(name = "zbc", age = 18) {
    console.log(name, age)
}

// 默认值是空对象
function new_test02({name, age} = {}) {
    console.log(name, age);
}


test02();
test02("new name", 19);

new_test02();
new_test02({name: "zbc01", age: 10});


// rest参数
function test03(a, b, ...param) {
    console.log(a);
    console.log(b);
    console.log(param);
}

test03(1, 2, 3, 45, 5);

// ...扩展符

function test04(a, b, c, d, e, f) {
    return a + b + c + d + e + f;
}

let arr = [1, 2, 3, 4, 5, 6];

console.log(test04.apply(null, arr));
console.log(test04(...arr));

// 合并数组
arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
console.log([...arr1, ...arr2]);

// 箭头函数
let test5 = () => {
    console.log("箭头函数");
};

test5();

let test6 = v => v;
console.log(test6(1));

let test7 = (a, b) => {
    console.log(a + b);
};

test7(2, 4);