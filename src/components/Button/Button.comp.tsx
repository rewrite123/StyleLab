import React from 'react';

import './Button.scss';

import VariantType from '../../interfaces/VariantType.type';
import ShadowType from '../../interfaces/ShadowType.type';
import SizeType from '../../interfaces/SizeType.type';

export interface ButtonPropsInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType;
  shadow?: ShadowType;
  size?: SizeType;
}

const Button = (props: ButtonPropsInterface)=>{

  let compClasses = 'sl-btn';
  if(props.variant != undefined){
    compClasses += ` sl-${props.variant}`;
  }
  if(props.shadow != undefined){
    compClasses += ` sl-shadow-s${props.shadow}`;
  }
  if(props.size != undefined){
    compClasses += ` sl-${props.size}`;
  }
  if(props.className != undefined){
    compClasses = `${props.className} ${compClasses}`;
  }

  return (
    <button
      {...{props}}
      disabled={props.disabled}
      className={compClasses.toString()}
    >
      {props.children||props.value}
    </button>
  );
}
export default Button;