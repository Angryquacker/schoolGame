const socket = io();

function startGame(data) {
    console.log(data);
} 

window.onload = () => {
    document.getElementById("gameCode").addEventListener("submit", e => {
        e.preventDefault();
        let code = document.getElementById("code").value;

        if (code.length < 6) {
            alert("Code must be 6 characters long");
            return;
        }

        let name = document.getElementById("name").value;

        let sendData = {
            username: name,
            gameCode: code
        };

        socket.emit("joinGame", sendData);

        socket.on("gameAction", status => {
            if (!status.code) {
                alert("Invalid Game Code!");
                return;
            }

            startGame(data);
        });
    });
}