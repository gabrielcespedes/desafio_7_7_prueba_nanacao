const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
    it("Obteniendo status code 200", async () => {
        const response = await request(server).get("/cafes").send();
        const status = response.statusCode;
        expect(status).toBe(200);
    })

    it("Obteniendo arreglo con por lo menos 1 objeto", async () => {
        const { body } = await request(server).get("/cafes").send();
        const cafes = body;
        expect(cafes).toBeInstanceOf(Array);
        expect(cafes.length).toBeGreaterThan(0);
    })

    it("Eliminar café id inexistente", async () => {
        const jwt = "token";
        const id = 0;
        const response = await request(server)
            .delete(`/cafes/${id}`)
            .set("Authorization", jwt)
            .send();
        
            expect(response.statusCode).toBe(404);
    })
});
