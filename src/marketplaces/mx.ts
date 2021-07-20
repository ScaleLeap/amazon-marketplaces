import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { marketplaceAdvertisingRegions } from '../marketplace-advertising-regions'
import {
  sellerCentralAuthUris,
  sellingPartnerRegions,
  vendorCentralAuthUriTemporary,
} from '../selling-partner-api-regions'

export const MX = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.MX,
  currency: AmazonMarketplaceAdvertisingCurrency.MXN,
  id: 'A1AM78C64UM0Y8',
  name: 'Mexico',
  uri: 'https://www.amazon.com.mx',
  sellerCentralUri: 'https://sellercentral.amazon.com.mx',
  vendorCentralUri: 'https://vendorcentral.amazon.com.mx',
  webServiceUri: 'https://mws.amazonservices.com.mx',
  advertising: {
    countryCode: AmazonMarketplaceAdvertisingCountryCode.MX,
    region: marketplaceAdvertisingRegions.NA,
    bids: {
      sponsoredBrands: {
        min: 10,
        max: 4900,
      },
      sponsoredProducts: {
        min: 2,
        max: 100000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.AMERICA_LOS_ANGELES,
  },
  sellingPartner: {
    region: sellingPartnerRegions.NA,
    sellerCentralAuthUri: sellerCentralAuthUris.NA,
    vendorCentralAuthUri: vendorCentralAuthUriTemporary, // This will be generated from Vendor Central URI
  },
})
