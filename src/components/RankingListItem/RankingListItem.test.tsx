import { render, screen } from '@testing-library/react';
import { RankingListItem } from './RankingListItem';
import { TestBrowserRouter } from '../../test/utils/TestBrowserRouter';

const mockProps = {
  rank: 1,
  to: '/products/1',
  src: 'test-image.jpg',
  alt: 'テスト商品画像',
  name: 'テスト商品',
  description: 'テスト商品の説明',
  price: '¥10,000',
};

describe('RankingListItem', () => {
  it('全てのpropsが正しく表示されること', () => {
    render(
      <TestBrowserRouter>
        <RankingListItem {...mockProps} />
      </TestBrowserRouter>
    );

    // 画像が表示されていることを確認
    const image = screen.getByAltText('テスト商品画像');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'test-image.jpg');

    // ランキングが表示されていることを確認
    expect(screen.getByText('1位')).toBeInTheDocument();

    // 商品名が表示されていることを確認
    expect(screen.getByText('テスト商品')).toBeInTheDocument();

    // 商品説明が表示されていることを確認
    expect(screen.getByText('テスト商品の説明')).toBeInTheDocument();

    // 価格が表示されていることを確認
    expect(screen.getByText('¥10,000')).toBeInTheDocument();
  });

  it('リンクが正しいURLに遷移すること', () => {
    render(
      <TestBrowserRouter>
        <RankingListItem {...mockProps} />
      </TestBrowserRouter>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/products/1');
  });
});
