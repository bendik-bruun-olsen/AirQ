import { Outlet } from "react-router-dom";
import PermanentDrawerLeft from "./PermanentDrawerLeft";

export default function Layout() {
	return (
		<>
			<PermanentDrawerLeft />
			<main style={{ marginLeft: "var(--drawer-width)", paddingLeft: 20 }}>
				<Outlet />
			</main>
		</>
	);
}
