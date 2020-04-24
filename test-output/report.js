$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/kollas/workspace1/CucumberBDDwithoutExample/Features1/login.feature");
formatter.feature({
  "line": 1,
  "name": "Publix Login Feature",
  "description": "",
  "id": "publix-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Publix login Test Scenario",
  "description": "",
  "id": "publix-login-feature;publix-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Title of login page is from publix",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters \"lalithakolla@gmail.com\" and \"Similacpublix1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user moves to savings page to check weekly ad",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 7153874508,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_from_publix()"
});
formatter.result({
  "duration": 5455439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lalithakolla@gmail.com",
      "offset": 13
    },
    {
      "val": "Similacpublix1",
      "offset": 42
    }
  ],
  "location": "LoginStepDefinition.user_enters(String,String)"
});
formatter.result({
  "duration": 130162911,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 22819068,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 9247864,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_moves_to_savings_page_to_check_weekly_ad()"
});
formatter.result({
  "duration": 84238772,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //div[@id\u003d\u0027dropdown-menu-10\u0027]//a[contains(@class,\u0027level-1\u0027)]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00274.0.0-alpha-3\u0027, revision: \u00278c567de6dc\u0027\nSystem info: host: \u0027SKOLLA-W54\u0027, ip: \u0027192.168.0.10\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 68.7.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200403171148, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 13320, moz:profile: C:\\Users\\kollas\\AppData\\Loc..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 6.1, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a31d83e6-bb70-44fc-86f9-a3eba7e9ed0c\n*** Element info: {Using\u003dxpath, value\u003d//div[@id\u003d\u0027dropdown-menu-10\u0027]//a[contains(@class,\u0027level-1\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:191)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:125)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:576)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:396)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat com.cucumber.stepdefinition.LoginStepDefinition.user_moves_to_savings_page_to_check_weekly_ad(LoginStepDefinition.java:80)\r\n\tat ✽.Then user moves to savings page to check weekly ad(/Users/kollas/workspace1/CucumberBDDwithoutExample/Features1/login.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});