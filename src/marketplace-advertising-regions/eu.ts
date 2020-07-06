import { AmazonMarketplaceAdvertisingRegion } from '../amazon-marketplace-advertising-region'

export const EU = new AmazonMarketplaceAdvertisingRegion({
  accessTokenUri: 'https://api.amazon.co.uk/auth/o2/token',
  authorizationUri: 'https://eu.account.amazon.com/ap/oa',
  code: 'EU',
  endpoint: 'https://advertising-api-eu.amazon.com',
  name: 'Europe',
})
