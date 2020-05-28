package steps
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
import internal.GlobalVariable
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.When

public class orderSteps {

	@Given("user is on account section of application")
	public void user_is_on_account_section_of_application() {

		Mobile.startApplication('C:\\Users\\owner\\Downloads\\ShopClues Online Shopping App_v3.6.3_apkpure.com.apk', true)

		Mobile.tap(findTestObject('android.widget.TextView0 - Account'), 10)
	}

	@When("user enters \"([^\"]*)\" and \"([^\"]*)\" then logs in")
	public void user_enters_and_then_logs_in(String emailId, String pass) {

		Mobile.tap(findTestObject('android.widget.Button0 - Sign in'), 10)

		Mobile.pressBack()

		Mobile.setText(findTestObject('android.widget.EditText0 - Enter your mobile number or email id'), emailId,
				10)

		Mobile.tap(findTestObject('android.widget.TextView0 - Login via Password'), 10)

		Mobile.setText(findTestObject('android.widget.EditText0 - Enter your password'), pass, 10)

		Mobile.tap(findTestObject('android.widget.TextView0 - Login'), 10)

		Mobile.tap(findTestObject('android.widget.Button0 - OK'), 10)

		Mobile.tap(findTestObject('android.widget.TextView0 - Skip'), 10)
	}

	@Then("user navigate to categories-mobile section")
	public void user_navigate_to_categories_mobile_section() {

		Mobile.tap(findTestObject('android.widget.TextView0 - Categories'), 10)

		Mobile.tap(findTestObject('android.view.View0 - Mobiles  Tablets'), 10)

		Mobile.tap(findTestObject('android.view.View0 - Smartphones'), 10)
	}

	@Then("user sorts price-High to low and select smartphone")
	public void user_sorts_price_High_to_low_and_select_smartphone() {

		Mobile.tap(findTestObject('android.widget.TextView0 - Sort'), 20)

		Mobile.tap(findTestObject('android.widget.TextView0 - Price High to Low'), 10)

		Mobile.tap(findTestObject('android.widget.TextView0 - Apple Iphone X 64 Gb (3 Gb64 Gbspace Grey)'), 10)
	}

	@Then("user enters \"([^\"]*)\" to check availability")
	public void user_enters_to_check_availability(String pinCode) {

		Mobile.setText(('Object Repository/android.widget.EditText0 - Enter pincode to check delivery'), pinCode, 10)
		Mobile.tap(findTestObject('Object Repository/android.widget.Button0 - Check'),10)
		Mobile.verifyElementText(findTestObject('Object Repository/android.widget.TextView0 - Item is available on'), "Item is available on")
	}

	@Then("user adds the item to cart and navigate to cart")
	public void user_adds_the_item_to_cart_and_navigate_to_cart() {

		Mobile.tap(findTestObject('Object Repository/android.widget.Button0 - ADD TO CART'),10)
		Mobile.tap(findTestObject('Object Repository/cart'),10)
	}

	@Then("user checks item and enters \"([^\"]*)\" required")
	public void user_checks_item_and_enters_required(String quantity) {

		Mobile.verifyElementText(findTestObject('Object Repository/Confirm'), "Place Order")
		Mobile.setText(findTestObject('Object Repository/quantity'), quantity, 10)
	}

	@Then("user closes application")
	public void user_closes_application() {
		Mobile.closeApplication()
	}
}
