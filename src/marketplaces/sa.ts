import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceCountryCode,
  AmazonMarketplaceTimeZone,
} from '../amazon-marketplace'
import { sellingPartnerRegions } from '../selling-partner-api-regions'

export const SA = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.SA,
  timeZone: AmazonMarketplaceTimeZone.ASIA_RIYADH,
  currency: AmazonMarketplaceAdvertisingCurrency.SAR,
  id: 'A17E79C6D8DWNP',
  name: 'Saudi Arabia',
  uri: 'https://www.amazon.sa',
  sellerCentralUri: 'https://sellercentral.amazon.sa',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  sellingPartner: {
    region: sellingPartnerRegions.EU,
  },
})
