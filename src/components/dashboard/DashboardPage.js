import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { RocketTwoTone, UserOutlined, BookOutlined, RobotOutlined } from '@ant-design/icons';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import ContactList from '../contact/ContactList';
import Test1 from './Test1';
import BlogList from '../blog/BlogList';
import BlogPage from '../blog/BlogPage';
import CoursePage from '../services/courses/CoursePage';
import CourseList1 from '../services/courses/CourseList1';

const { Sider, Content } = Layout;
const { SubMenu } = Menu;

const DashboardPage = () => {
	const [ collapsed, setCollapsed ] = useState(false);

	const onCollapse = (collapsed) => {
		setCollapsed(collapsed);
	};

	const { url } = useRouteMatch();

	const routes = [
		{
			path: `${url}/customers`,
			component: () => <ContactList />
		},
		{
			path: `${url}/students`,
			component: () => <Test1 />
		},
		{
			path: `${url}/createblog`,
			component: () => <BlogPage />
		},
		{
			path: `${url}/bloglist`,
			component: () => <BlogList />
		},
		{
			path: `${url}/addcourse`,
			component: () => <CoursePage />
		},
		{
			path: `${url}/courselist`,
			component: () => <CourseList1 />
		}
	];

	return (
		<div>
			<Layout>
				<Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ height: '100vh' }}>
					<Menu theme="dark" defaultSelectedKeys={[ '1' ]} mode="inline">
						<SubMenu
							key="sub1"
							title={
								<span>
									<UserOutlined />
									<span>User</span>
								</span>
							}
						>
							<Menu.Item key="1">
								<NavLink to={`${url}/customers`} activeClassName="selected">
									Customers
								</NavLink>
							</Menu.Item>
							<Menu.Item key="2">
								<NavLink to={`${url}/students`} activeClassName="selected">
									Students
								</NavLink>
							</Menu.Item>
						</SubMenu>
						<SubMenu
							key="sub2"
							title={
								<span>
									<RocketTwoTone />
									<span>Blog</span>
								</span>
							}
						>
							<Menu.Item key="4">
								<NavLink to={`${url}/createblog`} activeClassName="selected">
									Add Blog
								</NavLink>
							</Menu.Item>
							<Menu.Item key="5">
								<NavLink to={`${url}/bloglist`} activeClassName="selected">
									Blog List
								</NavLink>
							</Menu.Item>
						</SubMenu>
						<SubMenu
							key="sub3"
							title={
								<span>
									<RobotOutlined />
									<span>Course</span>
								</span>
							}
						>
							<Menu.Item key="4">
								<NavLink to={`${url}/addcourse`} activeClassName="selected">
									Add Course
								</NavLink>
							</Menu.Item>
							<Menu.Item key="5">
								<NavLink to={`${url}/courselist`} activeClassName="selected">
									Course List
								</NavLink>
							</Menu.Item>
						</SubMenu>
					</Menu>
				</Sider>
				<Content style={{ margin: '0 16px' }}>
					<Switch>
						{routes.map((route, index) => (
							<Route key={index} path={route.path} children={route.component} />
						))}
					</Switch>
				</Content>
			</Layout>
		</div>
	);
};

export default DashboardPage;
