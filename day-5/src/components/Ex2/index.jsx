import React from 'react'
import { useState } from 'react';


const TodoList = () => {

    const [todoList, setTodoList] = useState("");
    const [array, setArray] = useState([])

    const Play = (e) => {
        e.preventDefault();
        if (todoList == "") {
            alert("Bạn chưa nhập nội dung!!!");
            return;
        }
        setArray([...array, todoList]);
        setTodoList("");
    }
    const Delete = (e) => {
        setArray(array.filter((value, index) => index != e.target.value))
    }

    return (
        <div className='homework'>
            <p className='h1'>Todo</p>

            <form onSubmit={Play}>

                <input type="text" className='input' placeholder='Add a Todo...' value={todoList} onChange={(e) => setTodoList(e.target.value)} />
                <button class='add'>Add</button>

            </form>

            <div class='list'>
                {array.map((value, index) => (
                    <div key={index} className='item'>
                        <div class='checkbox'><input type="checkbox" /></div>
                        <div>{value}</div>
                        <div><button onClick={Delete} value={index}>X</button></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoList