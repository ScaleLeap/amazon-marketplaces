import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'

export const TR = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.TR,
  currency: AmazonMarketplaceAdvertisingCurrency.TRY,
  id: 'A33AVAJ2PDY3EV',
  name: 'Turkey',
  uri: 'https://www.amazon.com.tr',
  webServiceUri: 'https://mws-eu.amazonservices.com',
})
