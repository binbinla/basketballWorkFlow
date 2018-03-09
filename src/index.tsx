import * as React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './container/entrance/App';  // app的入口

const store = configureStore();

export default class Root extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
	}
	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		)
	}
}