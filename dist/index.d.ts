import React from 'react';

declare type VariantType = 'primary' | 'secondary' | 'accent' | 'danger' | 'hazard' | 'warning' | 'success' | 'info' | 'disabled';

declare type ShadowType = 1 | 2 | 3 | 4 | 5 | 6 | 7;

declare type SizeType = 'sm' | 'md' | 'lg';

interface ButtonPropsInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: VariantType;
    shadow?: ShadowType;
    size?: SizeType;
}
declare const Button: (props: ButtonPropsInterface) => JSX.Element;

export { Button };
