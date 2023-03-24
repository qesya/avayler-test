import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Button from '../../src/components/buttons/Button';

describe('Component:Button', () => {
  it('renders without crashing', async () => {
    const component = render(<Button variant="solid" onClick={() => { }} title="test" />);
    expect(component).toMatchSnapshot();
  });

  it('it should render correct button label', async () => {
    const component = render(<Button variant="solid" onClick={() => { }} title="test" />);
    const expected = "test"
    expect(component.getByTestId('Test-Title').textContent).toContain(expected);
  });

  it('it should click button', async () => {
    const expected = jest.fn();
    const { getByTestId } = render(<Button variant="solid" onClick={expected} title="test" />);
    fireEvent.click(getByTestId('Test-Button'));
    expect(expected).toHaveBeenCalled();
  });
});