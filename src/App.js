import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './Components/UserList';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import { GlobalStyle } from './styles/global';

const App = () => {
	return (
		<>
			<Router basename='/infinite-scroll'>
				<Switch>
					<Route path='/' exact component={Login} />
					<PrivateRoute path='/home' exact component={UserList} />
				</Switch>
			</Router>
			<GlobalStyle />
		</>
	);
};
export default App;
