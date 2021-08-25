import React, { useContext } from 'react'
import { Menu as UikitMenu, useModal } from 'penguinfinance-uikit2'
import { useWeb3React } from '@web3-react/core'
import BigNumber from 'bignumber.js'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import useTokenBalance from 'hooks/useTokenBalance'
import { usePricePefiUsdt, usePools, useEmperor } from 'state/hooks'
import { getPefiAddress, getXPefiAddress, getIPefiAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import WalletConnectGuideModal from 'components/Modal/WalletConnectGuideModal'
import SettingModal from 'components/Modal/SettingModal'
import { config, socials } from './config'

const Menu = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const pefiPriceUsd = usePricePefiUsdt()
  const pools = usePools(account)
  const pefiBalance = useTokenBalance(getPefiAddress())
  const xPefiBalance = useTokenBalance(getXPefiAddress())
  const iPefiBalance = useTokenBalance(getIPefiAddress())
  const avaxBalance = useTokenBalance()

  const pefiPool = pools.length > 0 ? pools[0] : null
  const { myEmperor } = useEmperor()
  const myNickname = myEmperor.nickname

  const getXPefiToPefiRatio = (pool) => {
    return pool.totalStaked && pool.totalSupply
      ? new BigNumber(pool.totalStaked).div(new BigNumber(pool.totalSupply)).toJSON()
      : 1
  }

  const [onToggleSettingModal] = useModal(<SettingModal />)

  const xPefiToPefiRatio = getXPefiToPefiRatio(pefiPool)

  // add badge to "emperor" and "launchpad" menu
  const isEmperorLive = false // event status
  const isLaunchpadLive = false // event status
  const isCollectiblesNew = true // event status

  const links = [...config]
  const emperorIndex = links.findIndex((link) => link.label === 'Emperor')
  const launchpadIndex = links.findIndex((link) => link.label === 'Launchpad')
  const collectiblesIndex = links.findIndex((link) => link.label === 'Collectibles')

  links[emperorIndex] = {
    ...links[emperorIndex],
    badge: isEmperorLive ? 'LIVE' : 'SOON',
  }
  links[collectiblesIndex] = {
    ...links[collectiblesIndex],
    badge: isCollectiblesNew ? 'NEW' : '',
  }

  return (
    <>
      <WalletConnectGuideModal />
      <UikitMenu
        account={account}
        nickname={myNickname || ''}
        login={login}
        logout={logout}
        isDark={isDark}
        toggleTheme={toggleTheme}
        currentLang={selectedLanguage && selectedLanguage.code}
        langs={allLanguages}
        setLang={setSelectedLanguage}
        penguinPriceUsd={pefiPriceUsd.toNumber()}
        pefiRatio={Number(xPefiToPefiRatio)}
        iPefiRatio={Number(xPefiToPefiRatio)}
        links={links}
        socials={socials}
        onSettingClick={onToggleSettingModal}
        pefiBalance={getBalanceNumber(pefiBalance).toFixed(3)}
        xPefiBalance={getBalanceNumber(xPefiBalance).toFixed(3)}
        iPefiBalance={getBalanceNumber(iPefiBalance).toFixed(3)}
        avaxBalance={getBalanceNumber(avaxBalance).toFixed(3)}
        // profile={{
        //   username: profile?.username,
        //   image: profile?.nft ? `/images/nfts/${profile.nft?.images.sm}` : undefined,
        //   profileLink: '/profile',
        //   noProfileLink: '/profile',
        //   showPip: !profile?.username,
        // }}
        {...props}
      />
    </>
  )
}

export default Menu
