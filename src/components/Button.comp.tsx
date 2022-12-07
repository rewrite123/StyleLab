import React from 'react';

import '../style/vars.scss';
import '../style/general/button.scss';
import '../style/general/shadows.scss';

import VariantType from '../interfaces/VariantType.type';
import ShadowType from '../interfaces/ShadowType.type';
import SizeType from '../interfaces/SizeType.type';

interface ButtonPropsInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType;
  shadow?: ShadowType;
  size?: SizeType;
}

const Button = (props: ButtonPropsInterface)=>{

  let buttonClasses = 'sl-btn';
  if(props.variant != undefined){
    buttonClasses += ` sl-${props.variant}`;
  }
  if(props.shadow != undefined){
    buttonClasses += ` sl-shadow-s${props.shadow}`;
  }
  if(props.shadow != undefined){
    buttonClasses += ` sl-s${props.shadow}`;
  }
  if(props.size != undefined){
    buttonClasses += ` sl-${props.size}`;
  }
  if(props.className != undefined){
    buttonClasses = `${props.className} ${buttonClasses}`;
  }

  return (
    <button
      {...{props}}
      className={buttonClasses.toString()}
    >
      {props.children||props.value}
    </button>
  );
}
export default Button;