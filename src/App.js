import React from 'react';
import {
	FlatList,
	Text,
	View
} from 'react-native';
import BackgroundWebView from './BackgroundWebView';

class App extends React.PureComponent {
	state = {
		runCode: true
	}

	code = () => {
		for (let i = 0; i < 999999999; i++) {
			if (i % 100000 === 0) {
				console.log(i, Math.random() * 9999 / 7)
			}
		}
		setTimeout(() => {
			this.setState({ runCode: false })
		}, 0);
	}
	render() {
		const { runCode } = this.state;
		return (
			<View style={{ marginLeft: 15, marginBottom: 50 }}>
				{ runCode &&
					<BackgroundWebView
						code={ this.code }
					/>
				}
				<Text style={{ marginTop: 25 }}>Hello World</Text>
				<FlatList
					data={ [...Array(230).keys()] }
					keyExtractor={ (item, index) => index.toString() }
					renderItem={ (item) => <Text>{ item.item }</Text> }
				/>
			</View>
		)
	}
}

export default App;