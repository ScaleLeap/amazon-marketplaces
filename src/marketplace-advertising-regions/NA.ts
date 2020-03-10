import { AmazonMarketplaceAdvertisingRegion } from '../amazon-marketplace-advertising-region'

export const NA = new AmazonMarketplaceAdvertisingRegion({
  accessTokenUri: 'https://api.amazon.com/auth/o2/token',
  authorizationUri: 'https://www.amazon.com/ap/oa',
  code: 'NA',
  endpoint: 'https://advertising-api.amazon.com',
  name: 'North America',
})
