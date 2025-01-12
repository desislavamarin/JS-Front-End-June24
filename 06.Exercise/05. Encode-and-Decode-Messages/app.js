function encodeAndDecodeMessages() {
    const [encodeBtnEl, decodeBtnEl] = document.querySelectorAll('div button');
    const [encodeTextareaEl, decodeTextareaEl] = document.querySelectorAll('div textarea');

    function encodeOrDecodeMessage(text, asciiDiff) {
        return text.split('').map((char) => {
            const currentAsciiValue = char.charCodeAt(0);
            return String.fromCharCode(currentAsciiValue + asciiDiff);
        }).join('');
    }

    function encodeMessageHandler() {
        decodeTextareaEl.value = encodeOrDecodeMessage(encodeTextareaEl.value, 1);
        encodeTextareaEl.value = '';
    }

    function decodeMessageHandler() {
        decodeTextareaEl.value = encodeOrDecodeMessage(decodeTextareaEl.value, -1);
    }

    encodeBtnEl.addEventListener('click', encodeMessageHandler);
    decodeBtnEl.addEventListener('click', decodeMessageHandler);
}