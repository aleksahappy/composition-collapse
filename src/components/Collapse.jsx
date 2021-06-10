import React from 'react';
import PropTypes from 'prop-types';

export default  function Collapse({collapsedLabel, expandedLabel, isExpanded, onExpandedChange, children}) {
  const contentHeight = {
    height: isExpanded ? 70 : 0 // здесь наверно можно динамически вычислять высоту передаваемого блока
  };

  const onChange = () => {
    onExpandedChange(!isExpanded);
  };

  return (
    <div className={`collapse ${isExpanded ? 'expanded' : ''}`}>
      <div className="collapse-content" style={contentHeight}>
        {children}
      </div>
      <button className="collapse-btn" onClick={onChange}>
        {isExpanded ? expandedLabel : collapsedLabel}
        <span className="collapse-icon"></span>
      </button>
    </div>
  )
}

Collapse.defaultProps = {
  collapsedLabel: 'Развернуть',
  expandedLabel: 'Свернуть',
}

Collapse.propTypes = {
  collapsedLabel: PropTypes.string,
  expandedLabel: PropTypes.string,
  isExpanded: PropTypes.bool.isRequired,
  onExpandedChange: PropTypes.func.isRequired
};
