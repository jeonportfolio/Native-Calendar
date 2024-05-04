import dayjs from "dayjs";

import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

export const statusBarHeight = getStatusBarHeight(true);
export const bottomSpace = getBottomSpace();
export const ITEM_WIDTH = 220;

export const fillEmptyColumns = (columns, start, end) => {
  const filledColumns = columns.slice(0);

  // 1. 첫날 이전 공백 채우기
  const startDay = dayjs(start).get("day");  //만약 day가 화요일이면 앞에 2개를 채워줘야 한다
  for (let i = 1; i <= startDay; i += 1) {
    const date = dayjs(start).subtract(i, "day");
    filledColumns.unshift(date);
  }
  // unshift는 앞에 못 채운 수들을 채워주는 함수이다.
  // subtract은 날짜를 빼주는 함수이기 때문에 만약 화요일 11/1일이라면 for문이 한번돌면 10/31일이고 두번돌면 10/30일로 채워진다.
   

  // 2. 마지막날 이후 공백 채우기
  const endDay = dayjs(end).get("day");
  //마지막날을 기준 
  for (let i = 1; i <= 6 - endDay; i += 1) {
    const date = dayjs(end).add(i, "day");
    filledColumns.push(date);
  }
  //마지막날이 수요일이라면 3을 더해줘야 한다 for문이 한번돌때마다 1일씩 추가

  return filledColumns;
};
export const getCalendarColumns = (now) => {
  const start = dayjs(now).startOf("month"); // 11.1
  const end = dayjs(now).endOf("month"); // 11.30
  const endDate = dayjs(end).get("date"); // 30

  const columns = [];
  for (let i = 0; i < endDate; i += 1) {
    const date = dayjs(start).add(i, "day");
    columns.push(date);
  }
  // console.log('columns 11월', columns);

  const filledColumns = fillEmptyColumns(columns, start, end);
    //한달의 날짜를 제외하고 35개를 채워야 하기때문에
  return filledColumns;
};

/**
 * @param day 0 ~ 6
 * @return 일~월
 */
const dayTexts = ["일", "월", "화", "수", "목", "금", "토"]
export const getDayText = (day) => {
  /* Ex 1 */
  return dayTexts[day];

  /* Ex 2 */
  // switch (day) {
  //   case 0: return '일';
  //   case 1: return '월';
  //   case 2: return '화';
  //   case 3: return '수';
  //   case 4: return '목';
  //   case 5: return '금';
  //   case 6: return '토';
  //   default: return '';
  // }
};

export const getDayColor = (day) =>{
  /* Ex 1 */
  return day === 0 ? "#e67639" : day === 6 ? "#5872d1" : "#2b2b2b";
  //첫번째 컬럼일때에는 빨간색 7번째 열일때는 파란색으로 된다 나머지는 검은색 
  /* Ex 2 */
  // switch (day) {
  //   case 0: return '#e67639';
  //   case 6: return '#5872d1';
  //   case 2:
  //   case 3:
  //   case 4:
  //   case 5:
  //   case 6:
  //   default: return '#2b2b2b';
  // }
};