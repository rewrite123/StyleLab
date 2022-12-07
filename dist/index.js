function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var Button = function Button(props) {
  var buttonClasses = 'sl-btn';
  if (props.variant != undefined) {
    buttonClasses += " sl-" + props.variant;
  }
  if (props.shadow != undefined) {
    buttonClasses += " sl-shadow-s" + props.shadow;
  }
  if (props.shadow != undefined) {
    buttonClasses += " sl-s" + props.shadow;
  }
  if (props.size != undefined) {
    buttonClasses += " sl-" + props.size;
  }
  if (props.className != undefined) {
    buttonClasses = props.className + " " + buttonClasses;
  }
  return React.createElement("button", Object.assign({}, {
    props: props
  }, {
    className: buttonClasses.toString()
  }), props.children || props.value);
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
