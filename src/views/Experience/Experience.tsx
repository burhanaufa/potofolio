import React, { useCallback, useState } from "react";

import { Container, Tabs, OccupationTitle, List } from "@components/index";
import { MENU, EXPERIENCE, COMPANY } from "@constants/index";

const Experience: React.FC = (): JSX.Element => {
	const [curretTab, setCurrentTab] = useState<string>(COMPANY.RENOS_ID);

	const handleTab = useCallback((menu: string) => {
		setCurrentTab(menu);
	}, []);

	return (
		<Container id={MENU.EXPERIENCE} className="pt-24 md:mb-24">
			<div
				data-aos="fade-up"
				className="col-span-12 flex font-sans font-semibold text-2xl mb-4 text-gray-200 items-center justify-center"
			>
				<span className="text-pink-400 pr-2 font-mono text-lg">#2.</span>
				<h3>{`Where I've worked ⚡`}</h3>
			</div>
			<div data-aos="fade-up" className="col-span-12 mt-4">
				<div className="mx-auto">
					<div className="w-12/12 grid grid-cols-12 font-mono">
						<Tabs
							menu={EXPERIENCE}
							currentActive={curretTab}
							onChange={handleTab}
						/>
						<div className="col-span-12 sm:col-span-9 md:col-span-9 lg:col-span-8 xl:col-span-9 mt-5 sm:mt-0 font-sans text-gray-300">
							{curretTab === COMPANY.RENOS_ID && (
								<div>
									<OccupationTitle
										title="Front-end Engineer"
										company="@renos,id"
										start="August 2022"
										end="Present"
									/>
									<div className="mt-4">
										<List>
											Create awesome features and maintaining Renos.id applet
											such as buyer platform, seller platform etc...
										</List>
										<List>
											Create a beautiful design system that build with react
											based to make it consistency component across platform at
											Renos.id. Made with modern stack typescript, rollup
											(bundle), storybook etc
										</List>
										<List>
											Communicate and collaborate with cross teams, either
											engineers and designer to handle new project or refinement
											product.
										</List>
										<List>
											Healthy culture during lifecycle development, daily
											standup, grooming, refinement, sprint planing,
											retrospective per bi-weekly, code review, desk check, demo
											day and etc..
										</List>
										<List>
											Work with variety of different languages, frameworks such
											as Javascript, Typescript, React, Nodejs, Express, Nextjs,
											Graphql, and also take care of implementation responsive
											design
										</List>
									</div>
								</div>
							)}
							{curretTab === COMPANY.BRAGA && (
								<div>
									<OccupationTitle
										title="Front-end Engineer (part-time)"
										company="@braga_tech"
										start="Nov 2022"
										end="Des 2022"
									/>
									<div className="mt-4">
										<List>
											Initiate and develop a web app to monitor ships related to
											UNO company, making management asset for ship company,
											admin page and responsive map using maplibre
										</List>
										<List>
											Worked closely with designer to make one page design web
											that support all the needs from client
										</List>
									</div>
								</div>
							)}
							{curretTab === COMPANY.GREDU && (
								<div>
									<OccupationTitle
										title="Front-end Engineer"
										company="@gredu.asia"
										start="Des 2020"
										end="July 2022"
									/>
									<div className="mt-4">
										<List>
											Create a beautiful design system that build with react
											based to make it consistency component across platform at
											Greduasia. Made with modern stack typescript, rollup
											(bundle), storybook etc
										</List>
										<List>
											Work on a variety applet at gredu such as Teacher,
											Student, School Management System, Landing Page, OMS,
											maintaining system and bug fix.
										</List>
										<List>
											Maintenance and bug fix the platform related on gredu.
										</List>
									</div>
								</div>
							)}
							{curretTab === COMPANY.GEMILANG && (
								<div>
									<OccupationTitle
										title="Programmer"
										company="@gemilang"
										start="Des 2019"
										end="Des 2020"
									/>
									<div className="mt-4">
										<List>
											Making landing page website for sub product using
											wordpress
										</List>
										<List>
											Maintained and monitored an admin page for absense of
											employee.
										</List>
										<List>Helping other employee regarding tech stuff.</List>
										<List>Developing design for client using figma.</List>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Experience;
