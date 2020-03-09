import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingRegion,
} from '../amazon-marketplace'

export const US = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.US,
  currency: AmazonMarketplaceAdvertisingCurrency.USD,
  id: 'ATVPDKIKX0DER',
  name: 'United States',
  uri: 'https://www.amazon.com',
  webServiceUri: 'https://mws.amazonservices.com',
  advertising: {
    uri: 'https://advertising-api.amazon.com',
    countryCode: AmazonMarketplaceAdvertisingCountryCode.US,
    region: AmazonMarketplaceAdvertisingRegion.NORTH_AMERICA,
    bids: {
      sponsoredBrands: {
        min: 10,
        max: 4900,
      },
      sponsoredProducts: {
        min: 2,
        max: 100000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.AMERICA_LOS_ANGELES,
  },
})
