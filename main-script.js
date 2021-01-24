function firstPart () {
    const sentenceOptions = ['Next week', 'Tomorrow morning', 'In the upcoming days'];
    return sentenceOptions[Math.floor(Math.random() * 3 )];
}

function secondPart () {
    const sentenceOptions = ['you will meet', 'you closest friend will eat', 'your mom will find'];
    return sentenceOptions[Math.floor(Math.random() * 3)];
}

function thirdPart () {
    const sentenceOptions = ['your biggest fear', 'your first love', 'your secret stash'];
    return sentenceOptions[Math.floor(Math.random() * 3)];
}
