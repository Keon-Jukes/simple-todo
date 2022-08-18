import React, {useState} from "react";

interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
  }


  const InputField: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
    return (
        <div>
            <form
            className="input"
            onSubmit={(e) => {
            handleAdd(e);
            }}>
            <input className='input-box' type="text" value={todo} title="Add Todo" placeholder="Add a task" onChange={(e) => setTodo(e.target.value)}></input>
            <button>Add Todo 💫</button>
            </form>
        </div>
    )
}

export default InputField;