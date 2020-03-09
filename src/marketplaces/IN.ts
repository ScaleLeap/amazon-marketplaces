import {
  AmazonMarketplace,
  AmazonMarketplaceCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
} from '../amazon-marketplace'

export const IN = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.IN,
  currency: AmazonMarketplaceAdvertisingCurrency.INR,
  id: 'A21TJRUUN4KGV',
  name: 'India',
  uri: 'https://www.amazon.in',
  webServiceUri: 'https://mws.amazonservices.in',
})
