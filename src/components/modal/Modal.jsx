import PropTypes from 'prop-types';

export default function Modal({ imageSrc, onClick }) {
  return (
    <div className="Overlay" onClick={onClick}>
      <div className="Modal">
        <img src={imageSrc} alt="" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  imageSrc: PropTypes.string,
  onClick: PropTypes.func,
};
