const request = require('supertest');
const baseURL = "http://localhost:3000";

describe("GET/todos",()=>{
    // const newToDo={
    //     id:crypto.randomUUID(),
    //     item:"Drink water",
    //     completed:false
    // }
    
    it("should return 200",async()=>{
        const response =await request(baseURL).get("/todos");
        expect(response.statusCode).toBe(200);
        expect(response.body.error).toBe(null);
    })

    it("should return todos",async()=>{
        const resopnse =await request(baseURL).get("/todos");
        expect(resopnse.body.data.length>=1).toBe(true);
    })

    
})