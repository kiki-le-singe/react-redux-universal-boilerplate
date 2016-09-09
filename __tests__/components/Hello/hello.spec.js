import React from 'react'
import { mount, render, shallow } from 'enzyme'
import Hello from 'common/components/Hello'

describe('Hello', () => {
  it('renders an `.hello`', () => {
    const wrapper = shallow(<Hello />)
    expect(wrapper.find('.hello')).to.have.length(1)
  })

  it('should contain `Hello World`', () => {
    const wrapper = render(<Hello name="World" />)
    expect(wrapper.text()).to.contain('Hello World')
  })

  it('allows us to set props', () => {
    const wrapper = mount(<Hello name="baz" />)
    expect(wrapper.props().name).to.equal('baz')
    wrapper.setProps({ name: 'foo' })
    expect(wrapper.props().name).to.equal('foo')
  })
})
