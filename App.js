import dayjs from 'dayjs';
import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getCalendarColumns, getDayColor, getDayText } from './src/util';
import { useEffect, useState } from 'react';
import Margin from './src/Margin';

import { SimpleLineIcons } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useCalendar } from './src/hook/use-calendar';
import { useTodoList } from './src/hook/use-todo-list';


const columsSize = 35;

const Column = ({
   text,
   color,
   opacity,
   disabled,
   onPress,
   isSelected,
}) => {
  return (
    <TouchableOpacity 
        disabled={disabled}//터치범위 설정 disabled가 포함되면 터치가 되지 않는다 
        onPress={onPress}
        style={{ 
            width: columsSize,
            height: columsSize,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: isSelected ? "#c2c2c2" : "transparent",
            borderRadius: columsSize / 2,
         }}>
    <Text style={{ color, opacity}}>{text}</Text>
    </TouchableOpacity>
  )
}

const ArrowButton = ({ iconName, onPress }) => {
    return(
      <TouchableOpacity onPress={onPress} style={{ paddingHorizontal: 20, paddingVertical:15}}>
          <SimpleLineIcons name= {iconName} size={15} color="#404040" />
      </TouchableOpacity>

    )
}

export default function App() {
  const now = dayjs();
  
  const {
    selectedDate,
    isDatePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
    subtract1Month,
    add1Month,
    setSelectedDate
  } = useCalendar (now);

  const {} = useTodoList(selectedDate);

  const columns = getCalendarColumns(selectedDate); 

  

  const onPressLeftArrow = subtract1Month
  const onPressRightArrow = add1Month


  const ListHeaderComponent = () => {
    
    const currentDateText = dayjs(selectedDate).format("YYYY.MM.DD."); 
      return(

      <View>
       
        {/* 현재 날짜 표시 */}
          <View style={{ flexDirection: "row", justifyContent: "center", alignItems:"center"}}>
              <ArrowButton iconName = "arrow-left" onPress={onPressLeftArrow} />

              <TouchableOpacity onPress={showDatePicker}> 
              {/* 날짜를 누르면 datepicker를 보여주는 것 */}
                  <Text style={{ fontSize: 20, color:"#404040"}}>{currentDateText}</Text>
              </TouchableOpacity>

              <ArrowButton iconName = "arrow-right" onPress={onPressRightArrow} />
        </View>
       


         {/* 요일 컴포넌트 */}
         <View style={{flexDirection: "row"}}>
             {[0, 1, 2, 3, 4, 5, 6].map(day => {

             const dayText = getDayText(day);
             const color = getDayColor(day); 
             return (
               <Column 
                  key={`day-${day}`} 
                  text={dayText} 
                  color={color} 
                  opacity={1}
                  disabled={true}
                />
             )
             })} 
         </View>

       </View>
      )
}


  const renderItem = ({ item: date }) => {
    const dateText = dayjs(date).get('date');
    const day = dayjs(date).get('day');
    const color = getDayColor(day);
    const isCurrentMonth = dayjs(date).isSame(selectedDate, 'month');
    const onPress = () => {
        setSelectedDate(date);
    }

    const isSelected = dayjs(date).isSame(selectedDate, 'date');
    return(
      <Column 
        text={dateText} 
        color={color} 
        opacity={isCurrentMonth ? 1 : 0.4}
        onPress={onPress}
        isSelected={isSelected}
      />
    ) 
  }

  useEffect( () => {
    console.log('columns', columns);
  },[]);
  useEffect(() => {
      console.log('changed selectedDate', dayjs(setSelectedDate).format("YYYY.MM.DD"));
  },[selectedDate])//selectedDate의 변화값을 인지한다.


  return (
    <SafeAreaView style={ styles.container}>
        <FlatList 
            data={columns}
            keyExtractor={(_,index) => `column-${index}`}
            numColumns={7}
            renderItem={renderItem}
            ListHeaderComponent={ListHeaderComponent}
        />   
        {/* flatList에도 key값을 줘야한다 인덱스에 따라서 키값을 부여한다. */}

        <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40
  },
});
