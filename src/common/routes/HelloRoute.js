export default () => ({
  path: 'hello',
  getComponent: async (location, cb) => {
    const component = await System.import('common/views/HelloView')
    cb(null, component.default)
  }
})
