import React from 'react';

import './Text.scss';

import VariantType from '../../interfaces/VariantType.type';
import ShadowType from '../../interfaces/ShadowType.type';
import SizeType from '../../interfaces/SizeType.type';
import HeadingsType from '../../interfaces/HeadingsType.type';

export type TextVariantType = SizeType | HeadingsType;
export type TextColorType = 'txt-primary' | 'txt-secondary' | VariantType;

export interface TextPropsInterface extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: TextVariantType;
  variantColor?: TextColorType;
  shadow?: ShadowType;
  bold?: boolean;
  italic?: boolean;
}

const Text = (props: TextPropsInterface)=>{

  let compClasses = 'sl-txt';
  if(props.variant != undefined){
    compClasses += ` sl-${props.variant}`;
    console.log('compClasses');
    console.log(compClasses);
  }
  if(props.variantColor != undefined){
    compClasses += ` sl-${props.variantColor}`;
  }
  if(props.shadow != undefined){
    compClasses += ` sl-shadow-s${props.shadow}`;
  }
  if(props.bold){
    compClasses += ` sl-txt-bold`;
  }else if(props.bold == false){
    compClasses += ` sl-txt-not-bold`;
  }
  if(props.italic){
    compClasses += ` sl-txt-it`;
  }else if(props.italic == false){
    compClasses += ` sl-txt-not-it`;
  }
  if(props.className != undefined){
    compClasses = `${props.className} ${compClasses}`;
  }

  return (
    <span
      {...{props}}
      className={compClasses.toString()}
    >
      {props.children}
    </span>
  );
}
export default Text;