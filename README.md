jQuery Binding Format 
=====================

[![Build Status](https://travis-ci.org/leandrogehlen/jquery-bindingformat.svg?branch=master)](https://travis-ci.org/leandrogehlen/jquery-bindingformat)

jQuery Binding Format establishes a connection from data displayed for the User (User Interface) and business logic.

When we work with internationalization is common displaying dates and currency values in a format, but when these informations arrives to routines for processing the business rule, it is necessary to covert this information into another format before performing the required operations.

An example is, when we display some information in a format and when we'll store it in the database,
it is necessary to convert this information into another format.

Below are some cases where these conversions are needed

**Dates / Hours**

- UI Format: 31/12/2014
- DB Format: 2014-12-31

**Currencies / Numbers**

- UI Format: 1.500,35
- DB Format: 1500.35

jQuery Binding Format performs this conversions in a transparent way to the developer.
Although the information is displayed in a format, when this information reach the business layer, such information is already in desired format.
