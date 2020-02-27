import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
} from '../amazon-marketplace'
import { DE } from './DE'

export const NL = new AmazonMarketplace({
  countryCode: AmazonMarketplaceAdvertisingCountryCode.NL,
  currency: AmazonMarketplaceAdvertisingCurrency.EUR,
  id: 'A1805IZSGTT6HS',
  name: 'Netherlands',
  uri: 'https://www.amazon.nl',
  webServiceUri: DE.webServiceUri,
})
