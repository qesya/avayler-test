import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import RocketCard from '../../src/components/cards/RocketCard';
import '@testing-library/jest-dom'

describe('Component:RocketCard.', () => {
  it('renders without crashing', async () => {
    const component = render(<RocketCard
      number="1"
      name="Crew-5"
      cores="633d9da635a71d1d9c66797b"
      date_utc="2017-01-14T17:54:00.000Z"
      id="62dd70d5202306255024d139"
      image="https://images2.imgbox.com/eb/d8/D1Yywp0w_o.png"
      isSuccess
      onClick={jest.fn()}
      payloads="631616a7ffc78f3b8567071a"
    />);
    expect(component).toMatchSnapshot();
  });

  it('it should render failure', async () => {
    render(<RocketCard
      number="1"
      name="Crew-5"
      cores="633d9da635a71d1d9c66797b"
      date_utc="2017-01-14T17:54:00.000Z"
      id="62dd70d5202306255024d139"
      image="https://images2.imgbox.com/eb/d8/D1Yywp0w_o.png"
      isSuccess={false}
      onClick={jest.fn()}
      payloads="631616a7ffc78f3b8567071a"
      failure={[{ reason: '', time: 0, altitude: '' }]}
    />);
    const failureComponent = screen.getByTestId('Test-Failure');
    expect(failureComponent).toBeInTheDocument();
  });

  it('it should render success', async () => {
    render(<RocketCard
      number="1"
      name="Crew-5"
      cores="633d9da635a71d1d9c66797b"
      date_utc="2017-01-14T17:54:00.000Z"
      id="62dd70d5202306255024d139"
      image="https://images2.imgbox.com/eb/d8/D1Yywp0w_o.png"
      isSuccess
      onClick={jest.fn()}
      payloads="631616a7ffc78f3b8567071a"
    />);
    const failureComponent = screen.queryByText(/🔴 Reason : /i);
    expect(failureComponent).not.toBeInTheDocument();
  });

  it('it should render default image', async () => {
    const expectedImage = "https://www.spacex.com/static/images/share.jpg";
    const { getByTestId } = render(<RocketCard
      number="1"
      name="Crew-5"
      cores="633d9da635a71d1d9c66797b"
      date_utc="2017-01-14T17:54:00.000Z"
      id="62dd70d5202306255024d139"
      image=""
      isSuccess
      onClick={jest.fn()}
      payloads="631616a7ffc78f3b8567071a"
    />);
    expect(getByTestId('Test-Image')).toHaveAttribute('src', expectedImage);
  });
});