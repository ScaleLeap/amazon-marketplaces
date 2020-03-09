import {
  AmazonMarketplace,
  AmazonMarketplaceCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
} from '../amazon-marketplace'
import { DE } from './DE'

export const IT = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.IT,
  currency: AmazonMarketplaceAdvertisingCurrency.EUR,
  id: 'APJ6JRA9NG5V4',
  name: 'Italy',
  uri: 'https://www.amazon.it',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  advertising: Object.assign({}, DE.advertising),
})
