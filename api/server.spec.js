const request = require('supertest')

const server = require('./server.js')

describe('server', function(){
    test('should return status 200', function(){
         //run server
        // make get request
        return request(server)
            .get("/")
            .then(res => {
                //matcher from jest
                expect(res.status).toBe(200)
            })
    })

    test('should return json', function(){
        //run server
       // make get request
       return request(server)
           .get("/")
           .then(res => {
               //matcher from jest
               expect(res.type).toMatch(/json/i)
           })
   })

   test('should return Its Alive', function(){
    //run server
   // make get request
   return request(server)
       .get("/")
       .then(res => {
           //matcher from jest
           expect(res.body).toBe('Its Alive')
       })
    })

    test('should return status 201', function(){
        //run server
       // make get request
       return request(server)
           .delete("/")
           .then(res => {
               //matcher from jest
               expect(res.status).toBe(200)
           })
        })
    
})