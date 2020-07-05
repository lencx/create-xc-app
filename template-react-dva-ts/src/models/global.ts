export default {
  namespace: 'global',
  state: {
    author: `lencx`,
    authenticated: false,
  },
  reducers: {
    setState(state: any, { payload }: any) {
      return { ...state, ...payload };
    },
  },
  effects: {},
}