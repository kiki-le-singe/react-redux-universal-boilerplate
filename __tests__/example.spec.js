function hello(name, cb) {
  cb(`hello ${name}`)
}

// Using of Chai
describe('add', () => {
  it('adds', () => {
    expect(1 + 1).to.equal(2)
  })
})

// Using of Sinon–Chai
describe('hello', () => {
  it('should call callback with correct greeting', () => {
    const cb = sinon.spy()

    hello('foo', cb)

    cb.should.have.been.calledWith('hello foo')
  })
})
