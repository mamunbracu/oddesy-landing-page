import React from "react";

const Service = () => {
	const card = [
		{
			heading: "Search Engine Optimization (SEO)",
			para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae fusce velit ullamcorper purus velit condimentum ghkjhlyjhljylhj",
			bnt: "Learn More",
		},
		{
			heading: "Search Engine Marketing (SEM)",
			para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae fusce velit ullamcorper purus velit condimentum ghkjhlyjhljylhj",
			bnt: "Learn More",
		},
		{
			heading: "Campaign Strategy",
			para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae fusce velit ullamcorper purus velit condimentum ghkjhlyjhljylhj",
			bnt: "Learn More",
		},
		{
			heading: "Social Media Marketing",
			para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae fusce velit ullamcorper purus velit condimentum ghkjhlyjhljylhj",
			bnt: "Learn More",
		},
		{
			heading: "Email Outreach",
			para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae fusce velit ullamcorper purus velit condimentum ghkjhlyjhljylhj",
			bnt: "Learn More",
		},
		{
			heading: "retargeting",
			para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae fusce velit ullamcorper purus velit condimentum ghkjhlyjhljylhj",
			bnt: "Learn More",
		},
		{
			heading: "Content genaration & optimization",
			para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae fusce velit ullamcorper purus velit condimentum ghkjhlyjhljylhj",
			bnt: "Learn More",
		},
		{
			heading: "quality link building",
			para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae fusce velit ullamcorper purus velit condimentum ghkjhlyjhljylhj",
			bnt: "Learn More",
		},
		{
			heading: "Integrated Online Marketing Strategies",
			para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae fusce velit ullamcorper purus velit condimentum ghkjhlyjhljylhj",
			bnt: "Learn More",
		},
	];
	return (
		<div className="p-8 " style={{ background: "#101A2B" }} id="service">
			<h1 className="flex mt-8 justify-center items-center py-12 text-3xl md:text-4xl lg:text-4xl xl:text-4xl text-indigo-50 font-extrabold">
				Service We Offer
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
				{card.map(({ heading, para, bnt }) => (
					<div
          data-aos="fade-up"
						className="shadow-lg m-3 p-4 flex flex-col justify-center items-center rounded-lg hover:scale-105 transition transform duration-200 ease-in-out"
						style={{ background: " #282F3B" }}
					>
						<h2 className="text-indigo-50 mb-8 mt-6 text-lg font-bold font-sans ">
							{heading}
						</h2>
						<p className="text-gray-200 mb-6 text-center">{para}</p>
					
							<button className="flex justify-center items-center mb-6">
								<span className="text-gray-50 text-lg font-mono">{bnt}</span>
								<img className="ml-4" src="/assets/rightA.png" alt="" />
							</button>
					
					</div>
				))}
			</div>
		</div>
	);
};

export default Service;
