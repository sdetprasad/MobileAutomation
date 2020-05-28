package steps
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI

import internal.GlobalVariable

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When



class InvLoginSteps {

	@Given("user is on application homepage")
	public void user_is_on_application_homepage() {
		Mobile.startApplication('C:\\Users\\owner\\Downloads\\ShopClues Online Shopping App_v3.6.3_apkpure.com.apk', true)
	}

	@When("user navigates to account section")
	public void user_navigates_to_Account_Section() {

		Mobile.tap(findTestObject('android.widget.TextView0 - Account'), 5)

		Mobile.tap(findTestObject('android.widget.Button0 - Sign in'), 5)

		Mobile.pressBack()
	}

	@Then("user enters the \"([^\"]*)\" and \"([^\"]*)\" and hits login")
	public void user_enters_the_and_and_hits_login(String userId, String password) {

		Mobile.setText(findTestObject('android.widget.EditText0 - Enter your mobile number or email id'), userId,
				5)

		Mobile.tap(findTestObject('android.widget.TextView0 - Login via Password'), 5)

		Mobile.setText(findTestObject('android.widget.EditText0 - Enter your password'), password, 5)

		Mobile.tap(findTestObject('android.widget.TextView0 - Login'), 5)
	}

	@Then("verify user unable to login and still on login page")
	public void verify_user_unable_to_login_and_still_on_login_page() {

		Mobile.verifyElementText(findTestObject('loginPage'), "Login to Shopclues")
	}

	@Then("^close the application")
	public void close_the_application() {

		Mobile.closeApplication()
	}
}