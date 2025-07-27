import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ThemeSwitcher from '../../features/ThemeSwitcher/ui/ThemeSwitcher';
import ButtonModalInfo from '../../shared/ui/Button/ButtonModalInfo';
import styles from './Header.module.css';
export default function Header() {
    return (_jsxs("div", { className: styles.flexContainer, children: [_jsx(ButtonModalInfo, {}), _jsx(ThemeSwitcher, {})] }));
}
