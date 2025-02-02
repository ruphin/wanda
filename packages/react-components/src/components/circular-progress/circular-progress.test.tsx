import { render } from '@testing-library/react';

import { CircularProgress } from './circular-progress';

describe('<CircularProgress>', () => {
  test(' it should render properly', () => {
    const { container } = render(
      <CircularProgress value={50} />,
    );
    expect(container).not.toBeNull();
  });

  test(' it should render properly with value 0', () => {
    const { container } = render(
      <CircularProgress value={0} />,
    );
    expect(container).not.toBeNull();
  });
});
