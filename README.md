jquery-bindingformat
====================

[![Build Status](https://travis-ci.org/leandrogehlen/jquery-bindingformat.svg?branch=master)](https://travis-ci.org/leandrogehlen/jquery-bindingformat)

jQuery Binding Format establishes a connection from the data displayed for the User (User Interface) and business logic.

When we work with internationalization is common displaying dates and currency values in a format, but when these data arrives
the responsible routines for processing the business rule, it is necessary covert this data in another format, 
before performing the required operations.

An example is when we display some information in a format and when we'll store it in the database,
it is necessary to convert this information to another format.

Below are some cases where these are necessary conversions

**Dates / Hours:**

- UI Format: 31/12/2014
- DB Format: 2014-12-31

**Currencies / Numbers**

- UI Format: 1.500,35
- DB Format: 1500.35

With this in mind, jQuery Binding Format performs this conversion in a transparent manner to the developer.
Although the information is displayed in a format, where this information reach the business layer, such information
is already in desired format.