import React, {useContext} from "react";
import { author } from "./context/model";
import { ModelContext } from './context/modelContext';

export const Home = () => {
    const model = useContext(ModelContext);
    return <div>
        <h3>Welcome to Simple Todo</h3>
        <p>author name: {model.author}</p>
        <p>book title: {author.title}</p>
        <p>date published: {author.date}</p>
    </div>
}