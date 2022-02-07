// 백준대학교에서는 대회에 나갈 때 2명의 여학생과 1명의 남학생이 팀을 결성해서 나가는 것이 원칙이다. (왜인지는 총장님께 여쭈어보는 것이 좋겠다.)

// 백준대학교는 뛰어난 인재들이 많아 올해에도 N명의 여학생과 M명의 남학생이 팀원을 찾고 있다. 대회에 참여하려는 학생들 중 K명은 반드시 인턴쉽 프로그램에 참여해야 한다. 인턴쉽에 참여하는 학생은 대회에 참여하지 못한다.

// 백준대학교에서는 뛰어난 인재들이 많기 때문에, 많은 팀을 만드는 것이 최선이다.

// 여러분은 여학생의 수 N, 남학생의 수 M, 인턴쉽에 참여해야하는 인원 K가 주어질 때 만들 수 있는 최대의 팀 수를 구하면 된다.

// 첫째 줄에 N, M, K가 순서대로 주어진다. (0 ≤ M ≤ 100, 0 ≤ N ≤ 100, 0 ≤ K ≤ M+N)

// 풀이과정 생각해보기
// 1. 여학생과 남학생의 팀 구성을 생각해본다(2:1)
// 2. 인턴쉽 참여학생의 숫자를 생각한다.
// 3. 인턴쉽 참여학생의 수만큼 반목문을 돌린다.

//풀이과정
// 1. 팀구성에 대한 변수를 선언한다.
// 2. 인턴쉽 참여학생의 숫자(K)만큼 반복문을 실행한다.
// 2-1. 조건1. 여학생(N)은 2명 남학생(M)은 1명이 구성되어야함.
// 2-2. 조건2. 한 팀의 최소 구성원은 3명이어야 함.
// 3. 위 모든 조건을 만족시켰을 때, 전체 여학생(N)의 수에서 2만큼 전체 남학생(M)의 수에서 1만큼 차감하고 최초 선언해 둔 변수에 1을 카운트함


function univ(N,M,K){
  let team = 0;
  for(let i=0; i<K; i++){
   if(N>=2 && M>=1&&N+M-3>=K){
    N-=2
    M-=1
    team +=1
   }
  }
  return team
 }
 
 univ(6,10,3)