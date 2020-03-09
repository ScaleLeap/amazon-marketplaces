import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
} from '../amazon-marketplace'

export const JP = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.JP,
  currency: AmazonMarketplaceAdvertisingCurrency.JPY,
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
    timeZone: AmazonMarketplaceAdvertisingTimeZone.ASIA_TOKYO,
  },
})
