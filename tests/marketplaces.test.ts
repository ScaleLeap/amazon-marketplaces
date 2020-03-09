import { amazonMarketplaces } from '../src/marketplaces'
import { readdirSync } from 'fs'
import { join } from 'path'

const countryCodes = readdirSync(join(__dirname, '../src/marketplaces'))
  .map(f => f.split('.')[0])
  .filter(f => f.match(/^[A-Z]{2}$/))

describe('marketplace', () => {
  it('has a known number of marketplaces', () => {
    expect.assertions(1)

    expect(countryCodes.length).toBe(17)
  })

  it('files should match the exports', () => {
    expect.assertions(countryCodes.length)

    countryCodes.forEach(countryCode => {
      const code = (countryCode as unknown) as keyof typeof amazonMarketplaces
      expect(amazonMarketplaces[code].countryCode).toBe(code)
    })
  })

  it('object is read only', () => {
    expect(() => Object.assign(amazonMarketplaces.CA, { id: 'a' })).toThrowError(/Cannot assign to read only property/)
  })
})
