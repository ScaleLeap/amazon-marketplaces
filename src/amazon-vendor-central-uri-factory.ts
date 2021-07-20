import { AmazonMarketplaceCountryCode } from './amazon-marketplace'

export function amazonVendorCentralUriFactory(countryCode: AmazonMarketplaceCountryCode): string {
  return `https://vendorcentral.amazon.${countryCode.toLowerCase()}`
}
