const BLUE=Symbol()
const RED=Symbol();
const ORENGE=Symbol("夕日の色");

console.log(BLUE)
console.log(ORENGE)
console.log(RED==BLUE)

const obj={};
obj.coloer="黄色";
console.log(obj);

// オブジェクトは関数も要素として持てる
obj.function=function() {return "Nean";};
console.log(obj.function());


配列=[1,2,3];

console.log(配列[1]);

const now= new Date()
console.log(now)

// キャスト
const 文字="11.1"
const 数字=Number(文字)
console.log(数字+3.1)


