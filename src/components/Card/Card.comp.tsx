import React from 'react';

import './Card.scss';

import VariantType from '../../interfaces/VariantType.type';
import ShadowType from '../../interfaces/ShadowType.type';
import SizeType from '../../interfaces/SizeType.type';

export interface CardPropsInterface extends React.HTMLAttributes<HTMLDivElement> {
  shadow?: ShadowType;
}

const Card = (props: CardPropsInterface)=>{

  let compClasses = 'sl-card';
  if(props.shadow != undefined){
    compClasses += ` sl-shadow-s${props.shadow}`;
  }
  if(props.className != undefined){
    compClasses = `${props.className} ${compClasses}`;
  }

  return (
    <div
      {...{props}}
      className={compClasses.toString()}
    >
      {props.children}
    </div>
  );
}
export default Card;