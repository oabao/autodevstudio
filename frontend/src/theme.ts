// frontend/src/theme.ts

import { ThemeConfig } from 'antd';

export const theme: ThemeConfig = {
  token: {
    // Colors
    colorPrimary: '#00B96B', // A vibrant, techy green
    colorInfo: '#00B96B',
    colorBgBase: '#F0F2F5', // Light grey background
    colorTextBase: '#141414', // Dark text for readability

    // Typography
    fontFamily: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji'`,
  },
  components: {
    Layout: {
      headerBg: '#ffffff',
      siderBg: '#001529', // A dark sider for contrast
    },
    Button: {
      primaryShadow: '0 2px 0 rgba(0, 185, 107, 0.15)',
    },
  },
};

export const logo = {
  // Placeholder for the logo
  // In a real app, this would be an SVG or image URL
  // For now, we can use a simple text logo
  text: 'AutoDevStudio',
};
