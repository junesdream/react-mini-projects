import "./App.css";
import Accordian from "./components/accordion";
import LightDarkMode from "./components/light-dark-mode";
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
		</div>
	);
}

export default App;
