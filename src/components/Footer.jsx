import React from "react";

const Footer = () => {
	return (
		<div  className=" px-8 pt-10 pb-16 bg-charade-800 dark:bg-charade-300">
			<div className="md:flex md:items-center">
				<div className="w-full md:w-1/2 lg:w1/2 xl:w-1/2 mb-8">
					<h1 className="text-indigo-50 dark:text-indigo-900 font-bold font-sans mb-6">
						Contact us
					</h1>
					<h6 className="text-indigo-50 dark:text-black text-xl font-thin">
						{" "}
						7/4,Lake Circus,Kalabagan,Dhaka 1205 Dhaka, Dhaka Division,
						Bangladesh
					</h6>
				</div>
				<div className="w-full md:w-1/2 lg:w1/2 xl:w-1/2 flex md:justify-end md:items-center">
					<i
						className="fab fa-facebook text-indigo-50 dark:text-black text-4xl mr-6 cursor-pointer hover:scale-125 transition transform duration-100"
						data-aos="fade-up"
					></i>
					<i
						className="fab fa-linkedin text-indigo-50 dark:text-black text-4xl mr-6 cursor-pointer hover:scale-125 transition transform duration-100"
						data-aos="fade-right"
					></i>
					<i
						className="fab fa-instagram text-indigo-50 dark:text-black text-4xl mr-6 cursor-pointer hover:scale-125 transition transform duration-100"
						data-aos="fade-left"
					></i>
					<i
						className="fab fa-twitter-square text-indigo-50 dark:text-black text-4xl mr-6 cursor-pointer hover:scale-125 transition transform duration-100"
						data-aos="fade-down"
					></i>
					<i
						className="fab fa-youtube text-indigo-50 dark:text-black text-4xl mr-6 cursor-pointer hover:scale-125 transition transform duration-100"
						data-aos="fade-up"
					></i>
				</div>
			</div>
		</div>
	);
};

export default Footer;
