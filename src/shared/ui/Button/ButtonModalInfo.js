import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState, } from 'react';
import { createPortal } from 'react-dom';
import styles from './ButtonModalInfo.module.css';
import { useTheme } from '../../lib/theme/useTheme';
import { Modal } from '../Modal/Modal';
import { ModalHeader } from '../Modal/ModalHeader';
import { ModalBody } from '../Modal/ModalBody';
import { ModalFooter } from '../Modal/ModalFooter';
export default function ButtonModalInfo() {
    const { theme } = useTheme();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const rootRef = useRef(null);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    useEffect(() => {
        const handleWrapperClick = (event) => {
            const { target } = event;
            if (target instanceof Node && rootRef.current === target) {
                closeModal();
            }
        };
        const handleEscapePress = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };
        window.addEventListener('click', handleWrapperClick);
        window.addEventListener('keydown', handleEscapePress);
        return () => {
            window.removeEventListener('click', handleWrapperClick);
            window.removeEventListener('keydown', handleEscapePress);
        };
    }, [isModalOpen]);
    useEffect(() => {
        const handleWrapperClick = () => { };
        const handleEscapePress = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };
        window.addEventListener('click', handleWrapperClick);
        window.addEventListener('keydown', handleEscapePress);
        return () => {
            window.removeEventListener('click', handleWrapperClick);
            window.removeEventListener('keydown', handleEscapePress);
        };
    }, [isModalOpen]);
    const handleClose = useCallback(() => {
        closeModal();
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx("button", { className: `${theme === 'light'
                    ? `${styles.buttonLight}`
                    : `${styles.buttonDark}`} ${styles.button}`, onClick: openModal, children: "\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435" }), isModalOpen &&
                createPortal(_jsxs(Modal, { ref: rootRef, children: [_jsx(ModalHeader, { children: "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F" }), _jsx(ModalBody, { children: "\u042D\u0442\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430 \u043F\u043E\u0441\u0442\u043E\u0432 \u0438 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432, \u0440\u0435\u0430\u043B\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u043E\u0435 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E React + TypeScript." }), _jsx(ModalFooter, { children: _jsx("button", { type: "button", className: `${theme === 'light'
                                    ? `${styles.buttonLight}`
                                    : `${styles.buttonDark}`} ${styles.button}`, onClick: handleClose, children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C" }) })] }), document.getElementById('modal-root'))] }));
}
