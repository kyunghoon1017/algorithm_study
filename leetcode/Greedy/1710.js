//(1) 1박스에 3개의 물건
// ooo

//(2) 2박스에 각 2개의 물건
// oo / oo

//(3) 3박스에 각 1개의 물건
// o / o / o

//1. 가장 많은 물건이 들어있는 박스부터 적재한다.
//-> (1)번 = 3개의 물건 박스 1개
//-> (2)번 = 2개의 물건 박스 2개
//-> (3)번 = 1개의 물건 박스 1개

//2. 정렬 활용(sort)
// -> 1개의 박스에 들어있는 내용물이 많은 순서대로 내림차순 정렬
// -> 3개의 물건이 들어있는 1개의 박스(3/1)
// -> 2개의 물건이 들어있는 2개의 박스(2/2)
// -> 1개의 물건이 들어있는 3개의 박스(1/3)

var maximumUnits = function(boxTypes, truckSize){
    boxTypes.sort(function(a,b){
      return b[1]-a[1]
    })// 물건수량에 따른 내림차순 정렬
      let boxes = 0; // 박스 전체 개수 
      let result = 0; // 적재된 박스의 내용물 총 개수
      for(let [x,y] of boxTypes){
        boxes += x 
        result += x*y
        if(boxes>truckSize){//반복문을 돌면서 박스의 개수가 트럭의 총량을 넘었을 때의 조건
          let remain = boxes-truckSize //먼저 다 적재하지 못한 박스의 개수를 구함
          result -= remain*y // 적재된 박스의 내용물 총 개수에서 적재하지 못한 박스의 개수*내용물을 감소시킴(적재량과 트럭사이즈가 동일해 질때까지)
          break;//(동일해졌다면 반복문 멈춤)
        }
      }
      return result
    }
    
    maximumUnits([[1,3],[2,2],[3,1]],4)