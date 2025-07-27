import type { PropsWithChildren } from 'react';

export const ModalBody = (props: PropsWithChildren) => {
    const { children } = props;
    return <p>{children}</p>;
};
