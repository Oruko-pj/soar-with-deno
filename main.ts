import express from "npm:express@4.21.1";
const app = express();

app.get("/", (_req, res) => {
        res.send("Hello, World!");
});

if (import.meta.main) {
        app.listen({ port: 8080 });
}