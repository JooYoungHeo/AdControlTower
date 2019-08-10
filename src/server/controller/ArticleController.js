import * as ArticleFacade from '../facade/ArticleFacade';

export const getArticle = async (ctx) => {
    try {
        const userId = ctx.query.userId;

        _validateNumber(userId);

        ctx.body = await ArticleFacade.getArticle(userId);
    } catch (e) {
        ctx.status = e.statusCode || 500;
        ctx.body = {};
    }
};

function _validateNumber(x) {
    if (!x || isNaN(Number(x))) {
        let e = new Error();
        e.statusCode = 400;
        throw e;
    }
}