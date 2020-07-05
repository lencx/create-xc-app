import { Router } from './deps.ts';

const router = new Router();

router
  .get('/', ({ response }) => {
    response.body = 'hello, deno';
  });

export default router;