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

export const BR = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.BR,
  timeZone: AmazonMarketplaceTimeZone.AMERICA_SAO_PAULO,
  currency: AmazonMarketplaceAdvertisingCurrency.BRL,
  id: 'A2Q3Y263D00KWC',
  name: 'Brazil',
  uri: 'https://www.amazon.com.br',
  sellerCentralUri: 'https://sellercentral.amazon.com.br',
  vendorCentralUri: 'https://vendorcentral.amazon.com.br',
  webServiceUri: 'https://mws.amazonservices.com',
  advertising: {
    countryCode: AmazonMarketplaceAdvertisingCountryCode.BR,
    region: marketplaceAdvertisingRegions.NA,
    bids: {
      sponsoredBrands: {
        min: 53,
        max: 20_000,
      },
      sponsoredProducts: {
        min: 7,
        max: 370_000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.AMERICA_SAO_PAULO,
  },
  sellingPartner: {
    region: sellingPartnerRegions.NA,
  },
})
