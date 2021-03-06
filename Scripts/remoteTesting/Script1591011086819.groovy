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

Mobile.startApplication('bs://d1b8a64a73675f8bd500896f25d0020fad06f841', true)

Mobile.tap(findTestObject('remote/android.widget.TextView1'), 0)

Mobile.tap(findTestObject('remote/android.widget.Button0'), 0)

Mobile.tap(findTestObject('remote/android.widget.ImageView2'), 0)

Mobile.tap(findTestObject('remote/android.widget.ImageView5'), 0)

Mobile.pressBack()

Mobile.tap(findTestObject('remote/android.widget.ImageView6'), 0)

Mobile.pressBack()

Mobile.tap(findTestObject('remote/android.widget.ImageView7'), 0)

Mobile.pressBack()

Mobile.closeApplication()

