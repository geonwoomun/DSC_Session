import React from 'react';
import "./CustomButton.scss";

interface IProps {
    children: string;
}
const CustomButton = ({children}:IProps) => {
    return (
        <button className="CustomButton">{children}</button>
    );
};

export default CustomButton;