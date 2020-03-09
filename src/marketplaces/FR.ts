import {
  AmazonMarketplace,
  AmazonMarketplaceCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingCountryCode,
} from '../amazon-marketplace'
import { europeanAdvertisingFactory } from '../european-advertising-factory'

export const FR = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.FR,
  currency: AmazonMarketplaceAdvertisingCurrency.EUR,
  id: 'A13V1IB3VIYZZH',
  name: 'France',
  uri: 'https://www.amazon.fr',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  advertising: europeanAdvertisingFactory(AmazonMarketplaceAdvertisingCountryCode.FR),
})
