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

Mobile.startApplication('bs://2f62e0073badc146fade339055941d14000716ef', true)

Mobile.tap(findTestObject('shopcluesRemote/android.widget.TextView7 - Account'), 0)

Mobile.tap(findTestObject('shopcluesRemote/android.widget.Button0 - Sign in'), 0)

Mobile.setText(findTestObject('shopcluesRemote/android.widget.EditText0 - Enter your mobile number or email id'), 'jack@rediff.com', 
    0)

Mobile.tap(findTestObject('shopcluesRemote/android.widget.TextView2 - Login via Password'), 0)

Mobile.setText(findTestObject('shopcluesRemote/android.widget.EditText1 - Enter your password'), 'jack123', 0)

Mobile.tap(findTestObject('shopcluesRemote/android.widget.TextView2 - Login'), 0)

Mobile.clearText(findTestObject('shopcluesRemote/android.widget.EditText0 - jackrediff.com'), 0)

Mobile.setText(findTestObject('shopcluesRemote/android.widget.EditText0 - Enter your mobile number or email id (1)'), 'shekhar1237@gmail.com', 
    0)

Mobile.clearText(findTestObject('shopcluesRemote/android.widget.EditText1 - jack123'), 0)

Mobile.setEncryptedText(findTestObject('shopcluesRemote/android.widget.EditText1 - Enter your password (1)'), 'K9UX314tQyr2S0lGlOYlEQ==', 
    0)

Mobile.tap(findTestObject('shopcluesRemote/android.widget.TextView2 - Login'), 0)

Mobile.tap(findTestObject('shopcluesRemote/android.widget.TextView3 - Skip'), 0)

Mobile.closeApplication()

