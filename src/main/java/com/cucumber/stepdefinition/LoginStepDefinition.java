package com.cucumber.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {
	WebDriver  driver;

	/*
	  @Given("^User is already on login page$")
	 	public void user_is_already_on_login_page()  {
		
		System.setProperty("Webdriver.gecko.driver", "C:/Selenium/geckodriver-v0.26.0-win32/geckodriver.exe");
		driver = new FirefoxDriver();
		driver.get("https://www.publix.com/login");
	    
	}
*/
	
		
		@Given("^User is already on login page$")
		public void user_is_already_on_login_page(){
			System.setProperty("webdriver.gecko.driver", "C:\\Selenium\\geckodriver-v0.26.0-win32\\geckodriver.exe");
			//DesiredCapabilities capabilities = DesiredCapabilities.firefox();
			//capabilities.setCapability("marrionette", true);
			//driver = new FirefoxDriver(capabilities);
			driver = new FirefoxDriver();
			driver.get("https://www.publix.com/login");
			
		}
	
		@When("^Title of login page is from publix$")
		public void title_of_login_page_is_from_publix()  {
	    String title = driver.getTitle();
	    System.out.println("Page Title:   "+title);
	    //Assert.assertEquals("Sign In", title);
	   
	}
//1.	\”(.*)\”    
//2.	\”([^\”]*)\”

		
	@Then("^user enters \"(.*)\" and \"(.*)\"$")
	public void user_enters(String username, String password)   {
		
		driver.findElement(By.xpath("//input[@id='tmpUserNameInput']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@id='passwordInput']")).sendKeys(password);
		
	    
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button()  {
		//javascript executor is class we have to cost out driver into executor.To execute javascript code
		WebElement loginBtn= driver.findElement(By.xpath("//span[@id='submitButton']"));
		JavascriptExecutor jse = (JavascriptExecutor)driver;
		jse.executeScript("arguments[0].click();", loginBtn);
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page()  {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("Sign In", title);
	   
	}
	
	@Then("^user moves to savings page to check weekly ad$")
	public void user_moves_to_savings_page_to_check_weekly_ad() throws Throwable {
	    Actions action = new Actions(driver);
	    action.moveToElement(driver.findElement(By.xpath("//div[@id='dropdown-menu-10']//a[contains(@class,'level-1')]"))).build().perform();
	    Thread.sleep(2000);
	    driver.findElement(By.xpath("//div[@id='dropdown-content_17']//ul[@class='multi-layer-menu']//li[@class='menu-subsection level-2']//div//span[contains(text(),'Weekly Ad')]")).click();
		
	}

	@Then("^user closes the browser$")
	public void user_closes_the_browser() throws Throwable {
	    driver.quit();
	}

	
}
