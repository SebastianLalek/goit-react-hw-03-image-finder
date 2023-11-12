export default function ImageGallery({ children, onClick }) {
  return (
    <ul className="ImageGallery" onClick={onClick}>
      {children}
    </ul>
  );
}
