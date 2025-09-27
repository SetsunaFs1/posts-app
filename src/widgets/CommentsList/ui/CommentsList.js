import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useGetCommentsQuery } from '../../../entities/comments/api/commentsApi';
import Comments from '../../../entities/comments/ui/Comments';
import { ItemList } from '../../../shared/ui/ItemList/ItemList';
export default function Commentlist(props) {
    const { postId, toggleComments } = props;
    const { data: comments } = useGetCommentsQuery(String(postId));
    const renderComments = (comment) => {
        return _jsx(Comments, { comment: comment }, comment.id);
    };
    return (_jsx(_Fragment, { children: toggleComments &&
            (comments.length === 0 ? (_jsx("div", { children: "\u041D\u0435\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432" })) : (_jsx(ItemList, { items: comments, renderItem: renderComments }))) }));
}
