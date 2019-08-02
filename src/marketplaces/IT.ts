import { AmazonMarketplace } from '../amazon-marketplace'
import { DE } from './DE'

export const IT = new AmazonMarketplace({
  countryCode: 'IT',
  currency: 'EUR',
  id: 'APJ6JRA9NG5V4',
  name: 'Italy',
  uri: 'https://www.amazon.it',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  advertising: Object.assign({}, DE.advertising),
})
