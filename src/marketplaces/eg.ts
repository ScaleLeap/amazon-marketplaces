import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import {
  sellingPartnerRegions,
  vendorCentralAuthUriTemporary,
} from '../selling-partner-api-regions'

export const EG = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.EG,
  currency: AmazonMarketplaceAdvertisingCurrency.EGP,
  id: 'ARBP9OOSHTCHU',
  name: 'Egypt',
  uri: 'https://www.amazon.eg',
  vendorCentralUri: 'https://vendorcentral.amazon.me',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  sellingPartner: {
    region: sellingPartnerRegions.EU,
    sellerCentralAuthUri: '',
    vendorCentralAuthUri: vendorCentralAuthUriTemporary, // This will be generated from Vendor Central URI
  },
})
