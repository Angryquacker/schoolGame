const create = (io, db) => {
    io.on("connection", socket => {
        console.log("Hit");
    });
}

module.exports = create;