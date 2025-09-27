import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import styles from './Comments.module.css';
export default function Comments(props) {
    const { comment } = props;
    return (_jsx(_Fragment, { children: _jsxs("div", { id: String(comment.id), className: styles.commentBox, children: [_jsx("p", { children: comment.body }), _jsxs("div", { className: styles.description, children: [_jsxs("span", { children: [comment.name, ","] }), _jsx("span", { children: comment.email })] })] }) }));
}
