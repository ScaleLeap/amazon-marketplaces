import { AE } from './AE'
import { AU } from './AU'
import { BR } from './BR'
import { CA } from './CA'
import { CN } from './CN'
import { DE } from './DE'
import { ES } from './ES'
import { FR } from './FR'
import { GB } from './GB'
import { IN } from './IN'
import { IT } from './IT'
import { JP } from './JP'
import { MX } from './MX'
import { NL } from './NL'
import { SA } from './SA'
import { SG } from './SG'
import { TR } from './TR'
import { US } from './US'

export const amazonMarketplaces = {
  /**
   * United Arab Emirates
   */
  AE,

  /**
   * Australia
   */
  AU,

  /**
   * Brazil
   */
  BR,

  /**
   * Canada
   */
  CA,

  /**
   * China
   */
  CN,

  /**
   * Germany
   */
  DE,

  /**
   * Spain
   */
  ES,

  /**
   * France
   */
  FR,

  /**
   * United Kingdom
   */
  GB,

  /**
   * India
   */
  IN,

  /**
   * Italy
   */
  IT,

  /**
   * Japan
   */
  JP,

  /**
   * Mexico
   */
  MX,

  /**
   * Netherlands
   */
  NL,

  /**
   * Singapore
   */
  SA,

  /**
   * Singapore
   */
  SG,

  /**
   * Turkey
   */
  TR,

  /**
   * United States
   */
  US,
} as const

/**
 * An array of all of the `AmazonMarketplace` objects.
 */
export const amazonMarketplacesList = Object.values(amazonMarketplaces)
