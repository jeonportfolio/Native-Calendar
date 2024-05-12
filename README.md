## 캘린더 만들기 

-> (앱시작 (expo프로젝트) -> npx expo start)
-> 날짜 클릭시 선택범위 선택하기 
-> disabled로 터치범위 설정하기 

## day.js의 활용
day.js를 import 한후 활용하여 날짜 데이터를 사용


## 사용자 원하는 날짜로 선택하기 (날짜 모달 컴포넌트)
-> date modal 사용(npx expo install react-native-modal-datetime-picker @react-native-community/datetimepicker)
-> arrow (left, right) 클릭시 전과 후로 이동 가능 


## TO-DO 리스트 만들기 
-> hook을 사용하여 코드 간편화 -> 필요할때만 사용한다.(use-calendar.js , use-todo-list.js)
-> todo-list의 추가 삭제가 가능한 메소드 (추가: newTodoList, 삭제: removeTodo)


## react-native-iphone-x-helper 설치 
-> npm install react-native-iphone-x-helper(padding top과 padding bottom 측정)

## @react-native-async-storage/async-storage설치
-> npm install @react-native-async-storage/async-storage


## text input 입력 
-> keyboardAvodingView 사용 -> 입력창 키보드 피하기


## onLongPress -> todoList 삭제옵션 추가 
-> 사용자가 todo목록을 길게 누르면 삭제가 가능한 기능을 추가

## onPressAdd -> todoList 추가옵션 추가 
-> 사용자가 +버튼을 누르면 todoList를 추가할 수 있는 옵션 
-> 다른 날짜에 추가하고 구분하는 필터링 (filteredTodoList) -> 선택된 날짜와 현재의 날짜가 같으면 필터링 

## 일정이 있는 날에는 bold처리 없으면 normal처리 

-> hastodo를 횔용해서 renderItem에 todo가 있는지 없는지 활용 

## asyncstorage 설치 및 사용 
npx expo install @react-native-async-storage/async-storage 
서버가 다운되어도 저장이되는 저장소
-> 문자열형식으로 저장되어야 함 stringfy.JSON형식 -> 파싱해준다.
-> setItem과 getItem을 사용