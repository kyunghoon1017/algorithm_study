//입력된 숫자를 섞어서 30의 배수 중 가장 큰 수를 만들고 싶다. 10의 5승만큼의 숫자로 구성되어있음.
// 숫자가 있으면 수를 출력, 그 수가 존재하지 않는다면 -1
// 30 => 30 / 102 => 210 / 2931 => -1

//풀이과정
// 1. 30의 배수는 각 자리수의 합이 3의 배수이다.
// 2. 30의 배수는 0으로 끝난다.
// 30, 60, 90, 120, 150 ...
// 10의 5승까지의 크기는 stinrg으로만 받을 수 있다. 
// 위 결과값들을 소팅해주고 문자열을 합친다.

const solution = () => {
  const number = n.toString.split("")
  const sum = number.reduce((prev,cur)=> prev + parseInt(cur),0)
  const result = number.sort((a,b)=> b-a).join("")
  
  if(!number.indclude("0")){
    return -1
  } else if(sum%3 !==0){
    return -1
  }
  return result
}

//solution(120) => 210