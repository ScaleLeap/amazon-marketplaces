import { readdirSync } from 'node:fs'
import path from 'node:path'

import { amazonMarketplaces } from '../src/marketplaces'

const countryCodes = readdirSync(path.join(__dirname, '../src/marketplaces'))
  .map((f) => f.split('.')[0])
  .filter((f) => f.match(/^[a-z]{2}$/))
  .map((f) => f.toUpperCase())

describe('marketplace', () => {
  it('has a known number of marketplaces', () => {
    expect.assertions(1)

    expect(countryCodes).toHaveLength(22)
  })

  describe.each(countryCodes)('%s', (countryCode) => {
    const code = countryCode as unknown as keyof typeof amazonMarketplaces

    it('should match the exports', () => {
      expect.assertions(1)

      expect(amazonMarketplaces[code].countryCode).toBe(code)
    })

    it('should match snapshot', () => {
      expect.assertions(1)

      expect(amazonMarketplaces[code]).toMatchSnapshot()
    })
  })

  it('object is read only', () => {
    expect.assertions(1)

    expect(() => Object.assign(amazonMarketplaces.CA, { id: 'a' })).toThrow(
      /Cannot assign to read only property/,
    )
  })
})
