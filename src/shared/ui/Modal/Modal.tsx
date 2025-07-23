import { type ReactNode } from 'react';
import styles from './Modal.module.css';
import { useTheme } from '../../lib/theme/useTheme';

type ModalProps = {
    ref: React.RefObject<HTMLDivElement | null>;
    children: ReactNode;
};

export const Modal = (props: ModalProps) => {
    const { ref, children } = props;
    const { theme } = useTheme();
    return (
        <div className={styles.wrap} ref={ref}>
            <div
                className={`${
                    theme === 'light'
                        ? `${styles.contentLight}`
                        : `${styles.contentDark}`
                } ${styles.content}`}
            >
                {children}
            </div>
        </div>
    );
};
