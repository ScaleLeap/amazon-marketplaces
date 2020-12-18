import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingTimeZone,
  amazonMarketplaces,
  amazonMarketplacesList,
  findAmazonMarketplace,
  findAmazonMarketplaceOrFail,
} from '../src'

describe('index', () => {
  it('should export', () => {
    expect.assertions(7)

    expect(amazonMarketplaces).toBeDefined()
    expect(AmazonMarketplace).toBeDefined()
    expect(findAmazonMarketplace).toBeDefined()
    expect(findAmazonMarketplaceOrFail).toBeDefined()
    expect(AmazonMarketplaceAdvertisingTimeZone).toBeDefined()
    expect(AmazonMarketplaceAdvertisingCountryCode).toBeDefined()
    expect(AmazonMarketplaceAdvertisingCurrency).toBeDefined()
  })

  it('should also provide a list of marketplaces', () => {
    expect.assertions(2)

    expect(Array.isArray(amazonMarketplacesList)).toBeDefined()
    expect(amazonMarketplacesList).toHaveLength(21)
  })
})
