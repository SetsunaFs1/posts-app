import type { ReactNode } from 'react';

export default function Body({ children }: { children: ReactNode }) {
    return <p>{children}</p>;
}
