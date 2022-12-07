import React from 'react';

const Button = props => {
  let buttonClasses = 'sl-btn';
  if (props.variant != undefined) {
    buttonClasses += ` sl-${props.variant}`;
  }
  if (props.shadow != undefined) {
    buttonClasses += ` sl-shadow-s${props.shadow}`;
  }
  if (props.shadow != undefined) {
    buttonClasses += ` sl-s${props.shadow}`;
  }
  if (props.size != undefined) {
    buttonClasses += ` sl-${props.size}`;
  }
  if (props.className != undefined) {
    buttonClasses = `${props.className} ${buttonClasses}`;
  }
  return React.createElement("button", Object.assign({}, {
    props
  }, {
    className: buttonClasses.toString()
  }), props.children || props.value);
};

export { Button };
//# sourceMappingURL=index.modern.js.map
