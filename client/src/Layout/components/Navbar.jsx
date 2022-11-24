const Navbar = ({toggle}) => {
	return (
		<div className="fixed h-16 w-full flex items-center px-6 bg-gray-150 isolate ">
			<button onClick={toggle}>X</button>
		</div>
	);
};

export default Navbar;
