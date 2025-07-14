import { test,expect } from '@playwright/test';
import { console } from 'inspector';
test("Practice Test 1",async({page})=>{
console.log("starting practice test 1");
await page.goto("https://www.saucedemo.com/");
console.log(await page.title());
expect(page).toHaveTitle("Swag Labs");
console.log("End Practice Test 1")
});
test("Practice Test 2",async({page})=>{
console.log("starting practice test 2");
await page.goto("https://www.saucedemo.com/");
console.log(await page.title());
expect(page).toHaveTitle("Swag Labs");
console.log("End Practice Test 2")
});
test("Practice Test 3",async({page})=>{
console.log("starting practice test 3");
await page.goto("https://www.saucedemo.com/");
console.log(await page.title());
expect(page).toHaveTitle("Swag Labs");
console.log("End Practice Test 3")
});
test.describe("Practice of describe",async() =>{

test("Practice Test 4",async({page})=>{
console.log("starting practice test 4");
await page.goto("https://www.saucedemo.com/");
console.log(await page.title());
expect(page).toHaveTitle("Swag Labs");
console.log("End Practice Test 4")
})
test("Practice Test 5",async({page})=>{
console.log("starting practice test 5");
await page.goto("https://www.saucedemo.com/");
console.log(await page.title());
expect(page).toHaveTitle("Swag Labs");
console.log("End Practice Test 5")
})
test("Practice Test 6",async({page})=>{
console.log("starting practice test 6");
await page.goto("https://www.saucedemo.com/");
console.log(await page.title());
expect(page).toHaveTitle("Swag Labs");
console.log("End Practice Test 6")
})
test("Practice Test 7",async({page})=>{
console.log("starting practice test 7");
await page.goto("https://www.saucedemo.com/");
console.log(await page.title());
expect(page).toHaveTitle("Swag Labs");
console.log("End Practice Test 7")
})
})
