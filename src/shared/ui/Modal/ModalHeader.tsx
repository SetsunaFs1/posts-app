import type { ReactNode } from 'react';
import styles from './Modal.module.css';

export const ModalHeader = ({ children }: { children: ReactNode }) => {
    return <p className={styles.title}>{children}</p>;
};
