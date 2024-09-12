//배열 : 성격이 비슷한 여러개의 자료값들을 그룹화하기 위한 자료형
const colors = ["red", "green", "blue", "aqua"];
/*
  배열전용 내장 함수인 forEach vs map 차이점
  - forEach 
  : 순수배열, 유사배열 모두 반복가능
  : 원본 배열 복사기능 없음, 반복기능만 있음
//배열의 값을 뽑을때 -배열명[순번] : 해당 순번의 배열 데이터 뽑아냄
console.log(colors[0]);
  - map
  : 순수배열만 반복가능 (유사배열 반복불가 :DOM반복처리 불가)
  : 원본 배열 복사기능 (deep copy) 불변성유지 가능 (Immutable)
  : 참조형 자료를 변경할때 원본 데이터를 훼손시키지 않으면서 복사본 생성
  : 리액트에서는 데이터 변경처리할떄 무조건 원본과 복사본이 같이 있어야됨
  : 원본이 있어야지 원본대비 변경할 내용을 인지가능하기 때문
//const 로 선언한 변수값은 담겨있는 값이 원시형 자료일때는 덮어쓰기 불가
//const 로 선언한 변수값이 참조형자료(배열, 객체) 기존의 값을 불러와서 변경은 가능
//const 로 선언한 변수값이 참조형자료 변경은 가능하나 아예 새로운 값으로 바꾸는건 불가능
colors[0] = "hotpink"; //기존값 변경은 가능
console.log(colors);
//colors = [1, 2, 3]; 새로운값 덮어쓰기 불가능
console.log(colors);
/*
for (let i = 0; i < 3; i++) {
  console.log(colors[i]);
}
  forEach는 직업 DOM제어해야 되는 작업환경에서 주로 쓰임
  map: 실제 돔이 아닌 가상돔이라는 순수배열을 다뤄야 되는 리액트에서 주로 쓰임
*/
//배열명.length : 해당 배열의 갯수
console.log(colors.length);
for (let i = 0; i < colors.length; i++) console.log(colors[i]);

//순수배열, 유사배열 모두 반복처리 가능 (반복되는 문서객체요소도 반복처리 가능)
//배열 반복기능만 있음
colors.forEach((data, idx) => {
  console.log("data", data);
  console.log("idx", idx);
});
//const lis = document.getElementsByTagName('li')
//HTMLCollection LiveDOM: 이미 변수에 담았다고 하더라도 이후에 특정 조작이 일어나면 실시간으로 해당 값이 갱신됨
const lis = document.querySelectorAll("ul li");
console.log(lis); //Node List (Static DOM : 해당 요소를 선택한 시점으로 값이 고정)

//유사배열 (NodeList, HTMLCollection도 반복처리 가능)
lis.forEach((data) => console.log(data));

//순수배열만 반복처리 가능 (유사배열 반복불가: DOM요소 반복처리 불가)
//기존 배열을 완전히 복사해서 새로운 배열로 반환
colors.map((data, idx) => {
  console.log("map-data", data);
  console.log("map-idx", idx);
});
//순수 배열 반복처리 가능 (DOM반복 불가능)
lis.map((data) => console.log(data));
