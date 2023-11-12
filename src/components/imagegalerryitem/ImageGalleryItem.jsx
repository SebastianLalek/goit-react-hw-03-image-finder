export default function ImageGalleryItem({ image }) {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={image.webformatURL}
        data-image={image.largeImageURL}
        alt={image.tags}
      />
    </li>
  );
}
