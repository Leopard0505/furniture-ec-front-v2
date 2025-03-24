import { render, screen } from '@testing-library/react';
import { RecommendItemList } from './RecommendItemList';
import { ListItemType } from '../ListItem/ListItem';
import { TestBrowserRouter } from '../../test/utils/TestBrowserRouter';

describe('RecommendItemList', () => {
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

  it('セクションタイトルが正しく表示されること', () => {
    render(
      <TestBrowserRouter>
        <RecommendItemList items={mockItems} />
      </TestBrowserRouter>
    );
    expect(screen.getByText('注目のおすすめ商品')).toBeInTheDocument();
  });

  it('渡されたアイテムが正しく表示されること', () => {
    render(
      <TestBrowserRouter>
        <RecommendItemList items={mockItems} />
      </TestBrowserRouter>
    );

    // 各アイテムの画像が表示されていることを確認
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
    expect(images[0]).toHaveAttribute('src', 'test1.jpg');
    expect(images[0]).toHaveAttribute('alt', 'テスト商品1');
    expect(images[1]).toHaveAttribute('src', 'test2.jpg');
    expect(images[1]).toHaveAttribute('alt', 'テスト商品2');
  });

  it('アイテムが空の場合でもコンポーネントが正しくレンダリングされること', () => {
    render(
      <TestBrowserRouter>
        <RecommendItemList items={[]} />
      </TestBrowserRouter>
    );
    expect(screen.getByText('注目のおすすめ商品')).toBeInTheDocument();
  });
});
