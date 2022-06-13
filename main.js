const decoded = document.getElementById("decoded");
const encoded = document.getElementById("encoded");
const inputDecode = document.getElementById("inputdecode");
const inputEncode = document.getElementById("inputencode");
const decode = document.getElementById("decode");
const encode = document.getElementById("encode");

decode.addEventListener("click", () => {
	decoded.innerHTML = decodeText(inputDecode.value);
});

encode.addEventListener("click", () => {
	encoded.innerHTML = encodeText(inputEncode.value);
});

function decodeText(text) {
	let decodedText = "";
	for (let i = 0; i < text.length; i++) {
		decodedText += String.fromCharCode(text.charCodeAt(i) - 1);
	}
	return decodedText;
}

function encodeText(text) {
	let encodedText = "";
	for (let i = 0; i < text.length; i++) {
		encodedText += String.fromCharCode(text.charCodeAt(i) + 1);
	}
	return encodedText;
}
