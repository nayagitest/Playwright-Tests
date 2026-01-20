// @ts-check
import { defineConfig, devices } from '@playwright/test';

const config = defineConfig({
  testDir: './tests',
  timeout:30 *1000,
  expect: {
    timeout: 5000
  },
   reporter: 'html',
   
  use: {

    browserName: 'chromium',
    headless : false,
    
  },
   projects: [
    // Other projects (Chromium, Firefox, WebKit)
    /* {
      name: 'Microsoft Edge',
      use: { 
        ...devices['Desktop Edge'], 
        channel: 'msedge' 
      },
      ignoreHTTPSErrors: true,
      headless: false,
    }, */
    {
      name: 'chrome',
      use: {
        ...devices['Chrome']},
    },    
    ],
  });
export default config


