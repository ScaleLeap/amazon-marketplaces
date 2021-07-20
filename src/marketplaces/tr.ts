import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import {
  sellerCentralAuthUris,
  sellingPartnerRegions,
  vendorCentralAuthUriTemporary,
} from '../selling-partner-api-regions'

export const TR = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.TR,
  currency: AmazonMarketplaceAdvertisingCurrency.TRY,
  id: 'A33AVAJ2PDY3EV',
  name: 'Turkey',
  uri: 'https://www.amazon.com.tr',
  sellerCentralUri: 'https://sellercentral.amazon.com.tr',
  vendorCentralUri: 'https://vendorcentral.amazon.com.tr',
  webServiceUri: 'https://mws-eu.amazonservices.com',
  sellingPartner: {
    region: sellingPartnerRegions.EU,
    sellerCentralAuthUri: sellerCentralAuthUris.NA,
    vendorCentralAuthUri: vendorCentralAuthUriTemporary, // This will be generated from Vendor Central URI
  },
})
