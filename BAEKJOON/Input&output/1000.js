// 문제 
//두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

//첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)
// 예제
// 1+2 =3 

const readline = require('readline');

const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout,
})

rl.on("line", (input)=>{
  var numArr = input.split('')

  var num1 = parseInt(numArr[0]);
  var num2 = parseInt(numArr[1]);

  console.log(num1+num2)

  rl.close()
});