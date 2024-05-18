import express from "express";
import routes from "./routes";
import mongoose from "mongoose";
import path from "path";
const login = "";
const password = "";
class App {
  constructor() {
    this.server = express();
    mongoose
      .connect(
        `mongodb+srv://${login}:${password}@mongoserver.vc6jcnv.mongodb.net/?retryWrites=true&w=majority&appName=mongoserver`
      )
      .then((db) => {
        console.log(db);
      })
      .catch((error) => {
        console.log(db);
      });
    this.middlewares();
    this.routes();
  }
  middlewares() {
    this.server.use(
      "/files",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    this.server.use(express.json());
  }
  routes() {
    this.server.use(routes);
  }
}
export default new App().server;
