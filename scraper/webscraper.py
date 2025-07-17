from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
import pandas as pd

options = webdriver.ChromeOptions()
options.add_experimental_option('detach', True)

website = 'https://www.ohne-makler.net/mietspiegel/baden-wurttemberg/zweiflingen/'
driver = webdriver.Chrome(options=options)
driver.get(website)


table_data = []


for i in range(1, 9):
    
    cell1_xpath = f"/html/body/main/div[4]/div/div[7]/table[2]/tbody/tr[{i}]/td[1]"
    cell2_xpath = f"/html/body/main/div[4]/div/div[7]/table[2]/tbody/tr[{i}]/td[2]"
    
    
    cell1 = driver.find_element(By.XPATH, cell1_xpath).text
    cell2 = driver.find_element(By.XPATH, cell2_xpath).text
    
    cell2 = cell2.replace(',', '.')

    
    table_data.append([cell1, cell2])


for row in table_data:
    print(row)
    
    
    
df = pd.DataFrame(table_data, columns=["Wohnungsgröße", "Mietpreis €/m²"])
df.to_csv("zweiflingen.csv", index=False, encoding='utf-8-sig')


