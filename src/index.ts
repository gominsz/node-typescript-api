import { promises } from 'dns';
import { SetupServer } from './server';
import config from 'config';

(async (): Promise<void> => {
  const server = new SetupServer(config.get('App.port'));
  await server.init();
  server.start();
})();

/*
console.log('Ta funcionando RELAXA!!');
const server = new SetupServer(3333);
server.init().then(() => {
  server.start(() => console.log('abriu'));
});
*/
