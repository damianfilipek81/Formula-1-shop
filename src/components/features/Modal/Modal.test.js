import React from 'react';
import { shallow } from 'enzyme';
import { ModalComponent } from './Modal';

describe('Component Modal', () => {
  it('should render without crashing', () => {
    const component = shallow(<ModalComponent />);
    expect(component).toBeTruthy();
  });
});
