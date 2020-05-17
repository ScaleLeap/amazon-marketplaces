import { findAmazonMarketplace, findAmazonMarketplaceOrFail, assertMarketplaceHasAdvertising } from '../src/utils'
import { amazonMarketplaces } from '../src/marketplaces'

describe('utils', () => {
  const { CA, TR } = amazonMarketplaces

  describe(findAmazonMarketplace.name, () => {
    it('should find by id', () => {
      expect(findAmazonMarketplace('id', CA.id)).toEqual(CA)
    })

    it('should find by countryCode', () => {
      expect(findAmazonMarketplace('countryCode', CA.countryCode)).toEqual(CA)
    })

    it('should find by currency', () => {
      expect(findAmazonMarketplace('currency', CA.currency)).toEqual(CA)
    })

    it('should find by name', () => {
      expect(findAmazonMarketplace('name', CA.name)).toEqual(CA)
    })

    it('should return undefined when marketplace is not found', () => {
      expect(findAmazonMarketplace('name', 'Does Not Exist')).toBeUndefined()
    })
  })

  describe(findAmazonMarketplaceOrFail.name, () => {
    it('should find by id', () => {
      expect(findAmazonMarketplaceOrFail('id', CA.id)).toEqual(CA)
    })

    it('should throw when marketplace is not found', () => {
      expect(() => findAmazonMarketplaceOrFail('id', 'WRONG ID')).toThrowError()
    })
  })

  describe(`${assertMarketplaceHasAdvertising.name}`, () => {
    it('should assert that we have the advertising', () => {
      assertMarketplaceHasAdvertising(CA)

      // here we simply ensure that advertising can be accessed, and it's not undefined
      expect(CA.advertising.countryCode).toBe('CA')
    })

    it('should throw when advertising is not available', () => {
      expect(() => assertMarketplaceHasAdvertising(TR)).toThrow()
    })
  })
})
