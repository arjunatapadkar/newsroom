import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="py-4 bg-slate-500 px-8 md:w-[25%] ">
			<div className="flex md:flex-col gap-10">
                <Link to="/">

				<h1 className=" text-3xl font-bold">
					news<span className="text-blue-800 ">Room</span>
				</h1>
                </Link>

				<div className="flex md:flex-col gap-3">
					<Link to="/bitcoin">Bitcoin</Link>
					<Link to="/other">Other Popular</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
