import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Registration = () => {
	const [data, setData] = useState({
		invitation: "",
		contact: "",
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		company: "",
		address: "",
		role: "",
	});
	const [step, setStep] = useState(1);

	const handlePrev = (e) => {
		e.preventDefault();

		setStep((prevStep) => prevStep - 1);
	};

	const handleNext = (e) => {
		e.preventDefault();

		setStep((prevStep) => prevStep + 1);
	};
	let name, value;
	const handleChange = (e) => {
		e.preventDefault();
		name = e.target.name;
		value = e.target.value;
		setData({ ...data, [name]: value });
	};

	return (
		<>
			<form className="h-full flex flex-col justify-center text-black">
				<div className="text-center px-10 pb-10">
					<p className=" text-3xl uppercase">Register</p>
					<p className="tracking-widest font-light mt-5">
						Fill in the details to begin
					</p>
				</div>
				<ul className=" w-full flex flex-col justify-center items-center gap-4 ">
					{/* <div className="flex flex-col items-center mb-4">
						<p className="text-lg mb-2 tracking-widest"> Step</p>
						<div className="h-8 aspect-square rounded-full bg-stone-900 text-white text-lg flex items-center justify-center">
							<p> 1</p>
						</div>
					</div> */}

					{(() => {
						switch (step) {
							case 1:
								return (
									<>
										<li className="w-full px-10  space-y-2">
											<label
												htmlFor="contact"
												className="font-light tracking-widest">
												Enter Your Mobile
											</label>
											<input
												id="contact"
												name="contact"
												type="text"
												value={data.contact}
												onChange={handleChange}
												className="text-center w-full h-12 tracking-widest font-light text-lg outline-none rounded-md px-4"
												placeholder="mobile"
											/>
										</li>
										<li className="w-full px-10  space-y-2 mb-6">
											<label
												htmlFor="invitation"
												className="font-light tracking-widest">
												Enter Your Invitation Code
											</label>
											<input
												id="invitation"
												name="invitation"
												type="text"
												value={data.invitation}
												onChange={handleChange}
												className="w-full h-12 tracking-widest font-light text-lg outline-none rounded-md text-center px-4"
												placeholder="invitation code"
											/>
										</li>
										<li className="w-full px-10 flex gap-8">
											<button
												className="w-full h-12 text-lg outline-none bg-stone-900  text-white rounded-md px-4 overflow-hidden"
												onClick={handleNext}>
												Continue
											</button>
										</li>
									</>
								);
							case 2:
								return (
									<>
										<li className="w-full text-start px-10 flex gap-5">
											<div className="space-y-2">
												<label
													htmlFor="firstname"
													className="font-light tracking-widest">
													Firstname
												</label>
												<input
													id="firstname"
													name="firstname"
													type="text"
													value={data.firstname}
													onChange={handleChange}
													className="text-start w-full h-10 tracking-widest font-light text-base outline-none rounded-md px-4"
													placeholder="first name"
												/>
											</div>
											<div className="space-y-2">
												<label
													htmlFor="lastname"
													className="font-light tracking-widest">
													Lastname
												</label>
												<input
													id="lastname"
													name="lastname"
													type="text"
													value={data.lastname}
													onChange={handleChange}
													className="text-start w-full h-10 tracking-widest font-light text-base outline-none rounded-md px-4"
													placeholder="last name"
												/>
											</div>
										</li>
										<li className="w-full px-10  space-y-2">
											<label
												htmlFor="email"
												className="font-light tracking-widest">
												Email Address
											</label>
											<input
												id="email"
												name="email"
												type="text"
												value={data.email}
												onChange={handleChange}
												className="w-full h-10 tracking-widest font-light text-base outline-none rounded-md text-start px-4"
												placeholder="email@example.com"
											/>
										</li>
										<li className="w-full px-10  space-y-2 mb-4">
											<label
												htmlFor="password"
												className="font-light tracking-widest">
												Password
											</label>
											<input
												id="password"
												name="password"
												type="password"
												value={data.password}
												onChange={handleChange}
												className="w-full h-10 tracking-widest font-light text-base outline-none rounded-md text-start px-4"
												placeholder="password"
											/>
										</li>
										<li className="w-full px-10 flex gap-8">
											<button
												className="w-full h-12 text-lg outline-none bg-stone-900  text-white rounded-md px-4 overflow-hidden"
												onClick={handlePrev}>
												Previous
											</button>
											<button
												className="w-full h-12 text-lg outline-none bg-stone-900  text-white rounded-md px-4 overflow-hidden"
												onClick={handleNext}>
												Next
											</button>
										</li>
									</>
								);
							case 3:
								return (
									<>
										<li className="w-full text-start px-10 flex gap-5">
											<div className="space-y-2">
												<label
													htmlFor="company"
													className="font-light tracking-widest">
													Name of Your Organization
												</label>
												<input
													id="company"
													name="company"
													type="text"
													value={data.company}
													onChange={handleChange}
													className="text-start w-full h-10 tracking-widest font-light text-base outline-none rounded-md px-4"
													placeholder="your company"
												/>
											</div>
										</li>
										<li className="w-full px-10  space-y-2">
											<label
												htmlFor="address"
												className="font-light tracking-widest">
												Address
											</label>
											<input
												id="address"
												name="address"
												type="text"
												value={data.address}
												onChange={handleChange}
												className="w-full h-10 tracking-widest font-light text-base outline-none rounded-md text-start px-4"
												placeholder="city / state"
											/>
										</li>
										<li className="w-full px-10  space-y-2 mb-4">
											<label
												htmlFor="role"
												className="font-light tracking-widest">
												Your Role
											</label>
											<input
												id="role"
												name="role"
												type="text"
												value={data.role}
												onChange={handleChange}
												className="w-full h-10 tracking-widest font-light text-base outline-none rounded-md text-start px-4"
												placeholder="your role"
											/>
										</li>
										<li className="w-full px-10 flex gap-8">
											<button
												className="w-full h-12 text-lg outline-none bg-stone-900  text-white rounded-md px-4 overflow-hidden"
												onClick={handlePrev}>
												Previous
											</button>
											<button
												className="w-full h-12 text-lg outline-none bg-stone-900  text-white rounded-md px-4 overflow-hidden"
												onClick={handleNext}>
												Next
											</button>
										</li>
									</>
								);
							case 4:
								return (
									<>
										<li className="w-full text-start sm:text-gray-550 p-10 space-y-4 mb-6 rounded-2xl ">
											<div className="flex justify-between">
												<p className="font-light tracking-widest">
													First Name:
												</p>
												<p> {data.firstname} </p>
											</div>
											<div className="flex justify-between">
												<p className="font-light tracking-widest">Last Name:</p>
												<p> {data.lastname} </p>
											</div>
											<div className="flex justify-between">
												<p className="font-light tracking-widest">Mobile:</p>
												<p> {data.contact} </p>
											</div>
											<div className="flex justify-between">
												<p className="font-light tracking-widest">Email:</p>
												<p> {data.email} </p>
											</div>
											<div className="flex justify-between">
												<p className="font-light tracking-widest">Company:</p>
												<p> {data.company} </p>
											</div>
											<div className="flex justify-between">
												<p className="font-light tracking-widest">Address:</p>
												<p> {data.address} </p>
											</div>
											<div className="flex justify-between">
												<p className="font-light tracking-widest">Role:</p>
												<p> {data.role} </p>
											</div>
										</li>
										<li className="w-full px-10 flex gap-8">
											<button
												className="w-full h-12 text-lg outline-none bg-stone-900  text-white rounded-md px-4 overflow-hidden"
												onClick={handlePrev}>
												Previous
											</button>
											<button className="w-full h-12 text-lg outline-none bg-stone-900  text-white rounded-md px-4 overflow-hidden">
												Submit
											</button>
										</li>
									</>
								);
						}
					})()}

				</ul>
					<div className="w-full px-6 text-center mt-4">
						<p>Need Help?</p>
					</div>
					<div className="w-full px-6 text-center ">
						<p className="font-light">
							Already have an account?
							<NavLink to="/login" className=" font-normal text-blue-600">
								{"  "}Log In
							</NavLink>
						</p>
					</div>
			</form>
		</>
	);
};

export default Registration;
