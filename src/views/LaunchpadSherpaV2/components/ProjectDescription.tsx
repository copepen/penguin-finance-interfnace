import React from 'react'
import styled from 'styled-components'
import { Text, Flex } from 'penguinfinance-uikit2'
import Page from 'components/layout/Page'

// const TOKEN_SALES_ECONOMICS = [
//   { label: 'Hard Cap', value: 'Hard Cap' },
//   { label: 'Total Token Supply', value: 'Total Token Supply' },
//   { label: 'Initial Circulating Supply', value: 'Initial Circulating Supply' },
//   { label: 'Public Sale Token Price', value: 'Public Sale Token Price' },
//   { label: 'Tokens Offered', value: 'Tokens Offered' },
//   { label: 'Hard Cap Per User', value: 'Hard Cap Per User' },
//   { label: 'Token Sale Vesting Period', value: 'Token Sale Vesting Period' },
//   { label: 'Token Type', value: 'Token Type' },
//   { label: 'Token Distribution', value: 'Token Distribution' },
// ];
const TOKEN_SALES_ECONOMICS = [
  { label: 'Hard Cap', value: '10,000,000' },
  { label: 'Anonymity Mining', value: '3,700,000' },
  { label: 'DAO Treasury', value: '1,500,000' },
  { label: 'zkDAO', value: '1,600,000' },
  { label: 'Initial Token Sale', value: '2,000,000' },
  { label: 'Airdrops', value: '600,000' },
  { label: 'Bounties', value: '500,000' },
  { label: 'Airdrop to Tornado Cash', value: '100,000' }
];

const ProjectDescription = () => {
  return (
    <Container>
      <MaskBgContainer />
      <LaunchpadPage>
        <HeaderTitle fontSize='34px' color='white' fontWeight={800}>About the Sherpa Project</HeaderTitle>
        <IntroductionImage src={`${process.env.PUBLIC_URL}/images/ido/introduction_sherpa.png`} />
        <Description fontSize='12px' lineHeight='16px' color='#b6b6b6' mt='52px'>
          Sherpa Cash is the first fully decentralized protocol for private transactions on Avalanche. The SHERPA token is the governance token for Sherpa Cash.
        </Description>
        {/* <Description fontSize='12px' lineHeight='16px' color='#b6b6b6' mt='24px'>
          Crabada, being an idle game means that you’ll be able to play it anytime and anywhere with minimal disruption to your everyday life. Additionally, Crabada provides its players with not only entertainment value, but financial value as well. Crabada is bringing forth a new revolution in play-and-earn games with its unique PvP (Player Versus Player)-infused idle gameplay.
        </Description> */}
        <Text fontSize='24px' color='white' fontWeight={800} mt='32px'>Token Sale and Economics</Text>
        <TokenSalesEconomics>
          {TOKEN_SALES_ECONOMICS.map((tokenEconomic, index) => {
            return (
              <TokenEconomic index={index} key={tokenEconomic.label}>
                <Text color='#A2A2A2' fontSize='15px' lineHeight='30px'>{tokenEconomic.label}</Text>
                <Text color='white' fontSize='15px' lineHeight='30px'>{tokenEconomic.value}</Text>
              </TokenEconomic>
            )
          })}
        </TokenSalesEconomics>
      </LaunchpadPage>
    </Container>
  )
}

const TokenEconomic = styled(Flex)<{ index: number }>`
  background: ${({ index }) => index % 2 === 0 ? '#412B5D' : '#28273C'};
  
  div {
    width: 50%;
    padding-left: 16px;
  }
`;

const TokenSalesEconomics = styled.div`
  border: 1px solid #412B5D;
  max-width: 480px;
  border-radius: 6px;
  margin-top: 32px;
`;

const IntroductionImage = styled.img`
  width: 100%;
  border-radius: 6px;
  margin-top: 52px;
`;

const Description = styled(Text)`
  font-family: 'Fira Code';
`;

const Container = styled.div`
  position: relative;
  padding-bottom: 60px;
`;

const HeaderTitle = styled(Text)`
  font-size: 26px;
  line-height: 1;
  @media (min-width: 640px) {
    font-size: 34px;
    line-height: 1.5;
  }
`;

const LaunchpadPage = styled(Page)`
  max-width: 940px;
  padding-top: 40px;

  @media (min-width: 640px) {
    padding-top: 60px;
  }

  @media (min-width: 968px) {
    padding-top: 100px;
  }
`;

const MaskBgContainer = styled.div`
  background-image: url('/images/ido/mask.png');
  background-size: cover;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  z-index: -1;
  background-color: ${({ theme }) => (theme.isDark ? '#2e2152' : '#483692')};
`;


export default ProjectDescription