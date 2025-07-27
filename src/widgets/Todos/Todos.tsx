import { useParams } from 'react-router-dom';
import { useGetTodosQuery } from '../../entities/todos/api/todosApi';
import styles from './Todos.module.css';
import type { TodoType } from '../../entities/todos/model/todoType';
import { ItemList } from '../../shared/ui/ItemList/ItemList';

export default function Todos() {
    const { id } = useParams();
    const { data: todos, isLoading } = useGetTodosQuery(Number(id));

    if (isLoading) return <p>Загрузка...</p>;

    const renderTodos = (todo: TodoType) => {
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
    };

    return (
        <>
            <ul className={styles.box}>
                <ItemList items={todos} renderItem={renderTodos} />
            </ul>
        </>
    );
}
