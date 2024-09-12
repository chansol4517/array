// 참조형 자료를 전개연산자가 아닌 map으로 deep copy 해야하는 경우
//특정 참조형 자료를 완전 복사한다는 의미는 기존 원본대비 변경점이 생겨야되는 이유
//일반 Database 구조를 생각해봤을 때 변경사항이 한 요소뿐 아니라 모든 데이터 전체적으로 일어나는 경우가 많은

let text = "2024-david";
//원본 문자값에 '2024' 문자열을 찾은 뒤, '2025'문자값으로 바꿔서 반환
let newText = text.replace("2024", "2025");
console.log(newText);

const classInfo = ["2024-david", "2024-emily", "2024-paul", "2024-michael"];

//const newClassInfo = classInfo map((data)=> {
// return data.replace("2024","2025");
//});

//아래와 같이 기존 배열값을 복사하는 이유는 일괄적으로 데이터를 변경해야되는 경우가 많으므로
//복사와 동시에 불변셩을 유지하면서 값을 변경할 수 있는 map을 이용하는 것이 효율적
const newClassInfo = classInfo.map((data) => data.replace("2024", "2025"));

console.log(newClassInfo);
