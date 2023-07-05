import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import AOS from "aos";

import { Homepage, About, Experience, Work, Contact } from "@views/index";
import { Navbar } from "@components/index";

const Home: NextPage = () => {
	useEffect(() => {
		AOS.init({
			offset: 200,
			duration: 600,
			easing: "ease-in-sine",
			delay: 100,
		});
		AOS.refresh();
	}, []);

	return (
		<div>
			<Head>
				<title>My Portofolio</title>
				<meta
					name="description"
					content="Landing page created by nextjs typescript"
				/>
				<link rel="icon" href="/logo.jpg" />
			</Head>
			<Navbar />
			<Homepage />
			<About />
			<Experience />
			<Work />
			<Contact />
		</div>
	);
};

export default Home;
