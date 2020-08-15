import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'

export const EG = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.EG,
  currency: AmazonMarketplaceAdvertisingCurrency.EGP,
  id: 'ARBP9OOSHTCHU',
  name: 'Egypt',
  uri: 'https://www.amazon.eg',
  webServiceUri: 'https://mws-eu.amazonservices.com',
})
