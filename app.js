// Website Helper Functions
function updateWebsiteTitle(newTitle) {
    document.title = newTitle;
    console.log("Website title updated to:", newTitle);
}

function showWebsiteMessage(message) {
    console.log("Website Message:", message);
    alert("Welcome to the website! " + message);
}

function replaceWebsiteText(oldText, newText) {
    document.body.innerHTML = document.body.innerHTML.replace(new RegExp(oldText, "g"), newText);
    console.log(`Replaced all occurrences of "${oldText}" with "${newText}"`);
}

// Initialize Website
console.log("Initializing website...");
updateWebsiteTitle("Welcome to My Website");
showWebsiteMessage("This website is simple and easy to use!");

// Example Usage of Search & Replace
setTimeout(() => {
    replaceWebsiteText("website", "webpage");
}, 3000);
