import React from "react";
import Image from "next/image";

import { Container, Tag } from "@components/index";
import { MENU } from "@constants/index";
import useMediaQuery from "@hooks/useMediaQuery";

interface DetailProjectProps {
	title: string;
	nameApp: string;
	description: string;
	tags: string[];
}

const DetailProject: React.FC<DetailProjectProps> = (props): JSX.Element => {
	return (
		<div>
			<p className="font-mono text-pink-400 text-sm">{props.title}</p>
			<p className="font-bold font-sans">{props.nameApp}</p>
			<div className="mt-2 p-4 rounded-lg bg-white/10">
				<p className="text-white/70">{props.description}</p>
			</div>
			<div className="flex flex-wrap gap-y-2 mt-2">
				{props.tags.map((tag, index) => {
					return <Tag name={tag} key={index} className="mr-2" />;
				})}
			</div>
		</div>
	);
};

const Work: React.FC = (): JSX.Element => {
	const isMobile = useMediaQuery(768);
	return (
		<Container id={MENU.WORK} className="py-10 sm:py-24 pt-24 md:mb-24">
			<div
				data-aos="fade-up"
				className="whitespace-nowrap col-span-12 flex font-bold font-sans text-2xl mb-4 text-gray-200 items-center"
			>
				<span className="text-pink-400 pr-2 font-mono text-lg">#3.</span>
				{isMobile ? (
					<h3>{`My Work's`} ⚡</h3>
				) : (
					<h3>{`Some Things I've Built`} ⚡</h3>
				)}
			</div>
			<div className="col-span-12 grid grid-cols-12 gap-y-0 md:gap-y-20">
				<div
					data-aos="fade-up"
					data-aos-offset="400"
					className="col-span-12 md:col-span-6 flex items-center justify-center py-5 pr-5"
				>
					<Image
						src="/images/renos.id.png"
						alt="Renos id"
						width={429}
						height={244}
						quality={100}
					/>
				</div>
				<div
					data-aos="fade-up"
					className="col-span-12 md:col-span-6 mb-10 sm:mb-0 flex items-center"
				>
					<DetailProject
						title="Feature Project"
						nameApp="Renos.id"
						description="A web app to support seller to sell their furniture product. the
            platform handling several features that are selling product,
            find product furniture, chat with seller, finding product furniture, recruit seller
            and many more."
						tags={["React", "Next", "TypeScript", "React Query"]}
					/>
				</div>
				<div
					data-aos="fade-up"
					className="col-span-12 md:col-span-6 order-last md:order-none mb-10 sm:mb-0"
				>
					<DetailProject
						title="Feature Project"
						nameApp="Renos UI"
						// eslint-disable-next-line max-len
						description="A web app containing design system using in renos.id. create a new component, how to use the component, choose variant on the component and etc.."
						tags={["React", "Next", "TypeScript", "Storybook"]}
					/>
				</div>
				<div
					data-aos="fade-up"
					data-aos-offset="400"
					className="col-span-12 md:col-span-6 py-5 pl-5 flex justify-end"
				>
					<Image
						src="/images/renosui.png"
						alt="renosui"
						width={429}
						height={244}
						quality={100}
					/>
				</div>
				<div
					data-aos="fade-up"
					data-aos-offset="400"
					className="col-span-12 md:col-span-6 flex items-center justify-center py-5 pr-5"
				>
					<Image
						src="/images/gredu.png"
						alt="gredu"
						width={429}
						height={244}
						quality={100}
					/>
				</div>
				<div
					data-aos="fade-up"
					className="col-span-12 md:col-span-6 mb-10 sm:mb-0 flex items-center"
				>
					<DetailProject
						title="Feature Project"
						nameApp="Gredu Student"
						description="A web app that focus on educational in school. 
            platform handling several features that are modules object on school,
            exams, practice, online report, chat with teacher
            and many more."
						tags={["React", "Antd", "React Query"]}
					/>
				</div>
				<div
					data-aos="fade-up"
					className="col-span-12 md:col-span-6 order-last md:order-none mb-10 sm:mb-0"
				>
					<DetailProject
						title="Feature Project"
						nameApp="UNO monitoring system"
						// eslint-disable-next-line max-len
						description="A web app monitoring asset management specific on oceanic naval. create a feature to live report when ship is idle, stop and on going, reporting management, inventory, monitoring cctv on ship, interactive dashboard analytics and etc.."
						tags={["React", "Vite", "Tailwind", "Maplibre"]}
					/>
				</div>
				<div
					data-aos="fade-up"
					data-aos-offset="400"
					className="col-span-12 md:col-span-6 py-5 pl-5 flex justify-end"
				>
					<Image
						src="/images/uno.png"
						alt="uno"
						width={429}
						height={244}
						quality={100}
					/>
				</div>
			</div>
		</Container>
	);
};

export default Work;
