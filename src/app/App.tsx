import { Outlet } from "react-router-dom";
import { Sidebar } from "widget/sidebar";

export function App() {
	return (
		<>
			<Sidebar />
			<Outlet />
		</>
	);
}
