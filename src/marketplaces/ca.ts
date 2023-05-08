import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceCountryCode,
  AmazonMarketplaceTimeZone,
} from '../amazon-marketplace'
import { amazonVendorCentralUriFactory } from '../amazon-vendor-central-uri-factory'
import { marketplaceAdvertisingRegions } from '../marketplace-advertising-regions'
import { sellingPartnerRegions } from '../selling-partner-api-regions'

/**
 * Canada
 */
export const CA = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.CA,
  timeZone: AmazonMarketplaceTimeZone.AMERICA_LOS_ANGELES,
  currency: AmazonMarketplaceAdvertisingCurrency.CAD,
  id: 'A2EUQ1WTGCTBG2',
  name: 'Canada',
  uri: 'https://www.amazon.ca',
  webServiceUri: 'https://mws.amazonservices.ca',
  sellerCentralUri: 'https://sellercentral.amazon.ca',
  vendorCentralUri: amazonVendorCentralUriFactory(AmazonMarketplaceCountryCode.CA),
  launchDate: '2002-06-01',
  advertising: {
    countryCode: AmazonMarketplaceAdvertisingCountryCode.CA,
    region: marketplaceAdvertisingRegions.NA,
    bids: {
      sponsoredBrands: {
        min: 10,
        max: 4900,
      },
      sponsoredProducts: {
        min: 2,
        max: 100_000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.AMERICA_LOS_ANGELES,
  },
  sellingPartner: {
    region: sellingPartnerRegions.NA,
  },
})
