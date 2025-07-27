import { jsx as _jsx } from "react/jsx-runtime";
import styles from './Modal.module.css';
import { useTheme } from '../../lib/theme/useTheme';
export const Modal = (props) => {
    const { ref, children } = props;
    const { theme } = useTheme();
    return (_jsx("div", { className: styles.wrap, ref: ref, children: _jsx("div", { className: `${theme === 'light'
                ? `${styles.contentLight}`
                : `${styles.contentDark}`} ${styles.content}`, children: children }) }));
};
