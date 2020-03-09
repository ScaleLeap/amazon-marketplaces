import {
  AmazonMarketplace,
  AmazonMarketplaceCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
} from '../amazon-marketplace'

export const SG = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.SG,
  currency: AmazonMarketplaceAdvertisingCurrency.SGD,
  id: 'A19VAU5U5O7RUS',
  name: 'Singapore',
  uri: 'https://www.amazon.sg',
  webServiceUri: 'https://mws-fe.amazonservices.com',
})
