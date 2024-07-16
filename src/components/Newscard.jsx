import React from "react";
import { useState } from "react";
import News from "../pages/News";

const Newscard = ({ news }) => {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const handlePopupOpen = () => {
		setIsPopupOpen(true);
	};

	const handlePopupClose = () => {
		setIsPopupOpen(false);
	};

	return (
		<div className="">
			<div className="flex justify-between gap-8 w-full">
				<h2 className="">{news.title}</h2>
				<p className="text-[10px] w-[150px]">{news.publishedAt}</p>
			</div>
			<button
				className={`${isPopupOpen ? "hidden" : ""} text-[10px]`}
				onClick={handlePopupOpen}
			>
				Read more..
			</button>
			<News isOpen={isPopupOpen} onClose={handlePopupClose} news={news} />
		</div>
	);
};

export default Newscard;
