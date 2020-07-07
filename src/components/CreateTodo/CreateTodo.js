import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../../recoil/atoms/atom'


const CreateTodo = () => {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState)

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

    const onChanges = (e) =>{
        setInputValue(e.target.value)
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
