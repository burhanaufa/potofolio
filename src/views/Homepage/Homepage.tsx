import React from "react";

import { Button, Container } from "@components/index";
import { MENU } from "@constants/index";
import { Download } from "react-feather";

const Homepage: React.FC = (): JSX.Element => {
	return (
		<Container id={MENU.HOMEPAGE}>
			<div className="col-span-12 min-h-screen flex flex-col justify-center items-start">
				<p className="text-pink-400 pb-3 font-mono">Hi 👋 , my name is</p>
				<h1 className="font-bold font-sans text-2xl lg:text-5xl xl:text-7xl tracking-wide text-gray-300">
					Burhanuddin Aufa
					<br /> {`I'm a Front-end Engineer`}
				</h1>
				<div className="sm:w-8/12 md:w-8/12">
					<p className="mt-4 text-gray-400">
						Javascript enthusiast and love build something with ReactJS.
						Currently I work as front-end engineer focus to build pixel perfect
						of user interface with good code quality. Curious to learn new
						things.
					</p>
				</div>
				<a href="/CV_Burhanuddin_Aufa.pdf" target="_blank">
					<Button className="mt-5 px-6 font-mono flex items-center animate-bounce w-200 h-50 ">
						My Resume
						<div className="ml-2">
							<Download size={20} />
						</div>
					</Button>
				</a>
			</div>
		</Container>
	);
};

export default Homepage;
