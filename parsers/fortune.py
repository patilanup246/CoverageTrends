from bs4 import BeautifulSoup
import sys, requests

def goodPage(urlObject):
	url = urlObject['href']
	text = urlObject.text.strip()

	if url.startswith("https://fortune.com/20"):
		return True


	return False

def scrape():
	results = {}
	url = "http://fortune.com/"
	page = requests.get(url)
	soup = BeautifulSoup(page.text, 'html.parser')

	for link in soup.find_all('a', href=True):
		if not goodPage(link):
			continue
		myLink = link["href"]

		results[myLink] = {}
		results[myLink]["text"] = link.text.strip()
		results[myLink]["notes"] = ""
	return results


if __name__ == '__main__':
	scrape()
