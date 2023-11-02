import React, { useState } from "react";
import {
	Sidebar,
	Menu,
	MenuItem,
	SubMenu,
	menuClasses,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme, Badge } from "@mui/material";
import { Link, Navigate, useNavigate } from "react-router-dom";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import TableViewIcon from "@mui/icons-material/TableView";
const SideBar = () => {
	const [isCollapsed, setisCollapsed] = useState(false);
	const [toggled, setToggled] = useState(false);
	const [broken, setBroken] = useState(false);

	const [select, setSelect] = useState(true);

	const [path, setPath] = useState(""); //window.location.pathname

	const navigate = useNavigate();

	return (
		<div
			style={{
				display: "flex",
				height: "100%",
			}}
		>
			<Sidebar
				collapsed={isCollapsed}
				toggled={toggled}
				onBackdropClick={() => setToggled(false)}
				onBreakPoint={setBroken}
				breakPoint="md"
				style={{ height: "100%" }}
			>
				<div
					style={{ display: "flex", flexDirection: "column", height: "100%" }}
				>
					<div style={{ flex: 1, marginBottom: "32px" }}>
						<Menu iconShape="square">
							{/* LOGO */}
							<MenuItem
								onClick={() => setisCollapsed(!isCollapsed)}
								icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
								style={{
									margin: "10px 0 20px 0",
								}}
							>
								{!isCollapsed && (
									<Box
										display="flex"
										justifyContent="space-between"
										alignItems="center"
										ml="15px"
									>
										<IconButton onClick={() => setisCollapsed(!isCollapsed)}>
											<MenuOutlinedIcon />
										</IconButton>
									</Box>
								)}
							</MenuItem>

							<MenuItem
								className="menu-bars"
								onClick={() => {
									navigate("/dashboard", { replace: true });
								}}
								rootStyles={{
									["." + menuClasses.button]: {
										backgroundColor:
											window.location.pathname === "/dashboard" ? "#13e3" : "",
									},
								}}
								icon={<HomeOutlinedIcon c />}
							>
								Dashboard
							</MenuItem>

							<SubMenu
								rootStyles={{
									["." + menuClasses.button]: {
										backgroundColor:
											window.location.pathname === "/admin/" ? "#13e3" : "",
									},
								}}
								icon={<MapOutlinedIcon />}
								label="Data"
							>
								<MenuItem
									rootStyles={{
										["." + menuClasses.button]: {
											backgroundColor:
												window.location.pathname === "/data/viewtable"
													? "#13e3"
													: "",
										},
									}}
									onClick={() => {
										navigate("/data/viewtable", { replace: true });
									}}
									icon={<TableViewIcon />}
								>
									{" "}
									Table
								</MenuItem>
								<MenuItem
									rootStyles={{
										["." + menuClasses.button]: {
											backgroundColor:
												window.location.pathname === "/data/line"
													? "#13e3"
													: "",
										},
									}}
									onClick={() => {
										navigate("/data/line", { replace: true });
									}}
									icon={<BarChartOutlinedIcon />}
								>
									{" "}
									Line charts
								</MenuItem>
							</SubMenu>

							<SubMenu label="Manage" icon={<PeopleOutlinedIcon />}>
								<Link to={"/admin/manage"} className="menu-bars">
									<MenuItem>User</MenuItem>
								</Link>
								<MenuItem> Admin</MenuItem>
							</SubMenu>
						</Menu>

						<div
							style={{
								padding: "0 24px",
								marginBottom: "8px",
								marginTop: "32px",
							}}
						>
							<Typography
								variant="body2"
								fontWeight={600}
								style={{
									opacity: isCollapsed ? 0 : 0.5,
									letterSpacing: "0.5px",
								}}
							>
								Extra
							</Typography>
						</div>

						<Menu>
							<MenuItem
								onClick={() => {
									navigate("/calendar", { replace: true });
								}}
								rootStyles={{
									["." + menuClasses.button]: {
										backgroundColor:
											window.location.pathname === "/calendar" ? "#13e3" : "",
									},
								}}
								icon={<CalendarTodayOutlinedIcon c />}
							>
								Calendar
							</MenuItem>
							<MenuItem icon={<ReceiptOutlinedIcon />}>Documentation</MenuItem>
						</Menu>
						<button onClick={() => setSelect(!select)}>Selected</button>
					</div>
				</div>
			</Sidebar>
		</div>
	);
};
export default SideBar;
