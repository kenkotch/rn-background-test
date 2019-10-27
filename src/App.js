import React from 'react';
import {
	FlatList,
	Text,
	View
} from 'react-native';
import BackgroundWebView from './BackgroundWebView';

class App extends React.PureComponent {
	code = () => {
		for (let i = 0;; i++) {
			if (i % 100000 === 0) {
				console.log(Math.random() * 9999 / 7)
			}
			if (i === 1000001) { i = 0 }
		}
	}
	render() {
		return (
			<View style={{ marginLeft: 15, marginBottom: 50 }}>
				<Text style={{ marginTop: 25 }}>Hello World</Text>
				<FlatList
					data={ [...Array(230).keys()] }
					keyExtractor={ (item, index) => index.toString() }
					renderItem={ (item) => <Text>{ item.item }</Text> }
				/>
				<BackgroundWebView
					code={ this.code }
				/>
			</View>
		)
	}
}

export default App;