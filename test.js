import clipboardy from 'clipboardy';

const args = process.argv.slice(2);
const replaceBrTag = args.includes('-b');

clipboardy.read().then((inputString) => {

    let modifiedString;
    
    if (replaceBrTag) {
        modifiedString = inputString.replace(/<br \/>/g, '<br/><br/>');
    } else {
        modifiedString = inputString.replace(/\n/g, '<br/><br/>');
    }

    clipboardy.writeSync(modifiedString);

    console.log("Modified string copied to clipboard");
}).catch((err) => {
    console.error("Error reading from clipboard:", err);
});