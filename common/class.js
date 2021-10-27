function test01() {
    console.log(this);
}

function test02() {
    console.log(this);
    setTimeout(() => {
        console.log(this.num);
    }, 100);
}

test01();
console.log("***********************");
test02.call({num: 1});