const game = (io, db) => {
    io.on("connection", socket => {
        console.log("yo");

        socket.on("joinGame", data => {
            let activeGames = db.getColumn("activeGames", "gameCode");

            activeGames.forEach(item => {
                if (data.gameCode == item) {
                    socket.emit("gameAction", { code: true, data: "lol" }); //Idk What data yet so...
                    return;
                }
            });

            socket.emit("gameAction", { code: false, data: null });
        });

        socket.on("disconnect", () => {
            console.log("Cya");
        });
    });
}

module.exports = game;