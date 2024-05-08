import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceCountryCode,
  AmazonMarketplaceTimeZone,
} from '../amazon-marketplace'
import { sellingPartnerRegions } from '../selling-partner-api-regions'

export const ZA = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.ZA,
  timeZone: AmazonMarketplaceTimeZone.AFRICA_JOHANNESBURG,
  currency: AmazonMarketplaceAdvertisingCurrency.ZAR,
  id: 'AE08WJ6YKNBMC',
  name: 'South Africa',
  uri: 'https://www.amazon.co.za',
  sellerCentralUri: 'https://sellercentral.amazon.co.za',
  vendorCentralUri: 'https://vendorcentral.amazon.co.za',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  launchDate: '2024-05-07',
  sellingPartner: {
    region: sellingPartnerRegions.EU,
  },
})
