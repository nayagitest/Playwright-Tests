import {test, expect} from '@playwright/test';

test.only('Automating rahulshetty lets shop page', async ({browser,page}) =>
{
      const userEmail = page.locator("#userEmail");
     const logIn = page.locator("#login");
     const cardTitles = page.locator(".card-body b");
     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
     console.log(await page.title());
     //css
     await userEmail.fill("july@gmail.com");
     await page.locator("#userPassword").fill("Learning2.");
     await logIn.click();
     //await page.locator("#res").waitFor();
     console.log(await page.locator("#res").textContent());
     //await page.waitForLoadState('networkidle')
      const allTitles = await cardTitles.allTextContents();
      console.log(allTitles);      
     
     });

test('Automating rahulshetty page', async ({browser}) =>
{
     const context =await browser.newContext();
     const page = await context.newPage();
     const resetLink = page.locator(".btn1");
     const firstName = page.locator("#firstName");
     const lastName = page.locator("#lastName");
    const userEmail = page.locator("#userEmail");
     const userMobile = page.locator("#userMobile");
      const password =page.locator("#userPassword");
      const confirmPassword =page.locator("#confirmPassword");
      const checkbox = page.locator("[type ='checkbox']");     
     const logIn = page.locator("#login");
     const alreadyLogin = page.locator("[value='Register']");
     const loginBtn = page.locator("[class='btn btn-primary']");
     const cardTitles = page.locator(".card-body b");
     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
     console.log(await page.title());
     //css
     await resetLink.click();
     await firstName.fill("training");
     await lastName.fill("method");
     await userMobile.fill("7656656787");
     await userEmail.fill("oct@gmail.com");
     await password.fill("Learning2.");
     await confirmPassword.fill("Learning2.");
     await checkbox.click();
     await logIn.click();
     await loginBtn.click();
     await userEmail.fill("oct@gmail.com");
     await password.fill("Learning2.");
     await logIn.click();
     console.log(await page.locator("#res").textContent());
     await expect(page.locator("#res")).toContainText('Showing 5 results');
      console.log(await cardTitles.first().textContent());
      console.log(await cardTitles.nth(1).textContent());
      const allTitles = await cardTitles.allTextContents();
      console.log(allTitles);      
     
     });
     

