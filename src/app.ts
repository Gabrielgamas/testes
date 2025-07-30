import http from "node:http";

const products = [
  { id: 1, name: "Camiseta", price: 29.99 },
  { id: 1, name: "Jaqueta", price: 80 },
  { id: 1, name: "Short", price: 25 },
];

const app = http.createServer((request, response) => {
  if (request.method === "GET" && request.url === "/products") {
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify(products));
  }
});

export { app };
