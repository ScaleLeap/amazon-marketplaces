import {
  AmazonMarketplace,
  amazonMarketplaces,
  amazonMarketplacesList,
  findAmazonMarketplace,
  findAmazonMarketplaceOrFail,
  AmazonMarketplaceAdvertisingTimeZone,
} from '../src'

describe('index', () => {
  it('should export', () => {
    expect(amazonMarketplaces).toBeTruthy()
    expect(AmazonMarketplace).toBeTruthy()
    expect(findAmazonMarketplace).toBeTruthy()
    expect(findAmazonMarketplaceOrFail).toBeTruthy()
    expect(AmazonMarketplaceAdvertisingTimeZone).toBeTruthy()
  })

  it('should also provide a list of marketplaces', () => {
    expect(Array.isArray(amazonMarketplacesList)).toBeTruthy()
    expect(amazonMarketplacesList.length).toBe(17)
  })
})
