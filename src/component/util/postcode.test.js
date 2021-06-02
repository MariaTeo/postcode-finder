import { getLink } from "."

describe('Postcode utility', () => {
  it('should generate the correct link', () =>{
    const postcode = 'e114jh'
    const result = getLink(postcode)
    const expected = '/find/e114jh'


    expect(result).toEqual(expected)
  })

})
