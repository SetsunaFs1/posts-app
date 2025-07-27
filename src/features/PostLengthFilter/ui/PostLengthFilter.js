import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import styles from './PostlengthFilter.module.css';
import { useTheme } from '../../../shared/lib/theme/useTheme';
export default function PostLengthFilter(props) {
    const { setFilterData } = props;
    const { theme } = useTheme();
    const [minValue, setMinValue] = useState(1);
    const [maxValue, setMaxValue] = useState(20);
    const [showError, setShowError] = useState(false);
    const handleMinChange = (event) => {
        const newMinValue = event.currentTarget.value;
        setMinValue(Number(newMinValue));
    };
    const handleMaxChange = (event) => {
        const newMaxValue = event.currentTarget.value;
        setMaxValue(Number(newMaxValue));
    };
    const validateInput = (input) => {
        const strInput = input.toString();
        const regex = /^[1-9][0-9]?[0-9]?$/;
        return regex.test(strInput);
    };
    const showErrorIput = () => {
        setShowError(true);
    };
    const handleChangeFilrer = () => {
        if (validateInput(minValue) && validateInput(maxValue)) {
            setShowError(false);
            setFilterData({ min: minValue, max: maxValue });
        }
        else
            showErrorIput();
    };
    const handleResetFilter = () => {
        setShowError(false);
        setFilterData(null);
        setMinValue(1);
        setMaxValue(20);
    };
    return (_jsxs(_Fragment, { children: [_jsx("h5", { className: styles.title, children: "\u0424\u0438\u043B\u044C\u0442\u0440\u0430\u0446\u0438\u044F \u043F\u043E \u0434\u043B\u0438\u043D\u0435 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u0430:" }), _jsxs("div", { className: styles.container, children: [_jsxs("div", { children: [_jsx("p", { className: styles.placeholder, children: "min" }), _jsx("input", { className: styles.input, type: "number", value: minValue, onChange: handleMinChange })] }), _jsxs("div", { children: [_jsx("p", { className: styles.placeholder, children: "max" }), _jsx("input", { className: styles.input, type: "number", value: maxValue, onChange: handleMaxChange })] })] }), showError && (_jsx("p", { className: styles.error, children: "\u041F\u043E\u043B\u044F \u043C\u043E\u0433\u0443\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0434\u043E \u0442\u0440\u0435\u0445 \u0446\u0438\u0444\u0440 \u0438 \u043D\u0435 \u043C\u043E\u0433\u0443\u0442 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 0!" })), _jsxs("div", { className: styles.container, children: [_jsx("button", { className: `${theme === 'light'
                            ? `${styles.buttonLight}`
                            : `${styles.buttonDark}`} ${styles.button}`, onClick: handleChangeFilrer, children: "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C" }), _jsx("button", { className: `${theme === 'light'
                            ? `${styles.buttonLight}`
                            : `${styles.buttonDark}`} ${styles.button}`, onClick: handleResetFilter, children: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C" })] })] }));
}
