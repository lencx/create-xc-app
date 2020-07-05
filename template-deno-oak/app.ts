import { Application, dotEnvConfig } from './deps.ts';
import router from './routes.ts';

const app = new Application();
const env = dotEnvConfig();

const port = +env.PORT || 6300;

app.use(router.routes());
app.use(router.allowedMethods());

app.addEventListener('listen', ({ secure, hostname, port }) => {
  const protocol = secure ? 'https' : 'http';
  const url = `${protocol}://${hostname ?? 'localhost'}:${port}`;
  console.log(`\n🚀 ${url}`);
})

await app.listen({ port });