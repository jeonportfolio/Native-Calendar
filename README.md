## 캘린더 만들기 

(앱시작 (expo프로젝트) -> npx expo start)
날짜 클릭시 선택범위 선택하기 
disabled로 터치범위 설정하기 


#사용자 원하는 날짜로 선택하기 (날짜 모달 컴포넌트)
-date modal 사용(npx expo install react-native-modal-datetime-picker @react-native-community/datetimepicker)
-arrow (left, right) 클릭시 전과 후로 이동 가능 


#TO-DO 리스트 만들기 
-hook을 사용하여 코드 간편화 -> 필요할때만 사용한다.(use-calendar.js , use-todo-list.js)
-todo-list의 추가 삭제가 가능한 메소드 (추가: newTodoList, 삭제: removeTodo)


#react-native-iphone-x-helper 설치 
npm install react-native-iphone-x-helper(padding top과 padding bottom 측정)

# @react-native-async-storage/async-storage설치
npm install @react-native-async-storage/async-storage


#text input 입력 
keyboardAvodingView 사용 -> 입력창 키보드 피하기
