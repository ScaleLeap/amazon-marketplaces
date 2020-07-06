import { amazonMarketplaces } from '../src/marketplaces'
import {
  assertMarketplaceHasAdvertising,
  findAmazonMarketplace,
  findAmazonMarketplaceOrFail,
} from '../src/utils'

describe('utils', () => {
  const { CA, TR } = amazonMarketplaces

  describe(`${findAmazonMarketplace.name}`, () => {
    it('should find by id', () => {
      expect.assertions(1)

      expect(findAmazonMarketplace('id', CA.id)).toStrictEqual(CA)
    })

    it('should find by countryCode', () => {
      expect.assertions(1)

      expect(findAmazonMarketplace('countryCode', CA.countryCode)).toStrictEqual(CA)
    })

    it('should find by currency', () => {
      expect.assertions(1)

      expect(findAmazonMarketplace('currency', CA.currency)).toStrictEqual(CA)
    })

    it('should find by name', () => {
      expect.assertions(1)

      expect(findAmazonMarketplace('name', CA.name)).toStrictEqual(CA)
    })

    it('should return undefined when marketplace is not found', () => {
      expect.assertions(1)

      expect(findAmazonMarketplace('name', 'Does Not Exist')).toBeUndefined()
    })
  })

  describe(`${findAmazonMarketplaceOrFail.name}`, () => {
    it('should find by id', () => {
      expect.assertions(1)

      expect(findAmazonMarketplaceOrFail('id', CA.id)).toStrictEqual(CA)
    })

    it('should throw when marketplace is not found', () => {
      expect.assertions(1)

      expect(() => findAmazonMarketplaceOrFail('id', 'WRONG ID')).toThrow(
        /Cannot find Amazon Marketplace by key/,
      )
    })
  })

  describe(`${assertMarketplaceHasAdvertising.name}`, () => {
    it('should assert that we have the advertising', () => {
      expect.assertions(1)

      assertMarketplaceHasAdvertising(CA)

      // here we simply ensure that advertising can be accessed, and it's not undefined
      expect(CA.advertising.countryCode).toBe('CA')
    })

    it('should throw when advertising is not available', () => {
      expect.assertions(1)

      expect(() => assertMarketplaceHasAdvertising(TR)).toThrow(/does not have advertising/)
    })
  })
})
