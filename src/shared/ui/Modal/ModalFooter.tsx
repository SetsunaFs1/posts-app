import type { PropsWithChildren } from 'react';

export const ModalFooter = (props: PropsWithChildren) => {
    const { children } = props;
    return <div>{children}</div>;
};
