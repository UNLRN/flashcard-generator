function ClozeCard(text, cloze) {
    this.cloze = cloze;
    if (text === text.replace(cloze, "..."))
        {
            console.log(`${cloze} is not in ${text}`);
        }
    this.partial = text.replace(cloze, "...");
    this.fullText = text;
}

module.exports.ClozeCard = ClozeCard;