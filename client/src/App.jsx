import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import Onbaording from "./Pages/Authentication/Onbaording";
import Registration from "./Pages/Authentication/Registration";
import Dashboard from "./Pages/Dashboard";
import Homepage from "./Pages/Landing/Homepage";
import Main from "./Layout/Main/Main";
import NotFound from "./Pages/NotFound";
import LayoutProvider from "./Layout/context/context";

function App() {
	return (
		<LayoutProvider>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route element={<Onbaording />}>
					<Route path="/register" element={<Registration />} />
					<Route path="/login" element={<Login />} />
				</Route>
				<Route element={<Main />}>
					<Route path="/home" element={<NotFound />} />
					<Route path="/dashboard" element={<Dashboard />} />
				</Route>
			</Routes>
		</LayoutProvider>
	);
}

export default App;
