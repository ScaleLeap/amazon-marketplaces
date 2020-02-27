import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceAdvertisingCountryCode,
} from '../amazon-marketplace'

export const DE = new AmazonMarketplace({
  countryCode: AmazonMarketplaceAdvertisingCountryCode.DE,
  currency: 'EUR',
  id: 'A1PA6795UKMFR9',
  name: 'Germany',
  uri: 'https://www.amazon.de',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  advertising: {
    uri: 'https://advertising-api-eu.amazon.com',
    bids: {
      sponsoredBrands: {
        min: 10,
        max: 3900,
      },
      sponsoredProducts: {
        min: 2,
        max: 100000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.EUROPE_PARIS,
  },
})
