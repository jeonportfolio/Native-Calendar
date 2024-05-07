import dayjs from "dayjs";
import { useState } from "react";

const defaultTodoList = [
    {
        id:1,
        content:"운동하기",
        date: dayjs(),
        isSuccess: true,

    },
    {
        id:2,
        content:"공부하기",
        date: dayjs(),
        isSuccess: false,     
    },
    {
        id:3,
        content:"계획하기",
        date: dayjs(),
        isSuccess: true,
    },

]


export const useTodoList = (selectedDate) => {
    const [ todoList, setTodoList ] = useState( [defaultTodoList] );
    const [ input, setInput ] = useState("");
    const addTodo = () => {
        const len = todoList.length; //위에 초기값은 3개 
        const lastId = len === 0 ? 0 :todoList[len - 1].id; //투두리스트의 값이 없을때는 -1이 되므로 0일떄와 구분 

        
        const newTodoList = [
            ...todoList,
            {
                id:lastId + 1,
                content: input,
                date: selectedDate,
                isSuccess: false,
            }
        ]
        setTodoList(newTodoList);
    } 

    const removeTodo = (todoId) => {
        const newTodoList = todoList.filter(todo => todo.id !== todoId); //삭제할 id를 제외한 것들로만 필터링 
        setTodoList(newTodoList)
    }

    const toggleTodo = (todoId) => {
        const newTodoList = todoList.map (todo => {
            if (todo.id !== todoId) return todo;
            return {
                ...todo,
                isSuccess: !todo.isSuccess,
            }
        });
        setTodoList(newTodoList);
    }
 
    return {

    }
}