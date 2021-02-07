const supertest = require ('supertest')
const app = require('../app')

const api = supertest(app)

describe('Testing the /analyse endpint' ,() =>{
  test('Malformed request returns 400 + Invalid request', async () => {
    const result = await api.post('/analyse').send({badkey:'test to check'}).expect(400)
    expect(result.body.error).toContain('Invalid request')
  })

  test ('Empty strings returns all values to 0', async() => {
    const expectedResult = {
      textLength : {
        withSpaces: 0,
        withoutSpaces:0 ,
      },
      wordCount:0,
      characterCount : []
    }
    const result = await api.post('/analyse').send({text:''})
    expect(result.body).toMatchObject(expectedResult)
  })

  test ('Api returns accurately analysed data', async() => {
    const testString =  "  my Test string45 51"
    const expectedResult = {
      textLength : {
        withSpaces:testString.length,
        withoutSpaces:testString.length-5,
      },
      wordCount:4,
      characterCount : [{e:1},{g:1},{i:1},{m:1},{n:1},{r:1},{s:2},{t:3},{y:1}]
    }
    const result = await api.post('/analyse').send({text:testString})
    expect(result.body).toMatchObject(expectedResult)
  })
} )
