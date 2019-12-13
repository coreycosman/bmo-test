Feature: Find Restaurants On SkipTheDishes     
  I should be able to search SkipTheDishes and find restaurants in my area 

  Scenario: Find restaurants by address 
    When I enter the address "100 King St W, Toronto" in the search bar on the homepage of "https://www.skipthedishes.com/" 
    Then I should see restaurants displayed

  # Scenario: Find restaurants by geolocator  
  #   When I click the compass button on the homepage of "https://www.skipthedishes.com/" 
  #   Then I should see restaurants displayed  

  # Scenario: Do not find restaurants when entering 1 word into search bar   
  #   When enter the word "test" into the search bar at the homepage of "https://www.skipthedishes.com/" 
  #   Then I see should the error message "Unable to determine the city of this location. Please try again" displayed on the page   