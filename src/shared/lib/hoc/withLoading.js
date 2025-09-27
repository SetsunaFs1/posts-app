import { jsx as _jsx } from "react/jsx-runtime";
import styles from './withLoading.module.css';
export function withLoading(WrappedComponent) {
    return function ComponentWithLoading({ isLoading, ...posts }) {
        if (!isLoading)
            return _jsx(WrappedComponent, { ...posts });
        return _jsx("div", { className: styles.loader, children: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..." });
    };
}
