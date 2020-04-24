package com.cucumber.bdd;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features = "/Users/kollas/workspace1/CucumberBDDwithoutExample/Features/tagsdata.feature",
		glue = {"com.cucumber.stepdefinition"},
		//format = {"pretty", "html:test-output", "json:json-output.json"},
		monochrome= true,
		//strict = true,
		dryRun = true
		
		
		)
public class TagsRunner {

}
