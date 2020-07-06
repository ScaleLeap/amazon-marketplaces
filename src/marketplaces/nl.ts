import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { DE } from './de'

export const NL = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.NL,
  currency: AmazonMarketplaceAdvertisingCurrency.EUR,
  id: 'A1805IZSGTT6HS',
  name: 'Netherlands',
  uri: 'https://www.amazon.nl',
  webServiceUri: DE.webServiceUri,
})
