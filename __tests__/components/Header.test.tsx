import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Header from '../../src/components/Header';

describe('Component:Header', () => {
  it('renders without crashing', async () => {
    const component = render(<Header title="SpaceX" />);
    expect(component).toMatchSnapshot();
  });

  it('it renders the correct title', async () => {
    const expected = "SpaceX";
    const {getByTestId} = render(<Header title="SpaceX" />);
    expect(getByTestId('Test-Header').textContent).toContain(expected);
  });
});