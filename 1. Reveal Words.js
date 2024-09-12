function revealWords(words, text) {
    words = words.split(`, `);
    let symbol = "*";
    
    for (let word of words) {
        let stars = symbol.repeat(word.length); 
        if (text.includes(stars)) {
            text = text.replace(stars, word); 
        }
    }

    console.log(text);
}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');
