import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable

Mobile.startApplication('C:\\Users\\owner\\Downloads\\flipkart_6.17_androidapksbox.apk', true)

Mobile.tap(findTestObject('addToCart/android.widget.Button0 - NONE OF THE ABOVE'), 10)

Mobile.tap(findTestObject('addToCart/android.widget.ImageView0'), 5)

Mobile.tap(findTestObject('FlipkartObjects/android.widget.ImageButton0 (2)'), 10)

Mobile.tap(findTestObject('FlipkartObjects/android.widget.TextView0 - All Categories'), 10)

//Mobile.tap(findTestObject('FlipkartObjects/android.widget.TextView0'), 10)

//Mobile.waitForElementPresent(findTestObject('FlipkartObjects/android.widget.TextView0'), 10)

Mobile.tap(findTestObject('FlipkartObjects/android.widget.ImageView0 (4)'), 10)

Mobile.setText(findTestObject('addToCart/android.widget.EditText0 - Search for Products Brands..'), 'one plus 7 pro 128gb', 
    10)

Mobile.tap(findTestObject('addToCart/android.widget.ImageView0 (2)'), 10)

Mobile.waitForElementPresent(findTestObject('Object Repository/addToCart/android.widget.TextView0 - Filter'),15)

Mobile.waitForElementPresent(findTestObject('Object Repository/addToCart/android.widget.TextView0 - Sort'), 10)

Mobile.tap(findTestObject('addToCart/android.widget.ImageView0 (3)'), 10)

//Mobile.tap(findTestObject('addToCart/android.view.ViewGroup0'), 15,FailureHandling.CONTINUE_ON_FAILURE)

Mobile.tap(findTestObject('addToCart/android.widget.TextView0 - ADD TO CART'), 10)


Mobile.tap(findTestObject('Object Repository/FlipkartObjects/android.widget.TextView0 - GO TO CART'), 10,FailureHandling.CONTINUE_ON_FAILURE)

Mobile.tap(findTestObject('addToCart/android.widget.TextView0 - SKIP  GO TO CART'), 10,FailureHandling.CONTINUE_ON_FAILURE)

Mobile.tap(findTestObject('addToCart/android.widget.TextView0 - Enter Delivery Pincode'), 10,FailureHandling.CONTINUE_ON_FAILURE)

Mobile.tap(findTestObject('Object Repository/addToCart/android.widget.TextView0 - Change'), 10,FailureHandling.CONTINUE_ON_FAILURE)

Mobile.setText(findTestObject('addToCart/android.widget.EditText0 - Enter pincode'), '570027', 10)

Mobile.tap(findTestObject('addToCart/android.widget.TextView0 - Submit'), 10)

Mobile.tap(findTestObject('Object Repository/addToCart/android.widget.TextView0 - Qty 1'), 10)

Mobile.tap(findTestObject('addToCart/android.widget.TextView0 - 2'), 10)

Mobile.closeApplication()


