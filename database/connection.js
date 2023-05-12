const mongoose = require("mongoose")
mongoose.set("strictQuery", true);

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const connect = () => {
    // mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.0m8dtgl.mongodb.net/?retryWrites=true&w=majority`)
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.fitfv17.mongodb.net/moneyWise?retryWrites=true&w=majority`)

    const connection = mongoose.connection;

    connection.on("error", () => {
        console.error("Erro ao conectar com o mongoDB")
    })

    connection.on("open", () => {
        console.log("Conetado ao mongoDB com sucesso!")
    })
}

connect();

module.exports = mongoose;