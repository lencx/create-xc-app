/**
 * @author: lencx
 * @create_at: Jul 04, 2020
 */

// @ts-ignore
import { create } from 'dva-core';
// @ts-ignore
import createLoading from 'dva-loading';
import { Model, Dispatch, DvaInstance } from 'dva';

export interface DvaOption {
  initialState: object;
  models: Model[];
}

export type DvaApp = DvaInstance & {
  _store: any;
  getStore: () => any;
  dispatch: Dispatch<any>;
}

export default function createApp(opt: DvaOption): DvaApp {
  const app: DvaApp = create(opt);
  let registered: boolean = false;

  app.use(createLoading({}));

  if (!registered) {
    opt.models.forEach((model: Model) => app.model(model));
  }
  registered = true;
  app.start();

  const store: any = app._store;
  app.getStore = () => store;
  app.use({
    onError(err: Error){
      console.log(err);
    }
  });

  app.dispatch = store.dispatch;
  return app;
}
