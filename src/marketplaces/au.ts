import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceCountryCode,
  AmazonMarketplaceTimeZone,
} from '../amazon-marketplace'
import { marketplaceAdvertisingRegions } from '../marketplace-advertising-regions'
import { sellingPartnerRegions } from '../selling-partner-api-regions'

export const AU = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.AU,
  timeZone: AmazonMarketplaceTimeZone.AUSTRALIA_SYDNEY,
  currency: AmazonMarketplaceAdvertisingCurrency.AUD,
  id: 'A39IBJ37TRP1C6',
  name: 'Australia',
  uri: 'https://www.amazon.com.au',
  sellerCentralUri: 'https://sellercentral.amazon.com.au',
  vendorCentralUri: 'https://vendorcentral.amazon.com.au',
  webServiceUri: 'https://mws.amazonservices.com.au',
  launchDate: '2017-11-01',
  advertising: {
    countryCode: AmazonMarketplaceAdvertisingCountryCode.AU,
    region: marketplaceAdvertisingRegions.FE,
    bids: {
      sponsoredBrands: {
        min: 10,
        max: 7000,
      },
      sponsoredProducts: {
        min: 10,
        max: 141_000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.AUSTRALIA_SYDNEY,
  },
  sellingPartner: {
    region: sellingPartnerRegions.FE,
  },
})
