// Object with all strings

const allPhrases = {
    string1: ['I ate', 'I ran with', 'I killed', 'I licked', 'I hugged', 'I kissed', 'I slept with', 'I slapped', 'I married', 'I cooked', 'I stabbed', 'I kicked'],
    string2: ['my lover', 'a dog', 'the queen', 'a zombie', 'an alien', 'my mom', 'my teacher', 'an egg', 'a sheep', 'a television', 'my best fiend', 'a ghost', 'my cat', 'Santa Claus', 'my school bag', 'my crush', 'a bear', 'a toothbrush', 'a unicorn', 'a cup of tea', 'my phone', 'my brother', 'a gun', ' my nose', 'a breakfast', 'the king', 'a milk', 'a book', 'a sword', '10,000 dollars', 'a chicken'],
    string3: ["because I'm sexy", "for good luck", "for god's sake", "while watching TV", "at my friend's house", "because I can", "while eating lunch", "because I hate that", "and I'm proud of it", "because it's my hobby", "covered with chocolate", "because I'm horny", "inside a car", "and I liked it", "covered with honey", "when my friend died", "and it was amazing", "to kill time", "because my brain is small", "because I'm awsome"]
};

const selectString1 = () => {
    return Math.floor(Math.random() * allPhrases.string1.length);
}

const selectString2 = () => {
    return Math.floor(Math.random() * allPhrases.string2.length);
}

const selectString3 = () => {
    return Math.floor(Math.random() * allPhrases.string3.length);
}