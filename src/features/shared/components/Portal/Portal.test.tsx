import { screen } from '@testing-library/react';
import { Portal } from './Portal';
import { renderWithRouter } from '../../../../test/utils/renderWithRouter';

describe('Portal', () => {
  beforeEach(() => {
    // テスト用のportal要素を作成
    const portalRoot = document.createElement('div');
    portalRoot.setAttribute('id', 'portal');
    document.body.appendChild(portalRoot);
  });

  afterEach(() => {
    // テスト後にportal要素を削除
    const portalRoot = document.getElementById('portal');
    if (portalRoot) {
      document.body.removeChild(portalRoot);
    }
  });

  it('子要素をportal要素にレンダリングする', () => {
    renderWithRouter(
      <Portal>
        <div data-testid="test-content">テストコンテンツ</div>
      </Portal>
    );

    const portalRoot = document.getElementById('portal');
    expect(portalRoot).toBeInTheDocument();
    expect(screen.getByTestId('test-content')).toBeInTheDocument();
  });
});
