import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import DashboardPage from './components/dashboard/DashboardPage';
import Navbar from './components/layouts/navbar/Navbar';
import ContactPage from './components/contact/ContactPage';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import BlogList from './components/blog/BlogList';
import Blog from './components/blog/Blog';
import Greetings from './components/contact/Greetings';
import CourseList from './components/services/courses/CourseList';
import Course from './components/services/courses/Course';
import ReactReduxCourse from './components/services/courses/ReactReduxCourse';
import FileUpload from './components/upload/FileUpload';

import SoftwareDev from './components/services/softwareDev/SoftwareDev';
function App() {
	return (
		<Fragment>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Home} />
				<GuestRoute path="/signup" component={SignupPage} />
				<Route path="/contact" component={ContactPage} />
				<Route path="/blogs" component={BlogList} />
				<Route path="/blog/:blogId" component={Blog} />
				<Route path="/courses" component={CourseList} />
				<Route path="/course/:Id" component={Course} />
				<GuestRoute path="/login" component={LoginPage} />
				<UserRoute path="/dashboard" component={DashboardPage} />
				<Route path="/greetings" component={Greetings} />
				<Route path="/software-development" component={SoftwareDev} />
				<Route path="/upload" component={FileUpload} />
			</Switch>
		</Fragment>
	);
}

export default App;
