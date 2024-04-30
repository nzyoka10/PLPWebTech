# Week 11 - Simple Weather App

## Weather API
- OpenWeatherMap: https://openweathermap.org/api
- Weatherstack: http://www.weatherstack.com/

## Tasks for this week
- [x] Design a simple weather app using HTML, CSS and JavaScript
- [x] Create an account on openweathermap.org to get your own API key
- [x] Use fetch() function to make requests to the OpenWeatherMap API from your application
- [x] Display the current temperature and forecast for the user's location in the browser
- [x] Allow users to search for locations by entering text into an input field
- [x] When the user clicks the "Search" button, send a request to the OpenWeatherMap API with the entered term as
- [x] Make it so that when a user submits the form, the page refreshes and displays the weather for their searched location instead
- [x] When a user submits a search query, update the displayed information with data for the searched location
- [x] Update the displayed information whenever a new city is searched for
- [x] Add error handling if the request to the API fails
- [ ] Make sure all of your code is properly commented with detailed explanations of what each section does
- [ ] Submit your CodePen or JSFiddle link in Canvas for review</s>

#include "stdafx.h"
#include <iostream>
using namespace std;

```cpp
// This program demonstrates how to use the C++ Standard Template Library (STL).
int main() {
	// Declare variables
	double num1 = 0;
	double num2 = 0;
	char op = '+'; // default operator is addition

	cout << "Enter two numbers: ";
	cin >> num1 >> num2;

	cout << "\nEnter an operator (+, -, *, /): ";
	cin >> op;

	switch(op) {
	case '+':
		cout << num1 + num2 << endl;
		break;
	case '-':
		if (num1 > num2 && num1 < num2) {
			cout << num1 - num2 << endl;
		} else {
			cout << "Error! Invalid operation." << endl;
		}
		break;
	case '*':
		cout << num1 * num2 << endl;
		break;
	default:
		cout << "Error! Invalid operator." << endl;
	}

    return 0;
}

```
