export interface AmazonMarketplaceAdvertisingRegion {
  /**
   * Region code.
   */
  code: string

  /**
   * Region name.
   */
  name: string

  /**
   * Authorization URI.
   */
  authorizationUri: string

  /**
   * Access Token URI
   */
  accessTokenUri: string

  /**
   * Access endpoint URI.
   */
  endpoint: string
}

export class AmazonMarketplaceAdvertisingRegion implements AmazonMarketplaceAdvertisingRegion {
  constructor(data: AmazonMarketplaceAdvertisingRegion) {
    Object.assign(this, data)
    Object.freeze(this)
  }
}
