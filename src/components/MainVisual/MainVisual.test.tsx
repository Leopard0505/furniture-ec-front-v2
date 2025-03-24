import "@testing-library/jest-dom";
import { screen } from '@testing-library/react';
import { MainVisual } from './MainVisual';
import { Splide } from '@splidejs/splide';
import { renderWithRouter } from "../../test/utils/renderWithRouter";

jest.mock("@splidejs/splide");
const SplideMock = Splide as jest.MockedClass<typeof Splide>;

const mockItems = [
  {
    id: '1',
    to: '/product/1',
    src: '/images/test1.jpg',
    alt: 'テスト画像1'
  },
  {
    id: '2',
    to: '/product/2',
    src: '/images/test2.jpg',
    alt: 'テスト画像2'
  }
];

describe('MainVisual', () => {
  it('コンポーネントが正しくレンダリングされること', () => {
    renderWithRouter(<MainVisual items={mockItems} />);

    expect(SplideMock.mock.instances[0].mount).toHaveBeenCalled();
    expect(screen.getByLabelText('Splideの基本的なHTML')).toBeInTheDocument();
  });

  it('スライダーのアイテムが正しく表示されること', () => {
    renderWithRouter(<MainVisual items={mockItems} />);

    // 各アイテムが正しく表示されていることを確認
    mockItems.forEach(item => {
      const image = screen.getByAltText(item.alt);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', item.src);
    });
  });

  it('リンクが正しく機能すること', () => {
    renderWithRouter(<MainVisual items={mockItems} />);

    // 各リンクが正しいURLに遷移することを確認
    mockItems.forEach(item => {
      const link = screen.getByRole('link', { name: item.alt });
      expect(link).toHaveAttribute('href', item.to);
    });
  });
});
