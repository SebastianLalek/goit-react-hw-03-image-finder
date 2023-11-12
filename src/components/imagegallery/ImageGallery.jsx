import PropTypes from 'prop-types';

export default function ImageGallery({ children, onClick }) {
  return (
    <ul className="ImageGallery" onClick={onClick}>
      {children}
    </ul>
  );
}

ImageGallery.propTypes = {
  children: PropTypes.array,
  onClick: PropTypes.func,
};
