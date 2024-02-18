import { Box } from '@mui/material';
import React, { ReactNode } from 'react';
import AnalyticsConsent from 'src/components/Analytics/AnalyticsConsent';
import { FORK_ENABLED } from 'src/utils/marketsAndNetworksConfig';

import { AppFooter } from './AppFooter';
import { AppHeader } from './AppHeader';
import TopBarNotify from './TopBarNotify';

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/*<TopBarNotify
        notifyText="Hello World! 🎉"
        learnMoreLink="https://app.aave.com/staking"
        buttonText="Click Here"
      />*/}
      <AppHeader />
      <Box component="main" sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        {children}
      </Box>

      {/*<AppFooter />
      {FORK_ENABLED ? null : <AnalyticsConsent />}*/}
    </>
  );
}
