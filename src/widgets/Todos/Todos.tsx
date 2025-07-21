import { useParams } from 'react-router-dom';
import { useGetTodosQuery } from '../../entities/todos/api/todosApi';
import styles from './Todos.module.css';

type TodoType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

export default function Todos() {
    const { id } = useParams();
    const { data: todos, isLoading } = useGetTodosQuery(Number(id));

    if (isLoading) return <p>Загрузка...</p>;

    return (
        <>
            <ul className={styles.box}>
                {todos.map((todo: TodoType) => {
                    return (
                        <li key={todo.id} className={styles.listBox}>
                            <p>{todo.title}</p>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => {}}
                            />
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
