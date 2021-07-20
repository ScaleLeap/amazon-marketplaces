import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceCountryCode,
} from '../amazon-marketplace'
import { europeanSellerCentralUriFactory } from '../european-seller-central-uri-factory'
import { marketplaceAdvertisingRegions } from '../marketplace-advertising-regions'
import {
  sellerCentralAuthUris,
  sellingPartnerRegions,
  vendorCentralAuthUriTemporary,
} from '../selling-partner-api-regions'
import { DE } from './de'

if (!DE.advertising) {
  throw new Error('Missing DE.advertising')
}

export const GB = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.GB,
  currency: AmazonMarketplaceAdvertisingCurrency.GBP,
  id: 'A1F83G8C2ARO7P',
  name: 'United Kingdom',
  uri: 'https://www.amazon.co.uk',
  sellerCentralUri: europeanSellerCentralUriFactory(),
  vendorCentralUri: 'https://vendorcentral.amazon.co.uk',
  webServiceUri: DE.webServiceUri,
  advertising: {
    countryCode: AmazonMarketplaceAdvertisingCountryCode.UK,
    region: marketplaceAdvertisingRegions.EU,
    bids: {
      sponsoredBrands: {
        min: 10,
        max: 3100,
      },
      sponsoredProducts: {
        min: 2,
        max: 100000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.EUROPE_LONDON,
  },
  sellingPartner: {
    region: sellingPartnerRegions.EU,
    sellerCentralAuthUri: sellerCentralAuthUris.EU,
    vendorCentralAuthUri: vendorCentralAuthUriTemporary, // This will be generated from Vendor Central URI
  },
})
