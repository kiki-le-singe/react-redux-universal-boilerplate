import sinon from 'sinon'
import chai from 'chai'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

global.chai = chai
global.sinon = sinon
global.expect = chai.expect
global.should = chai.should()

// require all modules ending in "_test" from the
// current directory and all subdirectories
const testsContext = require.context('.', true, /spec$/)
testsContext.keys().forEach(testsContext)
