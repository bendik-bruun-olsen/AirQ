import PermanentDrawerLeft from "./components/PermanentDrawerLeft";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import MapPage from "./pages/MapPage/MapPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import { ContextProvider } from "./context/ContextProvider";

export default function App() {
	return (
		<ContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<PermanentDrawerLeft />}>
						<Route index path="dashboard" element={<DashboardPage />} />
						<Route path="map" element={<MapPage />} />
						<Route path="about" element={<AboutPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ContextProvider>
	);
}
