import React from 'react'
import { useRecoilState } from 'recoil'
import {todoListStatsState } from '../../recoil/selector/selector';

function TodoListStats() {
    const {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        perecentCompleted
    } = useRecoilState(todoListStatsState);

    const formatedPercentCompleted = Math.round(perecentCompleted * 100);
    return (
       <ul>
           <li>Totle Item: {totalNum} </li>
            <li>Items Completed: {totalCompletedNum} </li>
           <li>Items Uncompleted: {totalUncompletedNum} </li>
            <li>Item Percent Completed: {formatedPercentCompleted}</li>
       </ul>
    )
}

export default TodoListStats
