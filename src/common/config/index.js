const config = __DEV__ ? require('./dev').default : require('./prod').default

export default config
