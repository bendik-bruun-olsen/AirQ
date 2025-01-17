import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import MapPage from "./pages/MapPage/MapPage";
import InfoPage from "./pages/InfoPage/InfoPage";
import { ContextProvider } from "./context/ContextProvider";
import Layout from "./components/Layout";

export default function App() {
	return (
		<ContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Navigate to="/dashboard" replace />} />
						<Route path="dashboard" element={<DashboardPage />} />
						<Route path="map" element={<MapPage />} />
						<Route path="info" element={<InfoPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ContextProvider>
	);
}
