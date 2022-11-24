import React from "react";
import { Outlet } from "react-router-dom";

const Onbaording = () => {
	return (
		<div className="h-screen w-full flex justify-center items-center sm:p-10 select-none drop-shadow-xl">
			<div className=" h-[100vh] sm:h-[80vh] flex bg-stone-100  w-screen sm:full max-w-5xl sm:rounded-lg overflow-hidden">
				<div className="absolute sm:relative w-full  flex sm:w-[50%] h-full sm:bg-black  items-center justify-center backdrop-blur-xl sm:brightness-75 overflow-hidden">
					
					<div className="absolute text-7xl blur-md sm:blur-none font-bold text-gray-150 sm:text-white z-10   shadow-white">
						AGENCY
					</div>
					
				</div>
				<div className="w-full sm:w-[50%] z-50 transition-all duration-300">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default Onbaording;
