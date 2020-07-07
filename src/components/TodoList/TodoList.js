import React from 'react'
import { useRecoilValue } from 'recoil'
import { filteredTodoListState } from '../../recoil/selector/selector';

import TodoItem from '../TodoItem/TodoItem';
import CreateTodo from '../CreateTodo/CreateTodo';
import TodoListStats from '../TodoListStats/TodoListStats';
import TodoListFilters from '../TodoListFilters/TodoListFilters';

function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState);

    return (
        <>
            <TodoListStats />
            <TodoListFilters />
            <CreateTodo />
            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}           
        </>
    )
}

export default TodoList
