import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject

import org.junit.After

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

Mobile.startApplication('C:\\Users\\owner\\Downloads\\ShopClues Online Shopping App_v3.6.3_apkpure.com.apk', true)

Mobile.tap(findTestObject('android.widget.TextView0 - Account'), 0)

Mobile.tap(findTestObject('android.widget.Button0 - Sign in'), 0)

Mobile.pressBack()

Mobile.setText(findTestObject('android.widget.EditText0 - Enter your mobile number or email id'), 'shekhar1237@gmail.com',
	0)

Mobile.tap(findTestObject('android.widget.TextView0 - Login via Password'), 0)

Mobile.setEncryptedText(findTestObject('android.widget.EditText0 - Enter your password'), 'K9UX314tQyr2S0lGlOYlEQ==', 0)

Mobile.tap(findTestObject('android.widget.TextView0 - Login'), 0)

Mobile.tap(findTestObject('android.widget.Button0 - OK'), 0)

Mobile.tap(findTestObject('android.widget.TextView0 - Skip'), 0)

Mobile.verifyElementText(findTestObject('Object Repository/android.widget.TextView0 - My Orders'),"My Orders")

Mobile.closeApplication()

