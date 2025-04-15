import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../../test/utils/renderWithRouter.tsx';
import { ImageViewer } from './ImageViewer.tsx';

describe('ImageViewer Component', () => {
  const mainView = {
    url: 'image1.jpg',
    alt: 'image1',
  };
  const subView = [
    {
      url: 'image2.jpg',
      alt: 'image2',
    },
    {
      url: 'image3.jpg',
      alt: 'image3',
    },
    {
      url: 'image4.jpg',
      alt: 'image4',
    },
  ];

  it('renders the component correctly', () => {
    renderWithRouter(
      <ImageViewer
        mainView={mainView}
        subView={subView}
      />
    );
    expect(screen.getByAltText('image1')).toBeInTheDocument();
    expect(screen.getByAltText('image2')).toBeInTheDocument();
    expect(screen.getByAltText('image3')).toBeInTheDocument();
    expect(screen.getByAltText('image4')).toBeInTheDocument();
  });

  it('handles sub-image click events', () => {
    const { getAllByRole } = renderWithRouter(
      <ImageViewer
        mainView={mainView}
        subView={subView}
      />
    );

    const subImages = getAllByRole('img').slice(1); // Exclude main image
    fireEvent.click(subImages[0]);
    fireEvent.click(subImages[1]);

    // Add assertions to verify the behavior of handleSubImageClick
  });

  it('handles sub-image keyup events', () => {
    const { getAllByRole } = renderWithRouter(
      <ImageViewer
        mainView={mainView}
        subView={subView}
      />
    );

    const subImages = getAllByRole('img').slice(1); // Exclude main image
    fireEvent.keyUp(subImages[0], { key: 'Enter', code: 'Enter' });
    fireEvent.keyUp(subImages[1], { key: 'Enter', code: 'Enter' });

    // Add assertions to verify the behavior of handleEnterKey
  });
});
