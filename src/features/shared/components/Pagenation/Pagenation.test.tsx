import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../../../../test/utils/renderWithRouter';
import { Pagenation } from './Pagenation';
import { useQueryParams } from '../../hooks/useQueryParams';

// useQueryParamsのモック
jest.mock('../../hooks/useQueryParams', () => ({
  useQueryParams: jest.fn(),
}));

describe('Pagenation', () => {
  const mockUpdateSearchParams = jest.fn();

  beforeEach(() => {
    mockUpdateSearchParams.mockClear();
    (useQueryParams as jest.Mock).mockReturnValue({
      updateSearchParams: mockUpdateSearchParams,
    });
  });

  it('ページネーションが正しくレンダリングされる', () => {
    renderWithRouter(<Pagenation currentPage={1} totalPages={5} />);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('前へボタンをクリックすると正しいページに移動する', () => {
    renderWithRouter(<Pagenation currentPage={3} totalPages={5} />);

    const prevButton = screen.getByText('<');
    fireEvent.click(prevButton);

    expect(mockUpdateSearchParams).toHaveBeenCalledWith('page', '2');
  });

  it('次へボタンをクリックすると正しいページに移動する', () => {
    renderWithRouter(<Pagenation currentPage={3} totalPages={5} />);

    const nextButton = screen.getByText('>');
    fireEvent.click(nextButton);

    expect(mockUpdateSearchParams).toHaveBeenCalledWith('page', '4');
  });

  it('ページ番号をクリックすると正しいページに移動する', () => {
    renderWithRouter(<Pagenation currentPage={1} totalPages={5} />);

    const pageButton = screen.getByText('3');
    fireEvent.click(pageButton);

    expect(mockUpdateSearchParams).toHaveBeenCalledWith('page', '3');
  });

  it('最初のページでは前へボタンがクリックできない', () => {
    renderWithRouter(<Pagenation currentPage={1} totalPages={5} />);

    const prevButton = screen.getByText('<');
    fireEvent.click(prevButton);

    expect(mockUpdateSearchParams).not.toHaveBeenCalled();
  });

  it('最後のページでは次へボタンがクリックできない', () => {
    renderWithRouter(<Pagenation currentPage={5} totalPages={5} />);

    const nextButton = screen.getByText('>');
    fireEvent.click(nextButton);

    expect(mockUpdateSearchParams).not.toHaveBeenCalled();
  });

  it('前へボタンのEnterキー押下で正しいページに移動する', () => {
    renderWithRouter(<Pagenation currentPage={3} totalPages={5} />);

    const prevButton = screen.getByText('<');
    fireEvent.keyUp(prevButton, { key: 'Enter', code: 'Enter' });

    expect(mockUpdateSearchParams).toHaveBeenCalledWith('page', '2');
  });

  it('次へボタンのEnterキー押下で正しいページに移動する', () => {
    renderWithRouter(<Pagenation currentPage={3} totalPages={5} />);

    const nextButton = screen.getByText('>');
    fireEvent.keyUp(nextButton, { key: 'Enter', code: 'Enter' });

    expect(mockUpdateSearchParams).toHaveBeenCalledWith('page', '4');
  });

  it('ページ番号のEnterキー押下で正しいページに移動する', () => {
    renderWithRouter(<Pagenation currentPage={1} totalPages={5} />);

    const pageButton = screen.getByText('3');
    fireEvent.keyUp(pageButton, { key: 'Enter', code: 'Enter' });

    expect(mockUpdateSearchParams).toHaveBeenCalledWith('page', '3');
  });
});
