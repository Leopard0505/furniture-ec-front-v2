import { screen } from '@testing-library/react';
import { CouponApplicableItemList } from './CouponApplicableItemList';
import { ListItemType } from '../ListItem/ListItem';
import { renderWithRouter } from '../../test/utils/renderWithRouter';

describe('CouponApplicableItemList', () => {
  const mockItems: ListItemType[] = [
    {
      id: '1',
      to: '/items/1',
      src: 'test1.jpg',
      alt: 'テスト商品1',
    },
    {
      id: '2',
      to: '/items/2',
      src: 'test2.jpg',
      alt: 'テスト商品2',
    },
  ];

  it('クーポン利用可能な商品のタイトルが表示されること', () => {
    renderWithRouter(<CouponApplicableItemList items={mockItems} />);
    expect(screen.getByText('クーポン利用可能な商品')).toBeInTheDocument();
  });

  it('商品リストが正しく表示されること', () => {
    renderWithRouter(<CouponApplicableItemList items={mockItems} />);

    // 各商品が表示されていることを確認
    expect(screen.getByAltText('テスト商品1')).toBeInTheDocument();
    expect(screen.getByAltText('テスト商品2')).toBeInTheDocument();

    // 商品の数が正しいことを確認
    const listItems = screen.getAllByRole('link');
    expect(listItems).toHaveLength(2);
  });

  it('商品が空の場合でもコンポーネントがレンダリングされること', () => {
    renderWithRouter(<CouponApplicableItemList items={[]} />);
    expect(screen.getByText('クーポン利用可能な商品')).toBeInTheDocument();
  });
});
