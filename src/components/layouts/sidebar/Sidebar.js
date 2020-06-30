import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { RocketTwoTone, UserOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';
const { Sider } = Layout;
const { SubMenu } = Menu;

function Sidebar() {
	const [ collapsed, setCollapsed ] = useState(false);

	const onCollapse = (collapsed) => {
		setCollapsed(collapsed);
	};

	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
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
						<Menu.Item key="1">Customers</Menu.Item>
						<Menu.Item key="2">Students</Menu.Item>
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
						<Menu.Item key="3">Add Blog</Menu.Item>
						<Menu.Item key="4">Blog List</Menu.Item>
					</SubMenu>
				</Menu>
			</Sider>
		</Layout>
	);
}

export default Sidebar;
