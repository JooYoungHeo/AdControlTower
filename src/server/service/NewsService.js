import models from '../../models';

export const getNews = async () => {
    try {
        return await models.News.findOne({
            attributes: ['title', 'content']
        });
    } catch (e) {
        throw e;
    }
}