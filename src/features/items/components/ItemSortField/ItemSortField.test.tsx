import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../../../../test/utils/renderWithRouter';
import { ItemSortField } from './ItemSortField';
import { useAccordion } from '../../../shared/hooks/useAccordion';
import { useItemSort } from '../../hooks/useItemSort';

// モックの設定
jest.mock('../../../shared/hooks/useAccordion');
jest.mock('../../hooks/useItemSort');

describe('ItemSortField', () => {
  const mockHandleClickAccordion = jest.fn();
  const mockConvertClassName = 'mock-class-name';
  const mockHandleSetItemSort = jest.fn();
  const mockHandleSort = jest.fn();
  const mockHandleClearSort = jest.fn();

  beforeEach(() => {
    (useAccordion as jest.Mock).mockReturnValue({
      convertClassName: mockConvertClassName,
      handleClickAccordion: mockHandleClickAccordion,
    });

    (useItemSort as jest.Mock).mockReturnValue({
      handleSetItemSort: mockHandleSetItemSort,
      handleSort: mockHandleSort,
      handleClearSort: mockHandleClearSort,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('アコーディオンが正しく表示されること', () => {
    renderWithRouter(<ItemSortField />);

    expect(screen.getByText('並び替え')).toBeInTheDocument();
    expect(screen.getByText('価格：安い順')).toBeInTheDocument();
    expect(screen.getByText('価格：高い順')).toBeInTheDocument();
    expect(screen.getByText('新着商品')).toBeInTheDocument();
    expect(screen.getByText('レビュー数が多い順')).toBeInTheDocument();
    expect(screen.getByText('レビュー評価：高い順')).toBeInTheDocument();
  });

  it('アコーディオンのクリックでhandleClickAccordionが呼ばれること', () => {
    renderWithRouter(<ItemSortField />);
    const container = screen.getByText('並び替え').parentElement;
    fireEvent.click(container!);

    expect(mockHandleClickAccordion).toHaveBeenCalledTimes(1);
  });

  it('並び替えオプションのクリックでhandleSetItemSortが呼ばれること', () => {
    renderWithRouter(<ItemSortField />);

    fireEvent.click(screen.getByText('価格：安い順'));
    expect(mockHandleSetItemSort).toHaveBeenCalledWith('price', 'asc');

    fireEvent.click(screen.getByText('価格：高い順'));
    expect(mockHandleSetItemSort).toHaveBeenCalledWith('price', 'desc');
  });

  it('クリアボタンのクリックでhandleClearSortが呼ばれること', () => {
    renderWithRouter(<ItemSortField />);

    fireEvent.click(screen.getByText('クリア'));
    expect(mockHandleClearSort).toHaveBeenCalledTimes(1);
  });

  it('並び替え実行ボタンのクリックでhandleSortとhandleClickAccordionが呼ばれること', () => {
    renderWithRouter(<ItemSortField />);

    fireEvent.click(screen.getByText('この条件で並び替える'));
    expect(mockHandleSort).toHaveBeenCalledTimes(1);
    expect(mockHandleClickAccordion).toHaveBeenCalledTimes(1);
  });

  it('並び替えオプションのEnterキー押下でhandleSetItemSortが呼ばれること', () => {
    renderWithRouter(<ItemSortField />);

    fireEvent.keyUp(screen.getByText('価格：安い順'), { key: 'Enter', code: 'Enter' });
    expect(mockHandleSetItemSort).toHaveBeenCalledWith('price', 'asc');

    fireEvent.keyUp(screen.getByText('価格：高い順'), { key: 'Enter', code: 'Enter' });
    expect(mockHandleSetItemSort).toHaveBeenCalledWith('price', 'desc');
  });

  it('クリアボタンのEnterキー押下でhandleClearSortが呼ばれること', () => {
    renderWithRouter(<ItemSortField />);

    fireEvent.click(screen.getByText('クリア'), { key: 'Enter', code: 'Enter' });
    expect(mockHandleClearSort).toHaveBeenCalledTimes(1);
  });

  it('並び替え実行ボタンのEnterキー押下でhandleSortとhandleClickAccordionが呼ばれること', () => {
    renderWithRouter(<ItemSortField />);

    fireEvent.click(screen.getByText('この条件で並び替える'), { key: 'Enter', code: 'Enter' });
    expect(mockHandleSort).toHaveBeenCalledTimes(1);
    expect(mockHandleClickAccordion).toHaveBeenCalledTimes(1);
  });
});
