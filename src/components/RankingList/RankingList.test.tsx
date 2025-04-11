import { screen } from '@testing-library/react';
import { RankingList } from './RankingList';
import { renderWithRouter } from '../../test/utils/renderWithRouter';

describe('RankingList', () => {
  const mockItems = [
    {
      rank: 1,
      to: '/product/1',
      src: '/images/product1.jpg',
      alt: '商品1',
      name: '商品1',
      description: '商品1の説明',
      price: 10000,
    },
    {
      rank: 2,
      to: '/product/2',
      src: '/images/product2.jpg',
      alt: '商品2',
      name: '商品2',
      description: '商品2の説明',
      price: 20000,
    },
  ];

  it('ランキングタイトルが表示されること', () => {
    renderWithRouter(<RankingList items={mockItems} />);
    expect(screen.getByText('ランキング')).toBeInTheDocument();
  });

  it('全てのランキングアイテムが表示されること', () => {
    renderWithRouter(<RankingList items={mockItems} />);

    // 商品名の確認
    expect(screen.getByText('商品1')).toBeInTheDocument();
    expect(screen.getByText('商品2')).toBeInTheDocument();

    // 商品説明の確認
    expect(screen.getByText('商品1の説明')).toBeInTheDocument();
    expect(screen.getByText('商品2の説明')).toBeInTheDocument();

    // 価格の確認
    expect(screen.getByText('10000')).toBeInTheDocument();
    expect(screen.getByText('20000')).toBeInTheDocument();
  });

  it('空の配列が渡された場合でもエラーが発生しないこと', () => {
    renderWithRouter(<RankingList items={[]} />);
    expect(screen.getByText('ランキング')).toBeInTheDocument();
  });
});
