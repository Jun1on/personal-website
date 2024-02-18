import YoutubeIcon from 'public/icons/youtube.svg';
import TwitterIcon from 'public/icons/twitter.svg';
import DiscordIcon from 'public/icons/discord.svg';
import { ReactNode } from 'react';
import { ROUTES } from 'src/components/primitives/Link';
import { ENABLE_TESTNET } from 'src/utils/marketsAndNetworksConfig';

import { MarketDataType } from '../marketsConfig';

interface Navigation {
  link: string;
  title: string;
  isVisible?: (data: MarketDataType) => boolean | undefined;
  dataCy?: string;
}

export const navigation: Navigation[] = [
  {
    link: ROUTES.dashboard,
    title: `About`,
    dataCy: 'menuDashboard',
  },
  {
    link: ROUTES.markets,
    title: `Markets`,
    dataCy: 'menuMarkets',
  },
  {
    link: ROUTES.staking,
    title: `Stake`,
    dataCy: 'menuStake',
    isVisible: () =>
      process.env.NEXT_PUBLIC_ENABLE_STAKING === 'true' &&
      process.env.NEXT_PUBLIC_ENV === 'prod' &&
      !ENABLE_TESTNET,
  },
  {
    link: ROUTES.governance,
    title: `Governance`,
    dataCy: 'menuGovernance',
    // isVisible: () =>
    //   process.env.NEXT_PUBLIC_ENABLE_GOVERNANCE === 'true' &&
    //   process.env.NEXT_PUBLIC_ENV === 'prod' &&
    //   !ENABLE_TESTNET,
  },
  {
    link: ROUTES.faucet,
    title: `Faucet`,
    isVisible: () => process.env.NEXT_PUBLIC_ENV === 'staging' || ENABLE_TESTNET,
  },
];

interface MoreMenuItem extends Navigation {
  icon: ReactNode;
  makeLink?: (walletAddress: string) => string;
}

const moreMenuItems: MoreMenuItem[] = [
  {
    link: 'https://youtube.com/@jun',
    title: `YouTube`,
    icon: <YoutubeIcon />,
  },
  {
    link: 'https://twitter.com/Jun1on',
    title: `Twitter`,
    icon: <TwitterIcon />,
  },
  {
    link: 'https://discord.com/invite/HFMBXxXz2B',
    title: `Discord`,
    icon: <DiscordIcon />,
  },
];
export const moreNavigation: MoreMenuItem[] = [...moreMenuItems];
