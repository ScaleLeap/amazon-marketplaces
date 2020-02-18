import { findAmazonMarketplace, findAmazonMarketplaceOrFail } from '../src/utils'
import { amazonMarketplaces } from '../src/marketplaces'

describe('utils', () => {
  const { CA } = amazonMarketplaces

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
})
