
import dayjs from 'dayjs';
import { useState } from "react";

export const useCalendar = (now) => {
    const [selectedDate, setSelectedDate] = useState(now);//초기값은now이고 그 이후의 값은 selectedDate
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const handleConfirm = (date) => {
        setSelectedDate(dayjs(date));
        hideDatePicker();
      };

      const subtract1Month = () => {
        const newSelectedDate = dayjs(selectedDate).subtract(1, 'month');
        setSelectedDate(newSelectedDate);
    }
  
      const add1Month = () => {
      const newSelectedDate = dayjs(selectedDate).add(1, 'month');
      setSelectedDate(newSelectedDate);
    }

    return {
        selectedDate,
        setSelectedDate,
        isDatePickerVisible,
        showDatePicker,
        hideDatePicker,
        handleConfirm,
        subtract1Month,
        add1Month,
    }
}