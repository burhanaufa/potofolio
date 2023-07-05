import React from "react";

interface ButtonProps {
	size?: "sm" | "md" | "lg";
	children: React.ReactNode | undefined;
	className?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = (props): JSX.Element => {
	return (
		<button
			// eslint-disable-next-line max-len
			className={`font-mono bg-transparent hover:bg-pink-400 text-pink-400 font-semibold hover:text-white py-2 px-4 border border-pink-400 hover:border-transparent rounded ${
				props.className || ""
			}`}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	);
};

export default Button;
