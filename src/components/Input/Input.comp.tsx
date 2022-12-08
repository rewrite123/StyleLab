import React from 'react';

import './Input.scss';

import VariantType from '../../interfaces/VariantType.type';
import ShadowType from '../../interfaces/ShadowType.type';
import SizeType from '../../interfaces/SizeType.type';

export interface InputPropsInterface extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: VariantType;
  shadow?: ShadowType;
  size?: SizeType;
}

const Input = (props: InputPropsInterface)=>{

  let compClasses = 'sl-in';
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
    <input
      {...{props}}
      disabled={props.disabled}
      className={compClasses.toString()}
    >
      {props.children||props.value}
    </input>
  );
}
export default Input;