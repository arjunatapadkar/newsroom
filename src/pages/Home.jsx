import React, { useContext, useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Homepage from "../components/Homepage";
import Bitcoin from "../components/Bitcoin";
import { Route, Routes } from "react-router-dom";
import OtherPopular from "../components/OtherPopular";

const Home = () => {

	return (
		<div className="w-full h-screen flex flex-col md:flex-row  overflow-hidden">
            
			<Navbar />
            

			<div className="cards items-center  md:w-[75%]">
                
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/bitcoin" element={<Bitcoin />} />
                    <Route path="/other" element={<OtherPopular />} />
                </Routes>
                {/*  */}
                <Bitcoin />
			</div>
		</div>
	);
};

export default Home;
