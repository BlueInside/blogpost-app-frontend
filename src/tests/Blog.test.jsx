import { describe, it, vi } from 'vitest';
import Blog from '../routes/Blog';
import { render, screen } from '@testing-library/react';
import { expect } from 'chai';

let fakeFetchData = {
  data: [
    { _id: '1', title: 'Post 1', content: 'Text of post 1' },
    { _id: '2', title: 'Post 2', content: 'Text of post 2' },
  ],
};

describe('Blog component', () => {
  vi.mock('../components/hooks/usePosts', () => {
    return {
      default: () => fakeFetchData,
    };
  });

  it('Renders blog component properly', () => {
    const { container } = render(<Blog />);
    expect(container).toMatchSnapshot();
  });

  it('Renders posts correctly', () => {
    render(<Blog />);
    expect(screen.getAllByRole('heading')).toHaveLength(2);
  });
});
