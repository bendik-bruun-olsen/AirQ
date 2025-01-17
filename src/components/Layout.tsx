import { Outlet } from "react-router-dom";
import PermanentDrawerLeft from "./PermanentDrawerLeft";

export default function Layout() {
	return (
		<>
			<PermanentDrawerLeft />
			<main>
				<Outlet />
			</main>
		</>
	);
}
