import {test, expect} from '@playwright/test';
test('Browser Playwright test', async ({browser}) =>
{
    //chrome -plugins/ cookies
    const context =await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.w3schools.com/");

});


test('Automating rahulshetty training page', async ({browser}) =>
{
     const context =await browser.newContext();
     const page = await context.newPage();
     const userName = page.locator("#username");
     const signIn = page.locator("#signInBtn");
     const cardTitles = page.locator(".card-body a");
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
     console.log(await page.title());
     //css
     await userName.fill("rahulshetty");
     await page.locator("#password").fill("Learning@830$3mK2");
     await page.locator("#signInBtn").click();
     console.log(await page.locator("[style*='block']").textContent());
     await expect(page.locator("[style*='block']")).toContainText('Incorrect username/password.');
      await userName.clear();
      await userName.fill("rahulshettyacademy");
      await signIn.click();
      console.log(await cardTitles.first().textContent());
      console.log(await cardTitles.nth(1).textContent());
      const allTitles = await cardTitles.allTextContents();
      console.log(allTitles);      
     
     });

test('Automating rahulshetty lets shop page', async ({browser}) =>
{
     const context =await browser.newContext();
     const page = await context.newPage();
     const userEmail = page.locator("#userEmail");
     const logIn = page.locator("#login");
     const cardTitles = page.locator(".card-body b");
     await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
     console.log(await page.title());
     //css
     await userEmail.fill("june@gmail.com");
     await page.locator("#userPassword").fill("Learning2.");
     await logIn.click();
     console.log(await page.locator("#res").textContent());
     await expect(page.locator("#res")).toContainText('Showing 5 results');
      console.log(await cardTitles.first().textContent());
      console.log(await cardTitles.nth(1).textContent());
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
     await userEmail.fill("sep@gmail.com");
     await password.fill("Learning2.");
     await confirmPassword.fill("Learning2.");
     await checkbox.click();
     await logIn.click();
     await loginBtn.click();
     await userEmail.fill("sep@gmail.com");
     await password.fill("Learning2.");
     await logIn.click();
     console.log(await page.locator("#res").textContent());
     await expect(page.locator("#res")).toContainText('Showing 5 results');
      console.log(await cardTitles.first().textContent());
      console.log(await cardTitles.nth(1).textContent());
      const allTitles = await cardTitles.allTextContents();
      console.log(allTitles);      
     
     });
     

test('Local Playwright test', async ({browser,page}) =>
{
     await page.goto("http://localhost:81/");


});

test.use({ignoreHTTPSErrors: true});

test('LIMS Playwright test', async ({browser,page}) =>
{
     await page.goto("https://10.92.134.39/");
     console.log(await page.title());
    await expect(page).toHaveTitle("DEDALUS - LIMS");
});

test('Automating rahulshetty sample training page', async ({browser}) =>
{
     const context =await browser.newContext();
     const page = await context.newPage();
     const userName = page.locator("#username");
     const signIn = page.locator("#signInBtn");
     const cardTitles = page.locator(".card-body a");
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
     console.log(await page.title());
     //css
     await userName.fill("rahulshetty");
     await page.locator("#password").fill("Learning@830$3mK2");
     await page.locator("#signInBtn").click();
     console.log(await page.locator("[style*='block']").textContent());
     await expect(page.locator("[style*='block']")).toContainText('Incorrect username/password.');
      await userName.clear();
      await userName.fill("rahulshettyacademy");
      await signIn.click();
      console.log(await cardTitles.first().textContent());
      console.log(await cardTitles.nth(1).textContent());
      const allTitles = await cardTitles.allTextContents();
      console.log(allTitles);      
     
     });

test('Automating dropdown and checkbox', async ({page}) =>
{        
     const documentLink = page.locator("[href*='documents-request']");
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
     await page.locator("select.form-control").selectOption("teach");
     await page.locator(".radiotextsty").last().click();
     await page.locator("#okayBtn").click();
     console.log(await page.locator(".radiotextsty").last().isChecked());
     await expect(page.locator(".radiotextsty").last()).toBeChecked();
     await page.locator("#terms").click();
     await expect(page.locator("#terms")).toBeChecked();
     await page.locator("#terms").uncheck();
     expect(await page.locator("#terms").isChecked()).toBeFalsy();
     await expect (documentLink).toHaveAttribute("class", "blinkingText");
     
     //pause to open the inspector
     //await page.pause();
     });

     test.only('child tab handles', async ({browser}) =>
{ 
     const context =await browser.newContext();
     const page = await context.newPage();
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");    
     const documentLink = page.locator("[href*='documents-request']");

     const [newPage] = await Promise.all([
     context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
     documentLink.click(),
    ])//new page opened

     const text = await newPage.locator(".red").textContent(); //static value
     const arrayText = text.split("@")
     const domain = arrayText[1].split(" ")[0]
     //console.log(domain);
     await page.locator("#username").fill(domain);
     //await page.pause();
     console.log(await page.locator("#username").inputValue());//dynamic update on the field
     
     });

     