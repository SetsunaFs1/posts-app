import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import Footer from '../../widgets/LayoutFooter/Footer';
import Header from '../../widgets/LayoutHeader/Header';
export default function MainLayout() {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(Outlet, {}), _jsx(Footer, {})] }));
}
