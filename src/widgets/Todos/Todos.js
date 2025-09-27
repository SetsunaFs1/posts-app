import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
import { useGetTodosQuery } from '../../entities/todos/api/todosApi';
import styles from './Todos.module.css';
import { ItemList } from '../../shared/ui/ItemList/ItemList';
export default function Todos() {
    const { id } = useParams();
    const { data: todos, isLoading } = useGetTodosQuery(Number(id));
    if (isLoading)
        return _jsx("p", { children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." });
    const renderTodos = (todo) => {
        return (_jsxs("li", { className: styles.listBox, children: [_jsx("p", { children: todo.title }), _jsx("input", { type: "checkbox", checked: todo.completed, onChange: () => { } })] }, todo.id));
    };
    return (_jsx(_Fragment, { children: _jsx("ul", { className: styles.box, children: _jsx(ItemList, { items: todos, renderItem: renderTodos }) }) }));
}
