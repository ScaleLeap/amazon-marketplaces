import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { amazonVendorCentralUriFactory } from '../amazon-vendor-central-uri-factory'
import { europeanAdvertisingFactory } from '../european-advertising-factory'
import { europeanSellerCentralUriFactory } from '../european-seller-central-uri-factory'
import {
  sellerCentralAuthUris,
  sellingPartnerRegions,
  vendorCentralAuthUriTemporary,
} from '../selling-partner-api-regions'

export const IT = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.IT,
  currency: AmazonMarketplaceAdvertisingCurrency.EUR,
  id: 'APJ6JRA9NG5V4',
  name: 'Italy',
  uri: 'https://www.amazon.it',
  sellerCentralUri: europeanSellerCentralUriFactory(),
  vendorCentralUri: amazonVendorCentralUriFactory(AmazonMarketplaceCountryCode.IT),
  webServiceUri: 'https://mws-eu.amazonservices.com',
  advertising: europeanAdvertisingFactory(AmazonMarketplaceAdvertisingCountryCode.DE),
  sellingPartner: {
    region: sellingPartnerRegions.EU,
    sellerCentralAuthUri: sellerCentralAuthUris.EU,
    vendorCentralAuthUri: vendorCentralAuthUriTemporary, // This will be generated from Vendor Central URI
  },
})
