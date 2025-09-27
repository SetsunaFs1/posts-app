import type { ReactNode } from 'react';

type ItemListType<T> = {
    items: T[];
    renderItem: (item: T) => ReactNode;
};

export const ItemList = <T extends {}>({
    items,
    renderItem,
}: ItemListType<T>) => {
    return (
        <>
            {items.map((item, id) => (
                <div key={id}>{renderItem(item)}</div>
            ))}
        </>
    );
};
