const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
    it("Obteniendo arreglo con por lo menos 1 objeto", async () => {
        const response = await request(server).get("/cafes").send();
        const status = response.statusCode;
        const cafes = response.body;

        expect(status).toBe(200);
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

    it("Agregando nuevo café - status code 201", async () => {
        const id = Math.floor(Math.random() * 999);
        const cafe = {id, nombre: "Café Helado"};
        const response = await request(server)
            .post("/cafes")
            .send(cafe);

        expect(response.statusCode).toBe(201);
        expect(response.body).toContainEqual(cafe);
    })

    it("Actualizar café id inexistente", async () => {
        const cafe = {id: "id", nombre: "Café Inexistente"};
        const id = "id_inexistente";
        const response = await request(server).
            put(`/cafes/${id}`)
            .send(cafe);
        const status = response.statusCode;
        expect(status).toBe(400);
    })
});
