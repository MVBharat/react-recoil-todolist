import React from 'react'
import { useRecoilState, selector } from 'recoil'
import { todoListFilterState } from '../../recoil/atoms/atom'

function TodoListFilters() {
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = ({target : {value}}) => {
        setFilter(value)
    }
    return (
        <>
            Filter:
            <select value={filter} onChange={updateFilter}>
                <option value='Show All'>Show All</option>
                <option value='Show Completed'>Show Completed</option>
                <option value='Show Uncompleted'>Show UnCompleted</option>
            </select>
        </>
    )
}

export default TodoListFilters
