import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import TodoForm from '../src/todo/todoForm';
import Grid from '../src/template/grid';

Enzyme.configure({adapter: new Adapter()});

describe('<TodoForm />', () => {
  it('should render yourself without break', () => {
    const wrapper = shallow(<TodoForm />);
    expect(wrapper.length).to.equal(1);
  });

  it('should render two <Grid /> components', () => {
    const wrapper = shallow(<TodoForm />);
    expect(wrapper.find('.todoForm')).to.be.eql({length: 1});
  });
});
