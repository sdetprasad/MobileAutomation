import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When
import internal.GlobalVariable

public class loginSteps {


	@Given("User is on the application Homepage")
	public void user_is_on_the_application_Homepage() {
		Mobile.startApplication('C:\\Users\\owner\\Downloads\\ShopClues Online Shopping App_v3.6.3_apkpure.com.apk', true)
	}

	@When("user navigates to Account Section")
	public void user_navigates_to_Account_Section() {

		Mobile.tap(findTestObject('android.widget.TextView0 - Account'), 5)

		Mobile.tap(findTestObject('android.widget.Button0 - Sign in'), 5)

		Mobile.pressBack()
	}

	@Then("user enters credentials and hits Login")
	public void user_enters_credentials_and_hits_Login() {

		Mobile.setText(findTestObject('android.widget.EditText0 - Enter your mobile number or email id'), 'shekhar1237@gmail.com',
				5)

		Mobile.tap(findTestObject('android.widget.TextView0 - Login via Password'), 5)

		Mobile.setEncryptedText(findTestObject('android.widget.EditText0 - Enter your password'), 'K9UX314tQyr2S0lGlOYlEQ==', 5)

		Mobile.tap(findTestObject('android.widget.TextView0 - Login'), 5)

		Mobile.tap(findTestObject('android.widget.Button0 - OK'), 5)

		Mobile.tap(findTestObject('android.widget.TextView0 - Skip'), 5)
	}

	@Then("verify MyOrders section is present")
	public void verify_MyOrders_section_is_present() {

		Mobile.verifyElementText(findTestObject('Object Repository/android.widget.TextView0 - My Orders'),"My Orders")
	}

	@Then("closes the application")
	public void closes_the_application() {

		Mobile.closeApplication()
	}
}
