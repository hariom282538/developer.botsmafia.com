var botsmafiaControl = new Terminal('twelve columns', 'terminal');

// set styling to nothing because it's
// handled by matrix.css and matrix.js
botsmafiaControl.setWidth("");
botsmafiaControl.setHeight("");
botsmafiaControl.setTextColor("");
botsmafiaControl.setBackgroundColor("");

// append it to body
var terminalParent = document.getElementById('terminal-parent');
terminalParent.appendChild(botsmafiaControl.html);

// global inputHandler for prompts
var inputHandler = function (ans) {
    console.log(ans);
    switch (ans.toLowerCase()) {
        case 'help':
            botsmafiaControl.print("Commands available:");
            botsmafiaControl.print("  captain");
            botsmafiaControl.print("  botsmafia");
            botsmafiaControl.print("  navigate");
            botsmafiaControl.printHTML("<br />");
            break;

        case 'ls':
            botsmafiaControl.print("ox.txt");
            botsmafiaControl.print("secret.png");
            break;

        case 'captain':
            botsmafiaControl.printHTML("The capt'n of the ship is <strong style=\"color:white;\"><em>Hariom Vashisth</em></strong>");
            botsmafiaControl.print("Full Stack developer with a rising interest for DevOps and security.");
            botsmafiaControl.printHTML("Find out more about this at <a href=about style=\"color:white;\">developer.botsmafia.com/about</a>");
            botsmafiaControl.printHTML("<br />");
            break;

        case 'botsmafia':
            botsmafiaControl.print("This is 'botsmafia', A network of autobots.");
            botsmafiaControl.print("One Stop Search Engine -- Coming soon.");
            botsmafiaControl.printHTML("<br />");c
            break;

        case 'navigate':
            var getAnchor = function (href, text){
                return '<a target=_blank style="color:inherit" href='+ href +'>'+ text + '</a>';
            }
            botsmafiaControl.printHTML(getAnchor('about', 'developer.botsmafia.com/about'));
            botsmafiaControl.printHTML(getAnchor('projects', 'developer.botsmafia.com/projects'));
            botsmafiaControl.printHTML(getAnchor('stories', 'https://medium.com/@hariomvashisth') + '-- Coming soon');
            botsmafiaControl.printHTML(getAnchor('git', 'https://github.com/hariom282538/developer.botsmafia.com') + ' -- Coming soon.');
            break;

        case 'clear':
            botsmafiaControl.clear();
            break;

        default:
            botsmafiaControl.print("Type 'help' for usage of @botsmafia terminal. PS: This is not a distress signal.");
    }
    botsmafiaControl.input("", inputHandler);
}

// Main logic
botsmafiaControl.print("Connecting...");
botsmafiaControl.print("Logged in @botsmafia.");
botsmafiaControl.input("Welcome aboard. Type `help` to recieve help.", inputHandler);
