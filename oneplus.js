const socket = require("socket.io-client")("wss://socket-unlock.oneplus.com", {
    transports: ['websocket'],
    upgrade: false
});

console.log("Connecting");

socket.on('connect', async () => {
    // Authenticate user on socket
    socket.emit('authenticate user',
        {
            count: '0',
            username: "anandamritraj",
            token: "YOUR_TOKEN",
            squad: "",
            locale: "en-gb",
            csrf: "YOUR_CSRF_TOKEN"

        },
        (error, data) => {
            if (error) {
                console.log(
                    'Could not authenticate user on socket connection. Error was:',
                    error,
                    data
                );
            }
            else {
                console.log("Authenticated!");
                run();
            }

        }
    );
});

emmited = 0;
/**
 * Run an infinte JS Loop
 */
async function run() {
    while (true) {
        await sleep(RandomBetween(20, 100));
        EmitTap();
        emmited += 1;
        if (emmited % 100 === 0) {
            console.log("emited: " + emmited);
        }
    }
}

/**
 * 
 * @param {time} ms 
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Emit a tap using socket.io
 */
function EmitTap() {
    socket.emit(
        'tap_logs',
        {
            username: "anandamritraj",
            timestamp: Date.now(),
            touchX: RandomBetween(30, 970),
            touchY: RandomBetween(50, 1700)
        },
        error => {
            if (error) {
                console.error(error);
            }
        }
    );
}

/**
 * @return {number}
 */
function RandomBetween(min, max) // min and max included
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}
