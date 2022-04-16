import { render } from '@testing-library/react';

import StoreFeatureGameDetail from './store-feature-game-detail';

describe('StoreFeatureGameDetail', () => {
  it('should render successfully', () => {
    const routeComponentPropsMock = {
      history: {} as any,
      location: {} as any,
      match: {} as any,
    }

    const { baseElement } = render(<StoreFeatureGameDetail {...routeComponentPropsMock}/>);
    expect(baseElement).toBeTruthy();
  });
});
