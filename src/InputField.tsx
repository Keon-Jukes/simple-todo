import React, {useState} from "react";

export const InputField = () => {

    const [todo, setTodo] = useState<string>('');

    return (
        <div>
            <form>
            <input title="Add Todo" placeholder="Add a todo"></input>
            <button>Add Todo 💫</button>
            </form>
        </div>
    )
}