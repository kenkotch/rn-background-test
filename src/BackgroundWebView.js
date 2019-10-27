import React, { Component } from 'react'
import { WebView } from 'react-native-webview';
export default class BackgroundWebView extends Component {
	componentDidMount() {
		const { code } = this.props;
		setTimeout(() => {
			this.runJSInBackground(code)
		}, 1000);
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