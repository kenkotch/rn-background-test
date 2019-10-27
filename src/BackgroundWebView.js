import React, { Component } from 'react'
import { WebView } from 'react-native-webview';
export default class BackgroundWebView extends Component {
	componentDidMount() {
		console.info('bg mounted >>>');
		const { code } = this.props;
		setTimeout(() => {
			this.runJSInBackground(code)
		}, 1000);
	}

	componentWillUnmount() {
		console.info('bg unmounted >>>');
	}
   
	render() {
		return (
			<WebView
				javaScriptEnabled
				ref={ (ref) => this.webView = ref }
				source={ { html: '<html><body></body></html>' } }
			/>
		)
	}
	runJSInBackground = (code) => {
		this.webView.injectJavaScript(code());
	}
}