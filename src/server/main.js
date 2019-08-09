import Koa from 'koa';
import Router from 'koa-router';
import {api} from './routes';

const app = new Koa();
const router = new Router();
const port = 3001;

router.use(api.routes());

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
    console.log(`server start #${port}`);
});