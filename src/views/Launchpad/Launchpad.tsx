import React from 'react'
import styled from 'styled-components'
// import { ButtonMenu, ButtonMenuItem, Flex } from 'penguinfinance-uikit2'
import useTheme from 'hooks/useTheme'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import StakeCard from './components/StakeCard/StakeCard'
import YourTierCard from './components/YourTierCard/YourTierCard'
import SherpaCard from './components/SherpaCard/SherpaCard'

const Launchpad: React.FC = () => {
  const { isDark } = useTheme()

  //   const [activeTab, setActiveTab] = useState(0)

  //   const handleSwitchTab = (tab) => {
  //     setActiveTab(tab)
  //   }

  return (
    <LaunchpadPage>
      <LaunchpadBgContainer />
      <IgloosBannerContainer>
        <BannerImage
          src={
            isDark
              ? `${process.env.PUBLIC_URL}/images/launchpad/banners/launchpad_banner_dark.png`
              : `${process.env.PUBLIC_URL}/images/launchpad/banners/launchpad_banner_light.png`
          }
          alt="launchpad banner"
        />
      </IgloosBannerContainer>
      {/* <Flex justifyContent="center" pb="32px">
        <ButtonMenu activeIndex={activeTab} onItemClick={handleSwitchTab} scale="sm">
          <OptionItem>Next</OptionItem>
          <OptionItem>Past</OptionItem>
        </ButtonMenu>
      </Flex> */}
      <CardLayout>
        <SherpaCard />
        <StakeCard />
        <YourTierCard />
      </CardLayout>
    </LaunchpadPage>
  )
}

const LaunchpadPage = styled(Page)`
  max-width: 1200px;
`

const LaunchpadBgContainer = styled.div`
  background-image: url(/images/launchpad/launchpad_background.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: absolute;
  top: 0px;
  bottom: 0px;
  right: 0px;
  left: 0px;
  z-index: -1;
`

// banner
const IgloosBannerContainer = styled.div`
  margin-bottom: 32px;

  @media (min-width: 1200px) {
    margin-bottom: 60px;
  }
`
const BannerImage = styled.img`
  z-index: -1;
`

// const OptionItem = styled(ButtonMenuItem)`
//   min-width: 100px;
// `

const CardLayout = styled(FlexLayout)`
  & > * {
    margin: 0 8px;
    margin-bottom: 32px;
    width: 100%;

    @media (min-width: 640px) {
      min-width: 320px;
      max-width: 50%;
      width: unset;
    }
    @media (min-width: 768px) {
      min-width: 320px;
      // max-width: 31.5%;
      max-width: 340px;
      width: 100%;
    }
  }
  @media (min-width: 992px) {
    justify-content: space-around;
  }
  @media (min-width: 1450px) {
    justify-content: space-between;
  }
`

export default Launchpad
