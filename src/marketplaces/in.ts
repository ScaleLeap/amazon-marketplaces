import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { sellerCentralAuthUris, sellingPartnerRegions } from '../selling-partner-api-regions'

export const IN = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.IN,
  currency: AmazonMarketplaceAdvertisingCurrency.INR,
  id: 'A21TJRUUN4KGV',
  name: 'India',
  uri: 'https://www.amazon.in',
  webServiceUri: 'https://mws.amazonservices.in',
  sellingPartner: {
    region: sellingPartnerRegions.EU,
    sellerCentralAuthUri: sellerCentralAuthUris.NA,
  },
})
