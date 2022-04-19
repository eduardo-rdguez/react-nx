import { findByTestId, findByText, render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import App from './app';

function mockFetch(data: Game[]) {
  return jest.fn().mockImplementation(() => {
    return Promise.resolve({
      ok: true,
      json: () => data,
    });
  });
}

describe('App', () => {
  beforeEach(() => {
    window.fetch = mockFetch([]);
  });

  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const element = findByTestId(baseElement, 'app-container');
    expect(element).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(findByText(baseElement, 'Board Game Hoard')).toBeTruthy();
  });
});
