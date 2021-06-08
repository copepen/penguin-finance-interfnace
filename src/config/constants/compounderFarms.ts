import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'PEFI-AVAX LP',
    lpAddresses: {
      43113: '',
      43114: '0x494Dd9f783dAF777D3fb4303da4de795953592d0',
    },
    tokenSymbol: 'PEFI',
    tokenAddresses: {
      43113: '',
      43114: '0xe896CDeaAC9615145c0cA09C8Cd5C25bced6384c',
    },
    strategyAddress: '0xaB6eEd788BEed09D1279b21B6C91F9750242E0f5',
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAddresses: contracts.wavax,
    withdrawalFee: '3.2',
    hardApy: '896.65%',
    type: 'Penguin',
    name: 'pendingPEFI',
  },
  {
    pid: 1,
    lpSymbol: 'ETH-AVAX LP',
    lpAddresses: {
      43113: '',
      43114: '0x1aCf1583bEBdCA21C8025E172D8E8f2817343d65',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      43113: '',
      43114: '0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15',
    },
    strategyAddress: '0xBbd9DD1f15c729745eDFFD8E46253463D40A7d84',
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAddresses: contracts.wavax,
    withdrawalFee: '3.2',
    hardApy: '196.24%',
    type: 'Penguin',
    name: 'pendingPEFI',
  },
  {
    pid: 2,
    lpSymbol: 'PEFI-PNG LP',
    lpAddresses: {
      43113: '',
      43114: '0x1bb5541eccda68a352649954d4c8ece6ad68338d',
    },
    tokenSymbol: 'PNG',
    tokenAddresses: {
      43113: '',
      43114: '0x60781C2586D68229fde47564546784ab3fACA982',
    },
    strategyAddress: '0x323c5CC630c0ce1F2823D1A3D48260f770b5669B',
    quoteTokenSymbol: QuoteToken.PEFI,
    quoteTokenAddresses: contracts.pefi,
    withdrawalFee: '3.2',
    hardApy: '967.57%',
    type: 'Penguin',
    name: 'pendingPEFI',
  },
  {
    pid: 3,
    lpSymbol: 'PEFI-SNOB LP',
    lpAddresses: {
      43113: '',
      43114: '0x0b9753D73e1c62933e913e9c2C94f2fFa8236F6C',
    },
    tokenSymbol: 'SNOB',
    tokenAddresses: {
      43113: '',
      43114: '0xC38f41A296A4493Ff429F1238e030924A1542e50',
    },
    strategyAddress: '0xb6Cd0569563549033c129769dbC58d1843ed98cb',
    quoteTokenSymbol: QuoteToken.PEFI,
    quoteTokenAddresses: contracts.pefi,
    withdrawalFee: '3.2',
    hardApy: '1354.80%',
    type: 'Penguin',
    name: 'pendingPEFI',
  },
  {
    pid: 4,
    lpSymbol: 'PEFI-SUSHI LP',
    lpAddresses: {
      43113: '',
      43114: '0x8912a0fadf3588c6791e42310b549a7bc0047b0e',
    },
    tokenSymbol: 'SUSHI',
    tokenAddresses: {
      43113: '',
      43114: '0x39cf1BD5f15fb22eC3D9Ff86b0727aFc203427cc',
    },
    strategyAddress: '0x9acBcA2315a517a3Dab8e857f5921A8B3435891A',
    quoteTokenSymbol: QuoteToken.PEFI,
    quoteTokenAddresses: contracts.pefi,
    withdrawalFee: '3.2',
    hardApy: '1347.55%',
    type: 'Penguin',
    name: 'pendingPEFI',
  },
  {
    pid: 5,
    lpSymbol: 'PEFI-DAI LP',
    lpAddresses: {
      43113: '',
      43114: '0x94DF699f8AA08314cBdfcca7dD6cfAA5AB9E8e26',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      43113: '',
      43114: '0xbA7dEebBFC5fA1100Fb055a87773e1E99Cd3507a',
    },
    strategyAddress: '0xdF5fb3FA0161a8508599a6dFC9d6C004Cb58652b',
    quoteTokenSymbol: QuoteToken.PEFI,
    quoteTokenAddresses: contracts.pefi,
    withdrawalFee: '4',
    hardApy: '300.35%',
    type: 'Penguin',
    name: 'pendingPEFI',
  },
  {
    pid: 6,
    lpSymbol: 'PEFI-LINK LP',
    lpAddresses: {
      43113: '',
      43114: '0x2656e72C5E07711E8d697C7B1009e31174c6DF66',
    },
    tokenSymbol: 'LINK',
    tokenAddresses: {
      43113: '',
      43114: '0xB3fe5374F67D7a22886A0eE082b2E2f9d2651651',
    },
    strategyAddress: '0x1AD8FF956247F87de904F31B0322843F32F19A5C',
    quoteTokenSymbol: QuoteToken.PEFI,
    quoteTokenAddresses: contracts.pefi,
    withdrawalFee: '4',
    hardApy: '300.35%',
    type: 'Penguin',
    name: 'pendingPEFI',
  },
  // gondola
  {
    pid: 7,
    lpSymbol: 'ETH-ZETH LP',
    lpAddresses: {
      43113: '',
      43114: '0xc37ECFA7Bbf1dF92Da7C4A3d92d8CF8657D1FF7f',
    },
    tokenSymbol: QuoteToken.ZETH,
    tokenAddresses: contracts.zeth,
    strategyAddress: '0xB4558486cd8fd2DD5E3B078E7822c1Bb66C782d0',
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAddresses: {
      43113: '',
      43114: '0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15',
    },

    // tokenSymbol: 'ETH',
    // tokenAddresses: {
    //   43113: '',
    //   43114: '0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15',
    // },

    withdrawalFee: '3.2',
    hardApy: '1354.80%',
    type: 'Gondola',
    name: 'pendingGondola',
  },
  {
    pid: 8,
    lpSymbol: 'USDT-ZUSDT LP',
    lpAddresses: {
      43113: '',
      43114: '0xE586dB7Db75B87A3E84110a73b99960F5f106c6A',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      43113: '',
      43114: '0xde3A24028580884448a5397872046a019649b084',
    },
    strategyAddress: '0x85fc4ec9dee0DF5060f321B743838F7068499177',
    quoteTokenSymbol: QuoteToken.ZUSDT,
    quoteTokenAddresses: contracts.zusdt,
    withdrawalFee: '3.2',
    hardApy: '1347.55%',
    type: 'Gondola',
    name: 'pendingGondola',
  },
  // lydia
  {
    pid: 2,
    lpSymbol: 'AVAX-ETH LP',
    lpAddresses: {
      43113: '',
      43114: '0x58128aB3EcBF703682EDe72f341944BFfe3524b9',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      43113: '',
      43114: '0xf20d962a6c8f70c731bd838a3a388D7d48fA6e15',
    },
    strategyAddress: '0xd6Da9D000FfA1ea6D3939fCD80f4d473f2027567',
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAddresses: contracts.wavax,
    withdrawalFee: '4',
    hardApy: '300.35%',
    type: 'Lydia',
    name: 'pendingLyd',
  },
  {
    pid: 3,
    lpSymbol: 'LYD-USDT LP',
    lpAddresses: {
      43113: '',
      43114: '0x752C59f22fAAA861108649F4596034796C69bC3f',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      43113: '',
      43114: '0xde3A24028580884448a5397872046a019649b084',
    },
    strategyAddress: '0x4EC41D1E25925c57876885c34Fe0b323D7CC3846',
    quoteTokenSymbol: QuoteToken.LYD,
    quoteTokenAddresses: contracts.lyd,
    withdrawalFee: '4',
    hardApy: '300.35%',
    type: 'Lydia',
    name: 'pendingLyd',
  },
  {
    pid: 7,
    lpSymbol: 'LYD-PNG LP',
    lpAddresses: {
      43113: '',
      43114: '0x161f750b753c7120599d07c352607F458ecB918e',
    },
    tokenSymbol: 'PNG',
    tokenAddresses: {
      43113: '',
      43114: '0x60781C2586D68229fde47564546784ab3fACA982',
    },
    strategyAddress: '0x7dD48db5372539d01Ed4b6cC525403d98BC61Bdd',
    quoteTokenSymbol: QuoteToken.LYD,
    quoteTokenAddresses: contracts.lyd,
    withdrawalFee: '3.2',
    hardApy: '1347.55%',
    type: 'Lydia',
    name: 'pendingLyd',
  },
  // Pangolin
  {
    lpSymbol: 'AVAX-PNG LP',
    lpAddresses: {
      43113: '',
      43114: '0xd7538cABBf8605BdE1f4901B47B8D42c61DE0367',
    },
    tokenSymbol: 'AVAX',
    tokenAddresses: {
      43113: '',
      43114: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    },
    strategyAddress: '0xbE42a57f4A08636C26457475e94409516fA39b3B',
    stakingAddress: '0x574d3245e36Cf8C9dc86430EaDb0fDB2F385F829',
    quoteTokenSymbol: QuoteToken.PNG,
    quoteTokenAddresses: contracts.png,
    withdrawalFee: '4',
    hardApy: '300.35%',
    type: 'Pangolin',
    name: 'pendingPangolin',
  },
  {
    pid: 3,
    lpSymbol: 'AVAX-ETH LP',
    lpAddresses: {
      43113: '',
      43114: '0x1aCf1583bEBdCA21C8025E172D8E8f2817343d65',
    },
    tokenSymbol: 'AVAX',
    tokenAddresses: {
      43113: '',
      43114: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    },
    strategyAddress: '0xFC8deac2f93E5B4739ECe2802e5c5e05106fd872',
    stakingAddress: '0x417C02150b9a31BcaCb201d1D60967653384E1C6',
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAddresses: contracts.eth,
    withdrawalFee: '4',
    hardApy: '300.35%',
    type: 'Pangolin',
    name: 'pendingPangolin',
  },
  {
    pid: 7,
    lpSymbol: 'AVAX-LINK LP',
    lpAddresses: {
      43113: '',
      43114: '0xbbC7fFF833D27264AaC8806389E02F717A5506c9',
    },
    tokenSymbol: QuoteToken.LINK,
    tokenAddresses: contracts.link,
    strategyAddress: '0xc90b9A965c800A0318ec4282A86E387BeeEF0ffE',
    stakingAddress: '0xBDa623cDD04d822616A263BF4EdbBCe0B7DC4AE7',
    quoteTokenSymbol: QuoteToken.AVAX,
    quoteTokenAddresses: contracts.wavax,
    withdrawalFee: '3.2',
    hardApy: '1347.55%',
    type: 'Pangolin',
    name: 'pendingPangolin',
  },
]

export default farms
