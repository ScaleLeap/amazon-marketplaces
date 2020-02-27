import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
} from '../amazon-marketplace'
import { DE } from './DE'

export const ES = new AmazonMarketplace({
  countryCode: AmazonMarketplaceAdvertisingCountryCode.ES,
  currency: AmazonMarketplaceAdvertisingCurrency.EUR,
  id: 'A1RKKUPIHCS9HS',
  name: 'Spain',
  uri: 'https://www.amazon.es',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  advertising: Object.assign({}, DE.advertising),
})
