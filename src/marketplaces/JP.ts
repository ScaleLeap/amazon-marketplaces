import { AmazonMarketplace } from '../amazon-marketplace'

export const JP = new AmazonMarketplace({
  countryCode: 'JP',
  currency: 'JPY',
  id: 'A1VC38T7YXB528',
  name: 'Japan',
  uri: 'https://www.amazon.co.jp',
  webServiceUri: 'https://mws.amazonservices.jp',
  advertising: {
    uri: 'https://advertising-api-fe.amazon.com',
    bids: {
      sponsoredBrands: {
        min: 1000,
        max: 776000,
      },
      sponsoredProducts: {
        min: 200,
        max: 10000000,
      },
    },
  },
})
