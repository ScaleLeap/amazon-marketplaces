import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'

export const MX = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.MX,
  currency: AmazonMarketplaceAdvertisingCurrency.MXN,
  id: 'A1AM78C64UM0Y8',
  name: 'Mexico',
  uri: 'https://www.amazon.com.mx',
  webServiceUri: 'https://mws.amazonservices.com.mx',
})
