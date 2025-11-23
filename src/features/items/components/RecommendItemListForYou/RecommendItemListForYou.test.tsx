import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../../../test/utils/renderWithRouter';
import { RecommendItemListForYou } from './RecommendItemListForYou';

describe('RecommendItemListForYou', () => {
  it('renders without crashing', () => {
    renderWithRouter(<RecommendItemListForYou />);
    expect(screen.getByText('閲覧履歴に基づくおすすめ商品')).toBeInTheDocument();
  });
});
