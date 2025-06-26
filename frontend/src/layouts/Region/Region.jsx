import PropTypes from 'prop-types';
import './Region.css';

export default function Region({ name, children }) {
  return (
    <div className={`region region-${name}`}>
      <div className="region-wrapper">
        <div className="region-container">
          <div className="region-wrapper">
            <div className="region-row">
              <div className="region-column">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Region.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node
};
