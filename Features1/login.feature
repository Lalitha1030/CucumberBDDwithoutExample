Feature: Publix Login Feature



Scenario: Publix login Test Scenario
	Given User is already on login page
	When Title of login page is from publix
	Then user enters "lalithakolla@gmail.com" and "Similacpublix1"
	Then user clicks on login button
	Then user is on home page
	Then user moves to savings page to check weekly ad
	Then user closes the browser

# with example
#Scenario Outline: Publix login Test Scenario	
#	Given User is already on login page
#	When Title of login page is from publix
#	Then user enters "<username>" and "<password>"
#	Then user clicks on login button
#	Then user is on home page
#	Then user moves to savings page to check weekly ad
#	Then user closes the browser	
#Examples:
#	| username				  | password|      |firstname|lastname|position|
#	| lalithakolla@gmail.com  | Similacpublix1|
#	| lalitha_kolla@yahoo.com | Simmipub01|