import React, { useContext, useEffect, useState } from "react";
import axios, { all } from "axios";
import Newscard from "../components/Newscard";
import Navbar from "../components/Navbar";

const Homepage = () => {
	const [allnews, setAllnews] = useState([]);

	const getData = async () => {
		const res = await axios.get(
			"https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=a72e9cfa5c664ed2ad41bc05b42ca9b2"
		);
		console.log(res.data);
		setAllnews(res.data.articles);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="flex flex-col gap-4 h-screen overflow-scroll py-6 w-full px-16">
			{allnews.map((news, index) => (
				<div key={index} className=" shadow-sm  bg-white py-8 px-4 rounded-lg">
					<Newscard news={news} />
				</div>
			))}
		</div>
	);
};

export default Homepage;
