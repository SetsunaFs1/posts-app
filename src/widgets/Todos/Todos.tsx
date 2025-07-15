import { useParams } from 'react-router-dom';
import { todos } from '../../mocks/todos';

export default function Todos() {
    const { id } = useParams();
    const filterTodos = todos.filter((todo) => todo.authorId === id);

    return (
        <>
            <ul>
                {filterTodos.map((todo) => {
                    return <li key={todo.id}>{todo.content}</li>;
                })}
            </ul>
        </>
    );
}
