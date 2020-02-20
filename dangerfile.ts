import { danger, fail } from 'danger'

const hasNewMarketplace = danger.git.fileMatch('src/marketplaces/*.ts').created
const hasBreakingChange = danger.git.commits.some(commit => commit.message.includes('BREAKING'))

if (hasNewMarketplace && !hasBreakingChange) {
  fail('Marketplace was added by not marked as breaking change.')
}
