// const terminal = document.getElementById("terminal");
// const output = document.getElementById("output");
// const input = document.getElementById("input");

// /* COMMAND HISTORY */
// let commandHistory = [];
// let historyIndex = -1;

// /* MATRIX BACKGROUND */
// const canvas = document.getElementById("matrix");
// const ctx = canvas.getContext("2d");
// let letters = Array(256).fill(1);

// function resizeCanvas() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
// }
// window.addEventListener("resize", resizeCanvas);
// resizeCanvas();

// /* MATRIX DRAW */
// function matrix() {
//     ctx.fillStyle = "rgba(0,0,0,0.05)";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     const fontSize = window.innerWidth < 600 ? 12 : 16;
//     ctx.font = `${fontSize}px monospace`;
//     ctx.fillStyle = "#0F0";

//     letters.forEach((y, i) => {
//         const text = String.fromCharCode(33 + Math.random() * 94);
//         ctx.fillText(text, i * fontSize, y * fontSize);
//         letters[i] = (y * fontSize > canvas.height && Math.random() > 0.975) ? 0 : y + 1;
//     });
// }
// setInterval(matrix, 50);

// /* SCROLL TO BOTTOM */
// function scrollToBottom() {
//     terminal.scrollTop = terminal.scrollHeight;
// }

// /* TYPEWRITER TEXT */
// async function typeText(text, delay = 25) {
//     for (let i = 0; i < text.length; i++) {
//         output.innerHTML += text[i];
//         scrollToBottom();
//         await new Promise(r => setTimeout(r, delay));
//     }
// }

// /* GLITCH TYPER */
// async function typeGlitch(text, delay = 25) {
//     const line = document.createElement("div");
//     line.className = "glitch fade";
//     output.appendChild(line);

//     for (let i = 0; i < text.length; i++) {
//         line.textContent += text[i];
//         scrollToBottom();
//         await new Promise(r => setTimeout(r, delay));
//     }
//     line.classList.remove("glitch");
// }

// /* BOOT SEQUENCE */
// async function bootSequence() {
//     output.innerHTML = "";
//     await typeGlitch("Initializing secure modules...", 25);
//     await typeGlitch("Loading matrix engine...", 25);
//     await typeGlitch("Decrypting user environment...", 25);
//     await typeGlitch("System ready.", 25);
//     output.innerHTML += "\n\n";
// }
// bootSequence();

// /* COMMANDS */
// const commands = {
//     help: "Available commands: help, about, projects, clear, date, secret, reboot",
//     about: `
// ┌──────────────────────────────────────────────┐
// │            [ ACCESS GRANTED — PROFILE LOADED ]           
// └──────────────────────────────────────────────┘

// > user.info
// ──────────────────────────────────────────────
// • alias: Vishu / Emma / Qt
// • codename: V1$HU.exe
// • pronouns: she/her
// • age: 19
// • location: Bharat → Gujarat
// • alignment: Santani protocol active
// ──────────────────────────────────────────────

// > system.preferences
// ──────────────────────────────────────────────
// • favorite_book: ShivPuran.txt
// • ui_theme_color: Yellow #FFF200
// • spirit_animal: Cow.exe
// • soundtrack: <undefined> // user still choosing…
// • games_installed: Minecraft | FreeFire
// ──────────────────────────────────────────────

// > personality.matrix
// ──────────────────────────────────────────────
// • likes: TV, VideoGames, OutdoorMode, Food.exe,
//          SleepProtocol, GoodHumans
// • dislikes: NonVeg.wrn, BadWords.err, ToxicHumans.ban
// ──────────────────────────────────────────────

// > status: ONLINE  
// > firewall: STRONG  
// > vibe_mode: HACKER ✦ ACTIVE
// ──────────────────────────────────────────────
// [ END OF FILE ]
// `,
//     projects: "Projects:\n1. Terminal Portfolio\n2. AI Chatbot"
// };

// /* EXECUTE COMMAND */
// function executeCommand(cmd) {
//     output.innerHTML += `root@vilu:~$ ${cmd}\n`;
//     cmd = cmd.toLowerCase();

//     switch (cmd) {
//         case "help":
//         case "about":
//         case "projects":
//             typeText(commands[cmd]);
//             break;
//         case "date":
//             typeText(new Date().toString());
//             break;
//         case "clear":
//             output.innerHTML = "";
//             break;
//         case "secret":
//             typeText("ACCESS DENIED");
//             break;
//         case "reboot":
//             bootSequence();
//             break;
//         default:
//             typeText(`Unknown command: ${cmd}`);
//     }
//     scrollToBottom();
// }

// /* INPUT HANDLING */
// input.addEventListener("keydown", (e) => {
//     if (e.key === "Enter") {
//         const cmd = input.value.trim();
//         if (cmd !== "") {
//             commandHistory.push(cmd);
//             historyIndex = commandHistory.length;
//         }
//         executeCommand(cmd);
//         input.value = "";
//     }

//     if (e.key === "ArrowUp" && historyIndex > 0) {
//         historyIndex--;
//         input.value = commandHistory[historyIndex];
//     }

//     if (e.key === "ArrowDown") {
//         if (historyIndex < commandHistory.length - 1) {
//             historyIndex++;
//             input.value = commandHistory[historyIndex];
//         } else input.value = "";
//     }
// });

// /* MATRIX RAIN */
// const canvas = document.getElementById("matrix");
// const ctx = canvas.getContext("2d");

// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;

// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%^&*()-=+";
// const fontSize = 14;
// const columns = canvas.width / fontSize;

// let drops = [];
// for (let i = 0; i < columns; i++) drops[i] = 1;

// function drawMatrix() {
//     ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     ctx.fillStyle = "#00ff00";
//     ctx.font = fontSize + "px monospace";

//     for (let i = 0; i < drops.length; i++) {
//         const text = letters[Math.floor(Math.random() * letters.length)];
//         ctx.fillText(text, i * fontSize, drops[i] * fontSize);

//         if (drops[i] * fontSize > canvas.height && Math.random() > 0.95)
//             drops[i] = 0;

//         drops[i]++;
//     }
// }
// setInterval(drawMatrix, 35);

/* MATRIX RAIN */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%^&*()-=+";
const fontSize = 14;
const columns = canvas.width / fontSize;

let drops = [];
for (let i = 0; i < columns; i++) drops[i] = 1;

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff00";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95)
            drops[i] = 0;

        drops[i]++;
    }
}
setInterval(drawMatrix, 35);

/* TERMINAL LOGIC */
const output = document.getElementById("output");
const input = document.getElementById("commandInput");

function print(text) {
    output.innerHTML += text + "\n";
    window.scrollTo(0, document.body.scrollHeight);
}

print("Vishu-EXE Terminal Online.\nType 'help' for commands.\n");

input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        let cmd = input.value.trim();
        input.value = "";
        execute(cmd);
    }
});

/* COMMAND HANDLER */
function execute(cmd) {
    print(`vishu@exe:~$ ${cmd}`);

    switch (cmd.toLowerCase()) {

        case "help":
            print(
                "\nAvailable Commands:\n" +
                "---------------------------------------\n" +
                "help         → Show commands\n" +
                "about        → About Vishu\n" +
                "clear        → Clear screen\n" +
                "date         → Show time\n" +
                "secret       → Hidden message\n" +
                "scan         → Fake IP scan\n" +
                "game         → Hacker attack game\n" +
                "sysinfo      → System information\n" +
                "trace        → Trace route simulation\n" +
                "decrypt      → Fake file decryption\n" +
                "firewall     → Firewall analyzer\n" +
                "virus        → Fake virus upload\n" +
                "hackmode     → Activate hacker effect\n" +
                "shutdown     → Terminal shutdown\n"
            );
            break;

        case "about":
            print(
                `
┌──────────────────────────────────────────────┐
│      [ ACCESS GRANTED — PROFILE LOADED ]     │
└──────────────────────────────────────────────┘

> user.info
──────────────────────────────────────────────
• alias: Vishu / Emma / Qt
• codename: V1$HU.exe
• pronouns: she/her
• age: 19
• location: Bharat → Gujarat
• alignment: Santani protocol active
──────────────────────────────────────────────

> system.preferences
──────────────────────────────────────────────
• favorite_book: ShivPuran.txt
• ui_theme_color: Yellow #FFF200
• spirit_animal: Cow.exe
• soundtrack: <undefined>  // user still choosing…
• games_installed: Minecraft | FreeFire
──────────────────────────────────────────────

> personality.matrix
──────────────────────────────────────────────
• likes: TV, VideoGames, OutdoorMode, Food.exe,
         SleepProtocol, GoodHumans
• dislikes: NonVeg.wrn, BadWords.err, ToxicHumans.ban
──────────────────────────────────────────────

> status: ONLINE  
• firewall: STRONG  
• vibe_mode: HACKER ✦ ACTIVE
──────────────────────────────────────────────
[ END OF FILE ]
        `
            );
            break;

        case "date":
            print(new Date().toString());
            break;

        case "clear":
            output.innerHTML = "";
            break;

        case "secret":
            print("Decrypting...");
            setTimeout(() => print("✔ Secret Unlocked: Vishu is OP hacker 😎🔥"), 1500);
            break;

        case "scan":
            fakeScan();
            break;

        case "game":
            hackerGame();
            break;

        case "sysinfo":
            print(
                "System: Vishu-EXE OS v3.0\nCPU: Quantum Core X\nRAM: 64GB\nSecurity: MAX\n"
            );
            break;

        case "trace":
            traceRoute();
            break;

        case "decrypt":
            decryptFile();
            break;

        case "firewall":
            firewallCheck();
            break;

        case "virus":
            uploadVirus();
            break;

        case "hackmode":
            print(">>> HACKER MODE ACTIVATED <<<");
            document.body.style.filter = "contrast(140%) brightness(140%)";
            break;

        case "shutdown":
            shutdownTerminal();
            break;

        default:
            print("Unknown command. Type 'help'.");
    }
}

/* ADVANCED COMMAND FUNCTIONS */

function fakeScan() {
    print("Starting IP scan...\n");
    const ip =
        Math.floor(Math.random() * 255) + "." +
        Math.floor(Math.random() * 255) + "." +
        Math.floor(Math.random() * 255) + "." +
        Math.floor(Math.random() * 255);

    let dots = 0;
    const timer = setInterval(() => {
        dots = (dots + 1) % 4;
        print("Scanning" + ".".repeat(dots));
    }, 300);

    setTimeout(() => {
        clearInterval(timer);
        print("\nTarget IP: " + ip);
        print("Status: Vulnerable\n");
    }, 2000);
}

function hackerGame() {
    print("\nInitiating cyber attack...\n");
    const steps = [
        "Bypassing firewall...",
        "Injecting payload...",
        "Cracking encryption...",
        "Extracting data packets...",
        "Uploading rootkit..."
    ];

    let i = 0;
    const interval = setInterval(() => {
        print(steps[i]);
        i++;
        if (i === steps.length) {
            clearInterval(interval);

            if (Math.random() > 0.4) {
                print("\n✔ ATTACK SUCCESSFUL – SYSTEM BREACHED!\n");
            } else {
                print("\n❌ ATTACK FAILED – FIREWALL BLOCKED!\n");
            }
        }
    }, 1200);
}

function traceRoute() {
    let hop = 1;
    const max = 8;
    const interval = setInterval(() => {
        const ip = `${rand()} . ${rand()} . ${rand()} . ${rand()}`;
        print(`Hop ${hop}: ${ip} – OK`);
        hop++;
        if (hop > max) clearInterval(interval);
    }, 600);

    function rand() {
        return Math.floor(Math.random() * 255);
    }
}

function decryptFile() {
    print("\nDecrypting file.txt...\n");
    let percent = 0;
    const interval = setInterval(() => {
        percent += 5;
        print(`Progress: ${percent}%`);
        if (percent >= 100) {
            clearInterval(interval);
            print("\n✔ FILE DECRYPTED SUCCESSFULLY\n");
        }
    }, 150);
}

function firewallCheck() {
    print("\nAnalyzing firewall...\n");
    setTimeout(() => print("Firewall Strength: WEAK"), 1000);
    setTimeout(() => print("Exploit Found: OPEN_PORT_9052"), 2000);
    setTimeout(() => print("System Bypass Possible\n"), 3000);
}

function uploadVirus() {
    print("\nUploading virus.exe...\n");
    let percent = 0;
    const interval = setInterval(() => {
        percent += 10;
        print(`Upload: ${percent}%`);
        if (percent >= 100) {
            clearInterval(interval);
            print("\n⚠ VIRUS UPLOADED SUCCESSFULLY ⚠\n(Target is infected!)\n");
        }
    }, 200);
}

function shutdownTerminal() {
    print("\nShutting down system...");
    setTimeout(() => {
        output.innerHTML = "";
        print("System rebooted. Type 'help'.");
    }, 2500);
}