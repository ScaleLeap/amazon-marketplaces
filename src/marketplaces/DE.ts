import {
  AmazonMarketplace,
  AmazonMarketplaceCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingCountryCode,
} from '../amazon-marketplace'
import { europeanAdvertisingFactory } from '../european-advertising-factory'

export const DE = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.DE,
  currency: AmazonMarketplaceAdvertisingCurrency.EUR,
  id: 'A1PA6795UKMFR9',
  name: 'Germany',
  uri: 'https://www.amazon.de',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  advertising: europeanAdvertisingFactory(AmazonMarketplaceAdvertisingCountryCode.DE),
})
