import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../../recoil/atoms/atom'

function CreateTodo() {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useRecoilState(todoListState)

    const addTodo = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue('');
    }

    const onChanges = ({target: {value}}) =>{
        setInputValue(value)
    }
    return (
        <div>
            <input type="text" value={inputValue} onChange={onChanges} />
            <button onClick={addTodo}>Add</button>
        </div>
    )
}

let id= 0;
function getId(){
    return id++;
}

export default CreateTodo
