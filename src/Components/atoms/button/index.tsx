import React from 'react'
import './style.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>  {
    name: string;
    color?: string;
    type: "button" | "submit" | "reset" | undefined;
}
const Button: React.FC<Props> = ({name, color, ...props}) => {
    return (
        <button className={ `btn ${color}`} {...props}>
            {name}
        </button>
    )
};
Button.defaultProps = {
    color: "primary"
}

export default Button
