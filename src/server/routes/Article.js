import Router from 'koa-router';
import * as ArticleController from '../controller/ArticleController';

const article = new Router();

article.get('/', ArticleController.getArticle);

export {article};