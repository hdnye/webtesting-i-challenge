const enhancer = require('./enhancer.js');
const { repair, succeed, fail, get} = require('./enhancer');
// test away!
// item: {
// name, 
// durability, 
// enhancement
// }

//enhancement as e = 0-20
//durability as d = 0-100

describe('enhancer unit tests', () => {
   it('runs tests', () => {
       expect(true).toBeTruthy()
   })

   it('restores durability to 100', () => {
    //return new item {} w/ durability restored to 100
       expect(repair(20).durability).toBe(100) 
       expect(repair(-20).durability).toBe(100) 
       expect(repair(75).durability).toBe(100) 
       expect(repair(0).durability).toBe(100) 
   })

   it('succeeds in enhancing', () => {
    //enhancement ++1
       expect(succeed(1).enhancement).toBe(2)
       expect(succeed(3).enhancement).toBe(4)
    //e = 20, no change
       expect(succeed(20).enhancement).toBe(20)
    })

   it('fails to enhance', () => {
    //enhancement < 15, durability -5
      expect(fail())
    //enhancement >=15, durability -10

    //enhancement >16, -1
   })
})