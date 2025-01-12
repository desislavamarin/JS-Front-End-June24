function solve (input, word) {
    const pattern = new RegExp(`\\b${word}\\b`, 'g');
    const result = input.match(pattern) || [];
    
    console.log(result.length);
}