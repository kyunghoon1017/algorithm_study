DP 문제풀이 예정
1463, 11726, 11727, 9095, 10844, 11057, 2193, 9465, 2156, 11053, 11055, 11722, 11054, 1912, 2579, 1699, 2133, 9461, 2225, 2011, 11052

DP 문제풀이 이론

피보나치수열
1,1,2,3,5,8 일때 -> Fn = Fn-1 + Fn-2
재귀적, 동적계획, 반복문 통해 해결 가능하다.

재귀, 동적 -> Top Down 방식 (5 -> 0)
반복문 -> Bottom Up (0 -> 5)

동적계획 -> 재귀적문제의 속도 문제를 해결하기 위해 이전 계산값을 기억해서 중복연산을 피함.(Memorization)

1. 동적계획(Memorization)으로 해결할 경우(Top-Down)

function fibonacci(n){
  const fibo = new Array(n).fill(-1);
  if(n === 1 || n === 2){
    return 1;
  }else if(fibo[n]>-1){
    return fibo[n];
  }else {
    fibo[n] = fibonacci(n-2)+fibonacci(n-1)
    return fibo[n]
  }
}

2. 반복문으로 해결할 경우(Bottom-Up)

function fibonacci2(n){
  const fibo2 =[];
  console.log(fibo2)
  fibo2[1] = fibo2[2] = 1;
  console.log(fibo2)
  for (let i = 3; i <=n; i++){
    fibo2[i] = fibo2[i-1]+fibo2[i-2]
    console.log(fibo2)
  }
  return fibo2[n]
}