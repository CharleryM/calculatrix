const request = require("supertest");
const express = require("express");
const calcRouter = require("../routes/calcule");

const app = express();
app.use(express.json());
app.use("/api/calcules", calcRouter);

describe("Route /api/calcules", () => {
  test("POST /api/calcules addition", async () => {
    const res = await request(app)
      .post("/api/calcules")
      .send({ a: 2, b: 3, op: "+" });
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(5);
  });

  test("erreur opérateur inconnu", async () => {
    const res = await request(app)
      .post("/api/calcules")
      .send({ a: 2, b: 3, op: "?" });
    expect(res.status).toBe(400);
    expect(res.body.error).toBeDefined();
  });

  test("erreur données manquantes", async () => {
    const res = await request(app).post("/api/calcules").send({});
    expect(res.status).toBe(400);
  });
});
