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

Mobile.tap(findTestObject('android.widget.Button0 - NONE OF THE ABOVE'), 0)

Mobile.tap(findTestObject('android.widget.ImageView0 (1)'), 0)

Mobile.tap(findTestObject('android.widget.TextView0 -  Search for Products Brands and More'), 0)

Mobile.setText(findTestObject('android.widget.EditText0 - Search for Products Brands..'), 'noise shots groove', 0)

Mobile.waitForElementPresent((findTestObject('Object Repository/android.widget.RelativeLayout0')),15)

Mobile.tapAtPosition(0, 220)



