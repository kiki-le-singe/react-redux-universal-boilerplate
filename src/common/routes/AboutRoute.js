export default () => ({
  path: 'about',
  getComponent: async (location, cb) => {
    const component = await System.import('common/views/AboutView')
    cb(null, component.default)
  }
})
