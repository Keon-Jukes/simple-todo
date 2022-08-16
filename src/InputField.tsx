import React, {useState} from "react";

export const InputField = () => {

    const [todo, setTodo] = useState('');

    return (
        <div>
            <span>
            <input title="Add Todo" placeholder="Add a todo"></input>
            <button>Add Todo 💫</button>
            </span>
        </div>
    )
}