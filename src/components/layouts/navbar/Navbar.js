import React from 'react';
import { Layout, Menu } from 'antd';
import { DashboardOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../actions/auth';
const { Header } = Layout;
const { SubMenu } = Menu;

function Navbar() {
	const isAuthenticated = useSelector((state) => !!state.user.token);

	const dispatch = useDispatch();
	return (
		<div>
			<Layout>
				<Header>
					<Menu
						theme="dark"
						mode="horizontal"
						style={{
							lineHeight: '64px',
							float: 'right',
							fontSize: '1.1em',
							fontWeight: 'bold',
							textTransform: 'uppercase',
							color: 'white'
						}}
					>
						<Menu.Item key="1">
							<NavLink
								exact
								to="/"
								activeStyle={{
									fontWeight: 'bold',
									color: 'white'
								}}
							>
								Home
							</NavLink>
						</Menu.Item>

						<SubMenu title="Services" key="sub1">
							<Menu.ItemGroup>
								<Menu.Item key="2">
									<NavLink
										to="/courses"
										activeStyle={{
											fontWeight: 'bold',
											color: 'white'
										}}
									>
										COURSES
									</NavLink>
								</Menu.Item>
								<Menu.Item key="3">
									<NavLink
										to="/software-development"
										activeStyle={{
											fontWeight: 'bold',
											color: 'white'
										}}
									>
										SOFTWARE DEVELOPMENT
									</NavLink>
								</Menu.Item>
							</Menu.ItemGroup>
						</SubMenu>
						<Menu.Item key="4">
							<NavLink
								to="/blogs"
								activeStyle={{
									fontWeight: 'bold',
									color: 'white'
								}}
							>
								Blog
							</NavLink>
						</Menu.Item>
						<Menu.Item key="5">
							<NavLink
								to="/contact"
								activeStyle={{
									fontWeight: 'bold',
									color: 'white'
								}}
							>
								Contact
							</NavLink>
						</Menu.Item>
						<Menu.Item key="6">
							{isAuthenticated ? (
								<NavLink
									to="/login"
									activeStyle={{
										fontWeight: 'bold',
										color: 'white'
									}}
									onClick={() => dispatch(logout())}
								>
									Logout
								</NavLink>
							) : (
								<NavLink
									to="/login"
									activeStyle={{
										fontWeight: 'bold',
										color: 'white'
									}}
								>
									Login
								</NavLink>
							)}
						</Menu.Item>
						<Menu.Item key="7">
							{!isAuthenticated ? (
								<NavLink
									to="/signup"
									activeStyle={{
										fontWeight: 'bold',
										color: 'white'
									}}
								>
									Signup
								</NavLink>
							) : null}
						</Menu.Item>
						<Menu.Item key="8">
							{isAuthenticated ? (
								<NavLink
									to="/dashboard"
									activeStyle={{
										fontWeight: 'bold',
										color: 'white'
									}}
								>
									<DashboardOutlined />
								</NavLink>
							) : null}
						</Menu.Item>
					</Menu>
				</Header>
			</Layout>
		</div>
	);
}

export default Navbar;
