import { AmazonMarketplace, amazonMarketplaces } from '../src'

describe('index', () => {
  it('should export', () => {
    expect(amazonMarketplaces).toBeTruthy()
    expect(AmazonMarketplace).toBeTruthy()
  })
})
