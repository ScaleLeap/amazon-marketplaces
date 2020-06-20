import {
  AmazonMarketplace,
  AmazonMarketplaceCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
} from '../amazon-marketplace'

export const SA = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.SA,
  currency: AmazonMarketplaceAdvertisingCurrency.SAR,
  id: 'A17E79C6D8DWNP',
  name: 'Saudi Arabia',
  uri: 'https://www.amazon.sa',
  webServiceUri: 'https://mws-eu.amazonservices.com',
})
