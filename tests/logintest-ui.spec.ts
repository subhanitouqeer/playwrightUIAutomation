// import { LoginPage} from '../pages/loginPage';
import { test, expect  } from '../fixtures/supaeradminLoginFixture';

test('Logging into myCare with fixture', async({ superadminUser }) => {
  await expect(superadminUser).toHaveURL(/admin\/landing/); 
});