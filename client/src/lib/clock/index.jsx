import React, { Component, useEffect, useState } from "react";
import { IoIosClock } from "react-icons/io";

// FANCY CLOCK FACE //

export const DigitalClock = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		setInterval(() => {
			setTime(new Date());
		}, 1000);
	}, []);

	return (
		<div className="flex flex-col align-middle items-center justify-center  border-8 rounded-full min-w-[16rem] min-h-[16rem] h-full w-full ring-8 ring-inset border-gray-300 ring-yellow-600 bg-gray-600 text-gray-200">
			<p className="text-4xl mb-2">
				<IoIosClock />
			</p>
			<h1 className="text-4xl">{this.state.time.toLocaleTimeString()}</h1>
			<p className="mb-6 text-xl">{fullDate}</p>
		</div>
	);
};

// REGULAR SELF-UPDATING CLOCK //

export class TimeNow extends Component {
	constructor() {
		super();
		this.state = { time: new Date() };
	}

	currentTime() {
		this.setState({
			time: new Date(),
		});
	}
	componentWillMount() {
		setInterval(() => this.currentTime(), 1000);
	}

	render() {
		return (
			<>
				<h1>{this.state.time.toLocaleTimeString({ hour12: true })}</h1>
			</>
		);
	}
}

// ASSETS FOR TIME AND DATE VALUES //

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const days = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const currentDay = new Date().getDay();
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDate = new Date().getDate();

// FOR CURRENT TIME 12:12 AM FORMAT //
export const currentTime = new Date().toLocaleTimeString("en-US", {
	hour: "numeric",
	minute: "numeric",
	hour12: "true",
});

const monthString = months[currentMonth];
const dayString = days[currentDay];

// FOR DATE WITH DAY //

export const fullDate = `${dayString} ${
	currentDate < 10 ? `0${currentDate}` : `${currentDate}`
} ${monthString} ${currentYear}`;

// FOR DATE WITHOUT DAY //

export const date = `${
	currentDate < 10 ? `0${currentDate}` : `${currentDate}`
} ${monthString} ${currentYear}`;

// FOR THE TIME OF DAY //

const timeoftheday = ["Morning", "Afternoon", "Evening", "Night"];
const currentHour = new Date().getHours();
const currentMinute = new Date().getMinutes();
const currentSecond = new Date().getSeconds();

let setToD;
if (currentHour < 12) {
	setToD = timeoftheday[0];
} else if (currentHour < 17) {
	setToD = timeoftheday[1];
} else if (currentHour < 21) {
	setToD = timeoftheday[2];
} else if (currentHour < 4) {
	setToD = timeoftheday[3];
}

export const CurrentTimeofDay = setToD;

export const AnalogClock = () => {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		setInterval(() => {
			setTime(new Date());
		}, 1000);
	}, []);

	const second = time.getSeconds();
	const minute = time.getMinutes();
	const hour = time.getHours();
	let tab = { rotate: second * 6 + "deg", transformOrigin: " bottom" };
	let tab2 = {
		rotate: minute * 6 + second / 60 + "deg",
		transformOrigin: " bottom",
	};
	let tab3 = {
		rotate: hour * 6 * 5 + minute/2 + "deg",
		transformOrigin: " bottom",
	};

	return (
		<div className=" relative h-56 aspect-square flex justify-center bg-white rounded-full items-center">
			<span className="absolute text-center h-full w-8 top-0 z-50 rotate-[30deg] origin-center">
				|
			</span>
			<span className="absolute text-center h-full w-8 top-0 z-50 rotate-[60deg]">
				2
			</span>
			<span className="absolute text-center h-full w-8 top-0 z-50 rotate-[90deg]">
				|
			</span>
			<span className="absolute text-center h-full w-8 top-0 z-50 rotate-[120deg] ">
				<p className="rotate-180">4</p>
			</span>
			<span className="absolute text-center h-full w-8 top-0 z-50 rotate-[150deg]">
				<p className="rotate-180">|</p>
			</span>
			<span className="absolute text-center h-full w-8 top-0 z-50 rotate-[180deg]">
				<p className="rotate-180">6</p>
			</span>
			<span className="absolute text-center h-full w-8 top-0 z-50 rotate-[210deg]">
				<p className="rotate-180">|</p>
			</span>
			<span className="absolute text-center h-full w-8 top-0 z-50 rotate-[240deg]">
				<p className="rotate-180">8</p>
			</span>
			<span className="absolute text-center h-full w-8 top-0 z-50 rotate-[270deg]">
				|
			</span>
			<span className="absolute text-center h-full w-8 top-0 z-50 rotate-[300deg]">
				10
			</span>
			<span className="absolute text-center h-full w-8 top-0 z-50 rotate-[330deg]">
				|
			</span>
			<span className="absolute text-center h-full w-8 top-0 z-50 ">12</span>
			<div className="relative min-h-[12rem] h-48 aspect-square rounded-full ring-2 ring-white bg-white flex justify-center items-center ">
				<div className="absolute h-full w-0.5 bg-transparent  pt-4 ">
					<div style={tab} className="h-20 w-[50%] bg-red-500 shadow-md  ease-linear duration-75"></div>
				</div>
				<div className="absolute h-full w-0.5 bg-transparent pt-6 ">
					<div style={tab2} className="h-[4.5rem] w-full bg-gray-500 shadow-md"></div>
				</div>
				<div className="absolute h-full w-1 bg-transparent pt-14 ">
					<div style={tab3} className="h-10 w-full bg-gray-700 shadow-lg"></div>
				</div>
				<div className="absolute w-2 h-2 bg-white shadow-md rounded-full flex justify-center items-center ">
					<div className=" w-1 h-1 bg-gray-500  rounded-full flex justify-center items-center"></div>
				</div>
			</div>
		</div>
	);
};
