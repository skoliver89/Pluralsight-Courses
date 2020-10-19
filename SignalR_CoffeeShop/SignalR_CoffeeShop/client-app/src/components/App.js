import React, { useEffect, useState } from "react";
import * as signalR from "@aspnet/signalr";
import { Container } from "react-bootstrap";
import Header from "./Header";
import MainContent from "./MainContent";

function App() {
  /* ---- State Hooks ---- */
  const [form, setForm] = useState({ product: "Americano", size: "Vente" });
  const [status, setStatus] = useState("");
  const [conn, setConn] = useState(null);
  const [connecting, setConnecting] = useState(true);
  const [disable, setDisable] = useState(false);

  /* ---- Effect Hooks ---- */
  // ON MOUNT -- Attempt connection to server using SignalR
  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("/CoffeeHub")
      .build();

    connection.on("ReceiveOrderUpdate", (update) => {
      setStatus(update);
    });

    connection.on("NewOrder", (order) => {
      setStatus(`Someone ordered an ${order.product}`);
    });

    connection.on("finished", () => {
      setTimeout(() => {
        setStatus("");
        setDisable(false);
      }, 2000);
    });

    connection
      .start()
      .then(() => setConnecting(false))
      .catch((err) => console.error(err.toString()));

    setConn(connection);

    return () => {
      connection.stop().catch((err) => console.error(err.toString()));
    };
  }, []);

  /* ---- Event Handlers ---- */
  const handleChange = (e) => {
    e.preventDefault();

    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setDisable(true);

    fetch("/Coffee", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => response.text())
      .then((id) => conn.invoke("GetUpdateForOrder", id));
  };

  return (
    <Container>
      <Header />
      <MainContent
        form={form}
        status={status}
        onChange={handleChange}
        onSubmit={handleSubmit}
        connecting={connecting}
        disable={disable}
      />
    </Container>
  );
}

export default App;
