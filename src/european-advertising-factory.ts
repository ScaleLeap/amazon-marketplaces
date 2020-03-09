import {
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceAdvertising,
} from './amazon-marketplace'

export function europeanAdvertisingFactory(
  countryCode: AmazonMarketplaceAdvertisingCountryCode,
): AmazonMarketplaceAdvertising {
  return {
    uri: 'https://advertising-api-eu.amazon.com',
    countryCode,
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
  }
}
