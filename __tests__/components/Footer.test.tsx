import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Footer from '../../src/components/Footer';

describe('Component:Footer', () => {
  it('renders without crashing', async () => {
    const component = render(<Footer />);
    expect(component).toMatchSnapshot();
  });
});