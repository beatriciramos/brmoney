import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de website",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2021-02-12 08:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 2000,
          createdAt: new Date("2021-02-15 11:35:05"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    //GET
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    //POST
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
