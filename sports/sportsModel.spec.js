const db = require('../data/db-config') //will connect me to testing db
//jest set up tear down

const { add, remove } = require('./sports-model')

describe('sports model', function(){
    describe('add()', function(){
        //jest setup teardown
        //async await till done and then call test
        //clean out db before run test
        beforeEach(async () => {
            await db('olympics').truncate()
        })

        it('should add team', async function(){
            //add team
            await add({"teamname":"buzhidao",
            "password":"pass",
            "sport":"pong"})
            //check to see if added
            const team = await db('olympics')
            //check if was added
            //run queries directly againt db from api
            expect(team).toHaveLength(1)
            })
            
            it('should add provided team', async function(){
                //add team
                await add({"teamname":"buzhidao",
                "password":"pass",
                "sport":"pong"})
                await add({"teamname":"Dragons",
                "password":"pass",
                "sport":"pong"})
                //check to see if added
                const team = await db('olympics')
                
                expect(team[0].teamname).toBe("buzhidao")
                expect(team[1].teamname).toBe("Dragons")
                })
                it('should delete provided team', async function(){
                    //add team
                    await add({"teamname":"zhidao",
                    "password":"pass",
                    "sport":"pong"})

                    await remove(1)
                   
                    //check to see if added
                    const team = await db('olympics')
                    
                    expect(team).toHaveLength(0)
                    })
        })
    })
