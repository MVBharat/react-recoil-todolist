import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListState } from '../../recoil/atoms/atom'
import TodoItem from '../TodoItem/TodoItem';
import CreateTodo from '../CreateTodo/CreateTodo';

function TodoList() {
    const todoList = useRecoilValue(todoListState);

    return (
        <>
            <CreateTodo>
                {
                    todoList.map(todoItem => (<TodoItem key={todoItem.id} item={todoItem} />))
                }
            </CreateTodo>
        </>
    )
}

export default TodoList
