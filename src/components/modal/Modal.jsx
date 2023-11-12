export default function Modal({ image, onClick }) {
  return (
    <div className="Overlay" onClick={onClick}>
      <div className="Modal">
        <img src={image} alt="" />
      </div>
    </div>
  );
}
