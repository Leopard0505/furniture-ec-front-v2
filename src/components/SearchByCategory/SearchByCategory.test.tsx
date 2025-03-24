import { render, screen } from '@testing-library/react';
import { SearchByCategory } from './SearchByCategory';
import { TestBrowserRouter } from '../../test/utils/TestBrowserRouter';

const mockItems = [
  { id: '1', to: '/category1', src: '/image1.jpg', alt: 'カテゴリ1' },
  { id: '2', to: '/category2', src: '/image2.jpg', alt: 'カテゴリ2' },
  { id: '3', to: '/category3', src: '/image3.jpg', alt: 'カテゴリ3' },
  { id: '4', to: '/category4', src: '/image4.jpg', alt: 'カテゴリ4' },
  { id: '5', to: '/category5', src: '/image5.jpg', alt: 'カテゴリ5' },
  { id: '6', to: '/category6', src: '/image6.jpg', alt: 'カテゴリ6' },
  { id: '7', to: '/category7', src: '/image7.jpg', alt: 'カテゴリ7' },
  { id: '8', to: '/category8', src: '/image8.jpg', alt: 'カテゴリ8' },
];

describe('SearchByCategory', () => {
  const renderWithRouter = (component: React.ReactElement) => {
    return render(
      <TestBrowserRouter>
        {component}
      </TestBrowserRouter>
    );
  };

  it('コンポーネントが正しくレンダリングされること', () => {
    renderWithRouter(<SearchByCategory items={mockItems} />);

    expect(screen.getByText('カテゴリから探す')).toBeInTheDocument();
  });

  it('最初の6つのアイテムが表示されること', () => {
    renderWithRouter(<SearchByCategory items={mockItems} />);

    // 最初の6つのアイテムが表示されていることを確認
    for (let i = 0; i < 6; i++) {
      expect(screen.getByText(`カテゴリ${i + 1}`)).toBeInTheDocument();
    }
  });

  it('リンクが正しいhrefを持つこと', () => {
    renderWithRouter(<SearchByCategory items={mockItems} />);

    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', '/category1');
    expect(links[1]).toHaveAttribute('href', '/category2');
    expect(links[2]).toHaveAttribute('href', '/category3');
    expect(links[3]).toHaveAttribute('href', '/category4');
    expect(links[4]).toHaveAttribute('href', '/category5');
    expect(links[5]).toHaveAttribute('href', '/category6');
  });

  it('画像が正しく表示されること', () => {
    renderWithRouter(<SearchByCategory items={mockItems} />);

    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveAttribute('src', '/image1.jpg');
    expect(images[0]).toHaveAttribute('alt', 'カテゴリ1');
  });

  it('6個以上のアイテムがある場合、残りのアイテムがLinkListに渡されること', () => {
    renderWithRouter(<SearchByCategory items={mockItems} />);

    // LinkListコンポーネントに渡されるアイテム（7番目以降）が表示されていることを確認
    expect(screen.getByText('カテゴリ7')).toBeInTheDocument();
    expect(screen.getByText('カテゴリ8')).toBeInTheDocument();
  });
});
