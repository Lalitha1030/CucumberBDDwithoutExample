package com.cucumber.bdd;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features = "/Users/kollas/workspace1/CucumberBDDwithoutExample/Features1/login.feature",
		glue = {"com.cucumber.stepdefinition"},
		format = {"pretty", "html:test-output", "json:json-output.json"},
		//snippets = SnippetType.CAMELCASE, // to change code snippets without underscore then use this option 
		monochrome= true,
		strict = true,
		dryRun = false
		
		
		
		)


public class TestRunner {

	//By default code snippets are in underscore style(SnippetType.UNDERSCORE) ,
}
