export default () => ({
  path: 'counter',
  getComponent: async (location, cb) => {
    const component = await System.import('common/views/CounterView')
    cb(null, component.default)
  }
})
