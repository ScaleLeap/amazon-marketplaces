import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { marketplaceAdvertisingRegions } from '../marketplace-advertising-regions'
import { sellerCentralAuthUris, sellingPartnerRegions } from '../selling-partner-api-regions'

export const BR = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.BR,
  currency: AmazonMarketplaceAdvertisingCurrency.BRL,
  id: 'A2Q3Y263D00KWC',
  name: 'Brazil',
  uri: 'https://www.amazon.com.br',
  sellerCentralUri: 'https://sellercentral.amazon.com.br',
  webServiceUri: 'https://mws.amazonservices.com',
  advertising: {
    countryCode: AmazonMarketplaceAdvertisingCountryCode.BR,
    region: marketplaceAdvertisingRegions.NA,
    bids: {
      sponsoredBrands: {
        min: 7,
        max: 370000,
      },
      sponsoredProducts: {
        min: 7,
        max: 370000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.AMERICA_SAO_PAULO,
  },
  sellingPartner: {
    region: sellingPartnerRegions.NA,
    sellerCentralAuthUri: sellerCentralAuthUris.NA,
  },
})
