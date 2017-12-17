//  for (i=0;i<5;i++){
//    console.log(i)
//  }
//  
// for in roop
const player = { name: 'Thomas', rank: 'Midshipman', age: 25 };

for (let prop in player){
if(!player.hasOwnProperty(prop))continue;
console.log(prop+":"+player[prop])}

// for of
配列=[1,2,3,4]
for (let data in 配列){
console.log(`data:${data}`)}
