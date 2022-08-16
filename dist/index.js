"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const Banker_1 = require("./entities/Banker");
const Client_1 = require("./entities/Client");
const Transaction_1 = require("./entities/Transaction");
const createClients_1 = require("./routes/createClients");
const app = (0, express_1.default)();
const dataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "Kuhub*28",
    database: 'perntodo',
    entities: [Client_1.Client, Banker_1.Banker, Transaction_1.Transaction],
    synchronize: true
});
dataSource.initialize()
    .then(() => {
    console.log('database connected');
})
    .catch((error) => {
    console.log(error);
});
app.use(express_1.default.json());
app.use(createClients_1.createClient);
app.listen(8080, () => {
    console.log('listening to the server at port 8080');
});
//# sourceMappingURL=index.js.map