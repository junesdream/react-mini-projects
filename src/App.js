import "./App.css";
import Accordian from "./components/accordion";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";

function App() {
	return (
		<div className="App">
			{/* Accordian component */}
			<Accordian />
			{/* QR Code Generator component */}
			<QRCodeGenerator />
			{/* light and dark theme switch*/}
      		<LightDarkMode />
			{/* load more product component*/}
      		<LoadMoreData />
		</div>
	);
}

export default App;
