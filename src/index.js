const startDB = require("./Config/mongodb");
const app = require("./App");
const dotenv = require("dotenv");
dotenv.config();

startDB();
app.listen(process.env.LOCALHOST_PORT, () => console.log("Servidor rodando"));
