import React from 'react';
import '../../style/vars.scss';
import '../../style/general/button.scss';
import '../../style/general/shadows.scss';
import VariantType from '../../interfaces/VariantType.type';
import ShadowType from '../../interfaces/ShadowType.type';
import SizeType from '../../interfaces/SizeType.type';
export interface ButtonPropsInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: VariantType;
    shadow?: ShadowType;
    size?: SizeType;
}
declare const Button: (props: ButtonPropsInterface) => JSX.Element;
export default Button;
