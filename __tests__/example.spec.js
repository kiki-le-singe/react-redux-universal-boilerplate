import React from 'react'
import { mount, render, shallow } from 'enzyme'

const Fixture = () => (
  <div className="root top">
    <span className="child bottom">test</span>
  </div>
)

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

// Using of enzyme
describe('Fixture', () => {
  it('should have enzyme working', () => {
    let wrapper = shallow(<Fixture />)
    expect(wrapper.find('.root')).to.have.length(1)
    expect(wrapper.find('.child')).to.have.length(1)

    wrapper = mount(<Fixture />)
    wrapper.setProps({ bar: 'foo' })
    expect(wrapper.props().bar).to.equal('foo')

    wrapper = render(<Fixture />)
    expect(wrapper.text()).to.contain('test')
  })
})
