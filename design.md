# firework-ng Design

Firework-ng is the AngularJS web interface for the 
Firework Micrologging Framework.

All backend services (authentication, data persistance) are provided 
through APIs, making Firework-ng a 'bring your own backend' system to allow 
hosting with Firework.com or on your own backend using Azure Mobile Services.


## Timeline

* Users can view a list of timeline items.
* Default sort is descending date order.
  * User can sort by date, actor, action.
* The total number of items is shown.


## Login

* Social users can login via their favourite provider.
  * Including Twitter, Facebook, Google.
* Regular users can login via username and password.
* Failed logins are indicated in an ambigous way.
* Register and Forgotten password options are presented.


## Logout

* User is logged out of the system and returned to the homepage.


## Register

* New user enters username, password, email. 
* On submission new user added to the system and user logged in and redirected to the homepage.
* Confirmation of email address sent.


## Forgotten Password

* User enters username or email address.
* If user exists then reset password email sent.
* When in receipt of the reset email user clicks on the link.
* Link opens reset page for entry of new password. 
* On update user logged in and redirected to the homepage.


## Add

* Users can add an item
  * via standard form
  * via a shortee message single form
* New items trigger an email notification to the user


## Edit

* Users can edit an item
  * via standard form
  * via a shortee message single form
* Updated items trigger an email notification to the user


## delete

* Users can delete an item
* Prior to deletion a confirmation is requested from the user 


## Search

* User can search for items
   * By Who(actor)
   * What (action)
   * For a time period

## Who (Actor)

* Users can view a list of who (actors) and select an actor to search by

## What (Action)

* Users can view a list of what (actions) and select an actor to search by

## When (By Date)

* Users can view a number of date periods to show items for
  * Most recent
  * Last Week
  * Last Month

## Export

* Users can download their entire item collection as a csv file

## Future Features

* Dashboard
* Public Profile
* Follow
* Subscribe
* Tag
* Push Notifications

