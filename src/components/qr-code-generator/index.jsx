import { useState } from "react";
import QRCode from "react-qr-code";
import "./style.css";

export default function QRCodeGenerator() {
	const [qrCode, setQrCode] = useState("");
	const [input, setInput] = useState("");

	function handleGenerateQrCode() {
		setQrCode(input);
        setInput('');
	}

	return (
		<div className="qrCode-container">
			<h1>Qr Code Generator</h1>
			<div className="input-box">
				<input 
					onChange={(e) => setInput(e.target.value)}
					type="text"
					name="qr-code"
                    value={input}
					placeholder="Enter your vaklue here"
				/>
				<button 
                disabled={input && input.trim() !== '' ? false : true}
                onClick={handleGenerateQrCode}>Generate</button>
			</div>
            <div className="qrCode-Box">
			<QRCode id="qr-code-value " value={qrCode} size={400} bgColor="#fff" />
            </div>
		</div>
	);
}
