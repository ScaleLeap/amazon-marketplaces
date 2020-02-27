import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
} from '../amazon-marketplace'

export const BR = new AmazonMarketplace({
  countryCode: AmazonMarketplaceAdvertisingCountryCode.BR,
  currency: AmazonMarketplaceAdvertisingCurrency.BRL,
  id: 'A2Q3Y263D00KWC',
  name: 'Brazil',
  uri: 'https://www.amazon.com.br',
  webServiceUri: 'https://mws.amazonservices.com',
})
