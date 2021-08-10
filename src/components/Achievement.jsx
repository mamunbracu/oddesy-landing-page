import React, { useEffect } from "react";

const Achievement = () => {

	return (
		<div id="portfolio" className="p-8 bg-gray-800" style={{ background: "#OE1727" }}>
			<h1 className="text-center  text-indigo-50 mt-8 font-bold font-sans text-2xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl mb-8">
				Helping thousand customers to acheive their goals
			</h1>
			<p className="mb-6 text-indigo-50 font-mono">
				Odyssey digital has been partnering with many companies over the world
				successfully and we have been successful always in achieving the
				satisfaction of our clients. We can say it proudly that we have turned
				the startups business into a successful one with our brilliance and
				devoted team members.
			</p>
			<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 items-center lg:grid-cols-4 xl:grid-cols-5">
				<img
					className="mb-8 hover:scale-105 transition transform duration-200 ease-out"
					src="/assets/bb.png"
					alt=""
          data-aos="fade-left"
				/>
				<img
					className="mb-8 hover:scale-105 transition transform duration-200 ease-out"
					src="/assets/bumpy.png"
					alt=""
          data-aos="fade-up"
				/>
				<img
					className="mb-8 hover:scale-105 transition transform duration-200 ease-out"
					src="/assets/bunn.png"
					alt=""
          data-aos="fade-right"
				/>
				<img
					className="mb-8 hover:scale-105 transition transform duration-200 ease-out"
					src="/assets/crn.png"
					alt=""
          data-aos="fade-up-left"
				/>
				<img
					className="mb-8 hover:scale-105 transition transform duration-200 ease-out"
					src="/assets/ittt.png"
					alt=""
          data-aos="fade--down-left"
				/>
				<img
					className="mb-8 hover:scale-105 transition transform duration-200 ease-out"
					src="/assets/parcel.png"
					alt=""
				/>
				<img
					className="mb-8 hover:scale-105 transition transform duration-200 ease-out"
					src="/assets/prita.png"
					alt=""
          data-aos="fade-bottom"
				/>
				<img
					className="mb-8 hover:scale-105 transition transform duration-200 ease-out"
					src="/assets/quixx.png"
					alt=""
          data-aos="fade-down-right"
				/>
				<img
					className="mb-8 hover:scale-105 transition transform duration-200 ease-out"
					src="/assets/sree.png"
					alt=""
          data-aos="fade-down-left"
				/>
			</div>
		</div>
	);
};

export default Achievement;
