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

public class flipkartSteps {

	@Given("user has opended Flipkart application")
	public void user_has_opended_Flipkart_application() {

		Mobile.startApplication('C:\\Users\\owner\\Downloads\\flipkart_6.17_androidapksbox.apk', true)

		Mobile.tap(findTestObject('FlipkartObjects/android.widget.Button0 - NONE OF THE ABOVE'), 5)

		Mobile.tap(findTestObject('FlipkartObjects/android.widget.ImageView0 (2)'), 5)
	}

	@When("user navigates to categories-electronics-mobile")
	public void user_navigates_to_categories_electronics_mobile() {

		Mobile.tap(findTestObject('FlipkartObjects/android.widget.ImageButton0 (1)'), 5)

		Mobile.tap(findTestObject('FlipkartObjects/android.widget.TextView0 - Electronics (1)'), 5)

		Mobile.tap(findTestObject('FlipkartObjects/android.widget.TextView0 - Mobiles (1)'), 20)
	}

	@Then("user search for \"([^\"]*)\" smartphone")
	public void user_search_for_smartphone(String model) {

		Mobile.tap(findTestObject('FlipkartObjects/android.widget.ImageView0 (3)'), 5)

		Mobile.setText(findTestObject('FlipkartObjects/android.widget.EditText0 - Search for Products Brands.. (1)'), model, 5)

		Mobile.tap(findTestObject('Object Repository/new/android.widget.TextView0 - apple iphone xr (128gb)'),5)

		Mobile.tap(findTestObject('Object Repository/new/android.widget.TextView0 - Apple iPhone XR (Black 128 GB)'),5)
	}

	@Then("user submits \"([^\"]*)\" for delivery and adds to cart")
	public void user_submits_for_delivery_and_adds_to_cart(String pinCode) {

		Mobile.tap(findTestObject('FlipkartObjects/android.widget.TextView0 - Change (1)'), 5)

		Mobile.setText(findTestObject('FlipkartObjects/android.widget.EditText0 - Enter pincode (1)'), pinCode, 5)

		Mobile.tap(findTestObject('FlipkartObjects/android.widget.TextView0 - Submit (1)'), 5)

		Mobile.tap(findTestObject('FlipkartObjects/android.widget.TextView0 - ADD TO CART'), 5)
	}

	@Then("user navigates to cart")
	public void user_navigates_to_cart() {
		
		Mobile.tap(findTestObject('Object Repository/new/android.widget.TextView0 - SKIP  GO TO CART'),5)

		Mobile.tap(findTestObject('FlipkartObjects/android.widget.TextView0 - Qty 1'), 5)

		Mobile.tap(findTestObject('FlipkartObjects/android.widget.TextView0 - 2 (1)'), 5)
	}

	@Then("user closes the application")
	public void user_closes_the_application() {

		Mobile.closeApplication()
	}
}
