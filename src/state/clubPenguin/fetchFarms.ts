import BigNumber from 'bignumber.js'
import multicall from 'utils/multicall'
import { getClubPenguinMasterChefAddress } from 'utils/addressHelpers'
import clubPenguinFarms from 'config/constants/clubPenguinFarms'
import clubPenguinMasterChefAbi from 'config/abi/clubPenguin.json'

export const fetchMasterChefGlobalData = async () => {
  return 1
}

export const fetchFarms = async () => {
  const masterchefAddress = getClubPenguinMasterChefAddress()

  const data = await Promise.all(
    clubPenguinFarms.map(async (farmConfig) => {
      const [info] = await multicall(clubPenguinMasterChefAbi, [
        {
          address: masterchefAddress,
          name: 'poolInfo',
          params: [farmConfig.pid],
        },
      ])

      const {
        rewardToken,
        rewardStartTimestamp,
        rewardEndTimestamp,
        tokensPerSecond,
        totalIPEFIInPool,
        totalRewardAmount,
        rewardDistributed,
      } = info

      return {
        ...farmConfig,
        rewardToken,
        rewardStartTimestamp: new BigNumber(rewardStartTimestamp._hex).toNumber(),
        rewardEndTimestamp: new BigNumber(rewardEndTimestamp._hex).toNumber(),
        tokensPerSecond: new BigNumber(tokensPerSecond._hex).toJSON(),
        totalIPEFIInPool: new BigNumber(totalIPEFIInPool._hex).toJSON(),
        totalRewardAmount: new BigNumber(totalRewardAmount._hex).toJSON(),
        rewardDistributed: new BigNumber(rewardDistributed._hex).toJSON(),
      }
    }),
  )
  return data
}
