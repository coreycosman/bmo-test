Greetings :)

Here are your requested step definitions (to some degree of completion) to test that when visiting 'https://skipthedishes.ca'

1) an address can be entered into the homepage search bar and nearby restuarants will be displayed 
2) clicking on the geolocator button on the homepage will result in the display of nearby restuarants
3) entering one random word to the search bar on the homepage will result in a displayed error 

Steps to run locally (assuming the repo has been pulled down from github and is the current working directory of the local machine):

* This repository uses node@10.11.0 and npm@6.13.4

* This repository uses version 79.0.0 of chromedriver and therefore, google chrome needs to be on any version of 79 for chromedriver to work

1) npm install
2) npm run cucumber

- I know that my use of sleep functions are an anti-pattern and that using selenium-webdriver's built in wait(until...) function (or others) is preferred, but this was being difficult; I have'nt used this framework in a while, and was tight for time, I hope this is acceptable given the circumstances (tests were too inconsistent otherwise, and there are still race conditions as is).

- I have left the 2nd part of the test commented out. I did not have time to get the steps passing for these scenarios, as I was having issues with selenium-webdriver and my setup/teardown. I have written them logically based on manual Q&A and they can be interpreted as pseudo-code 