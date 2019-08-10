import Router from 'koa-router';
import {article} from './Article';

const api = new Router();

api.use('/article', article.routes());

export {api};