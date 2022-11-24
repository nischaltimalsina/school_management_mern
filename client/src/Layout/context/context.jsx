import React, {
	createContext,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext({});

export default function LayoutProvider({ children }) {
	const [open, setOpen] = useState(false);
	const ref = useRef(null);
	const history = useNavigate();

	const toggle = useCallback(() => {
		setOpen((prevState) => !prevState);
	}, []);

	// set the html tag style overflow to hidden
	useEffect(() => {
		document.documentElement.style.overflow = "hidden";
	}, []);

	// close side navigation when you click on a sidenav item. it's triggered when viewport is less than 1024px
	useEffect(() => {
		return history(() => {
			if (open && window.innerWidth < 1024) {
				setOpen(false);
			}
		});
	}, [history, open]);

	// close side navigation on click outside when viewport is less than 1024px
	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (window.innerWidth < 1024) {
				if (!ref.current?.contains(event.target)) {
					if (!open) return;
					setOpen(false);
				}
			}
		};
		window.addEventListener("click", handleOutsideClick);
		return () => window.removeEventListener("click", handleOutsideClick);
	}, [open, ref]);

	return (
		<Context.Provider value={{ open, ref, toggle }}>
			{children}
		</Context.Provider>
	);
}
