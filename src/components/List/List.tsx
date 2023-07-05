import React from "react";

import { ArrowRight } from "react-feather";
import cx from "classnames";

interface ListProps {
	children: React.ReactNode;
	className?: string;
}

const List: React.FC<ListProps> = (props): JSX.Element => {
	return (
		<p
			className={cx(
				"flex items-start font-sans text-white/70",
				props.className
			)}
		>
			<div style={{ marginTop: "0.40rem" }}>
				<ArrowRight size={14} className=" text-pink-400 mr-2" />
			</div>
			{props.children}
		</p>
	);
};

export default List;
