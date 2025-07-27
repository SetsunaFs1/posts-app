import type { PropsWithChildren } from 'react';
import styles from './Modal.module.css';

export const ModalHeader = (props: PropsWithChildren) => {
    const { children } = props;
    return <p className={styles.title}>{children}</p>;
};
