export default () => ({
  getComponent: async (location, cb) => {
    const component = await System.import('common/views/HomeView')
    cb(null, component.default)
  }
})
