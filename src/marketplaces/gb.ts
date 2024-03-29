import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceCountryCode,
  AmazonMarketplaceTimeZone,
} from '../amazon-marketplace'
import { europeanSellerCentralUriFactory } from '../european-seller-central-uri-factory'
import { marketplaceAdvertisingRegions } from '../marketplace-advertising-regions'
import { sellingPartnerRegions } from '../selling-partner-api-regions'
import { DE } from './de'

if (!DE.advertising) {
  throw new Error('Missing DE.advertising')
}

export const GB = new AmazonMarketplace({
  countryCode: AmazonMarketplaceCountryCode.GB,
  timeZone: AmazonMarketplaceTimeZone.EUROPE_LONDON,
  currency: AmazonMarketplaceAdvertisingCurrency.GBP,
  id: 'A1F83G8C2ARO7P',
  name: 'United Kingdom',
  uri: 'https://www.amazon.co.uk',
  sellerCentralUri: europeanSellerCentralUriFactory(),
  vendorCentralUri: 'https://vendorcentral.amazon.co.uk',
  webServiceUri: DE.webServiceUri,
  launchDate: '1998-10-01',
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
        max: 100_000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.EUROPE_LONDON,
  },
  sellingPartner: {
    region: sellingPartnerRegions.EU,
  },
})
