import dotenv from 'dotenv';
import { app } from './app';
import { initializeDatabaseSystem } from './model/database';

(() => {
  dotenv.config();
  app.listen(app.get('port'), () =>
    console.log(`Server on port:${app.get('port')} `)
  );
  initializeDatabaseSystem();
})();
