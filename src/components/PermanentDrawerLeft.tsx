import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MapIcon from "@mui/icons-material/Map";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import Logo from "./Logo/Logo";

export default function PermanentDrawerLeft() {
	const menuItems = [
		{
			name: "Dashboard",
			icon: <DashboardIcon />,
			link: "/dashboard",
		},
		{
			name: "Map",
			icon: <MapIcon />,
			link: "/map",
		},
		{
			name: "Info",
			icon: <InfoIcon />,
			link: "/info",
		},
	];

	return (
		<Box sx={{ display: "flex" }}>
			<Drawer
				sx={{
					width: "var(--drawer-width)",
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: "var(--drawer-width)",
						boxSizing: "border-box",
						backgroundColor: "var(--slate-blue)",
						"& .MuiListItem-root": {
							"&:hover": {
								backgroundColor: "var(--slate-blue-light)",
							},
						},
					},
				}}
				variant="permanent"
				anchor="left"
			>
				<Logo />
				<Divider />
				<List>
					{menuItems.map((item) => (
						<ListItem key={item.name} sx={{ color: "var(--white)" }}>
							<ListItemButton component={Link} to={item.link}>
								<ListItemIcon sx={{ color: "var(--white)" }}>
									{item.icon}
								</ListItemIcon>
								<ListItemText primary={item.name} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	);
}
