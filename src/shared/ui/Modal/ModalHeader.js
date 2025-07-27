import { jsx as _jsx } from "react/jsx-runtime";
import styles from './Modal.module.css';
export const ModalHeader = (props) => {
    const { children } = props;
    return _jsx("p", { className: styles.title, children: children });
};
