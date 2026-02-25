import { test, expect  } from '../fixtures/loginFixtures';

test('Logging into myCare as superadmin user with fixture', async({ superadminUser }) => {
  await expect(superadminUser).toHaveURL(/admin\/landing/); 
});

test('Logging into myCare as msr user with fixture', async({ msrUser }) => {
  const msrDeskLocator = msrUser.getByText('MSR Desk');
  await expect(msrDeskLocator).toBeVisible({ timeout: 5000 });
});

test('Logging into myCare as provider user with fixture', async({ providerUser }) => {
  const providerDashboardLocator = providerUser.getByText('Provider Hub');
  await expect(providerDashboardLocator).toBeVisible({ timeout: 5000 });
});