import time, os
from selenium import webdriver
from selenium.webdriver.common.keys import Keys


# "$ xvfb-run python test.py", this is how you run this script
options = webdriver.ChromeOptions()
options.add_argument('headless')
options.add_argument('--no-sandbox')
driver = webdriver.Chrome(options=options)

# Scraping steps
driver.get("http://cnn.com")
time.sleep(3)
print('Finished!')
driver.quit()
