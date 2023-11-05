export default function Modal({ image }) {
  return (
    <div className="Overlay">
      <div className="Modal">
        <img src={image.largeImageURL} alt={image.tags} />
      </div>
    </div>
  );
}
