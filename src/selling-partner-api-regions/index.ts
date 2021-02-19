import { EU } from './eu'
import { FE } from './fe'
import { NA } from './na'

export const sellingPartnerRegions = {
  EU,
  FE,
  NA,
} as const

export const sellerCentralAuthUris = {
  NA: `https://sellercentral.amazon.com`,
  EU: `https://sellercentral-europe.amazon.com`,
}
