import { AmazonMarketplaceAdvertisingRegion } from '../amazon-marketplace-advertising-region'

export const FE = new AmazonMarketplaceAdvertisingRegion({
  accessTokenUri: 'https://api.amazon.co.jp/auth/o2/token',
  authorizationUri: 'https://apac.account.amazon.com/ap/oa',
  code: 'FE',
  endpoint: 'https://advertising-api-fe.amazon.com',
  name: 'Far East',
})
