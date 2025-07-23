import type { JSX } from 'react';
import { type IProps } from '../../../widgets/PostList/PostList';
import styles from './withLoading.module.css';
import type { PostType } from '../../../entities/post/model/slice/postSlice';

type HocProps = {
    isLoading: boolean;
    posts: PostType[];
};

export function withLoading(WrappedComponent: (props: IProps) => JSX.Element) {
    return function ComponentWithLoading({ isLoading, ...posts }: HocProps) {
        if (!isLoading) return <WrappedComponent {...posts} />;
        return <div className={styles.loader}>Загрузка...</div>;
    };
}
