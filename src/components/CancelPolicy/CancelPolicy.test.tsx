import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../../test/utils/renderWithRouter';
import { CancelPolicy } from './CancelPolicy';

// Portalコンポーネントのモック
jest.mock('../Portal/Portal', () => ({
  Portal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe('CancelPolicy Component', () => {
  it('renders the trigger text', () => {
    renderWithRouter(<CancelPolicy />);
    expect(screen.getByText('キャンセル・ポリシーについて')).toBeInTheDocument();
  });

  it('opens the modal when clicked', () => {
    renderWithRouter(<CancelPolicy />);
    const trigger = screen.getByText('キャンセル・ポリシーについて');
    fireEvent.click(trigger);
    expect(screen.getByRole('modal')).toBeInTheDocument();
  });

  it('closes the modal when onRequestClose is triggered', () => {
    renderWithRouter(<CancelPolicy />);
    const trigger = screen.getByText('キャンセル・ポリシーについて');
    fireEvent.click(trigger);

    const closeButton = screen.getByRole('close-button');
    fireEvent.click(closeButton);

    expect(screen.queryByRole('modal')).not.toBeInTheDocument();
  });

  it('opens the modal when Enter key is pressed', () => {
    renderWithRouter(<CancelPolicy />);
    const trigger = screen.getByText('キャンセル・ポリシーについて');
    fireEvent.keyDown(trigger, { key: 'Enter', code: 'Enter' });
    expect(screen.getByRole('modal')).toBeInTheDocument();
  });
});
