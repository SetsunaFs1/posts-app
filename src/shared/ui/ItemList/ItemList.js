import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
export const ItemList = ({ items, renderItem, }) => {
    return (_jsx(_Fragment, { children: items.map((item, id) => (_jsx("div", { children: renderItem(item) }, id))) }));
};
