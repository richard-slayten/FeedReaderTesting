# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## What will I learn?

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## How will this help my career?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.


# How will I complete this project?

Review the Feed Reader Testing [Project Rubric](https://review.udacity.com/#!/projects/3442558598/rubric)

1. Take the JavaScript Testing [course](https://www.udacity.com/course/ud549)
2. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
3. Review the functionality of the application within your browser.
4. Explore the application's HTML (**./index.html**), CSS (**./css/style.css**) and JavaScript (**./js/app.js**) to gain an understanding of how it works.
5. Explore the Jasmine spec file in **./jasmine/spec/feedreader.js** and review the [Jasmine documentation](http://jasmine.github.io).
6. Edit the `allFeeds` variable in **./js/app.js** to make the provided test fail and see how Jasmine visualizes this failure in your application.
7. Return the `allFeeds` variable to a passing state.
8. Write a test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty.
9. Write a test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty.
10. Write a new test suite named `"The menu"`.
11. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
12. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
13. Write a test suite named `"Initial Entries"`.
14. Write a test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
15. Write a test suite named `"New Feed Selection"`.
16. Write a test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes.
17. No test should be dependent on the results of another.
18. Callbacks should be used to ensure that feeds are loaded before they are tested.
19. Implement error handling for undefined variables and out-of-bound array access.
20. When complete - all of your tests should pass. 
21. Write a README file detailing all steps required to successfully run the application. If you have added additional tests (for Udacious Test Coverage),  provide documentation for what these future features are and what the tests are checking for.

# Steps to run/test application

The index.html file needs to be loaded in a browser.  I performed the folowing steps for the competion steps above

6. In the js/app.js file, the variable allFeeds ( line 10) can be renamed.  This will cause the are defined test to fail.  You can also comment out lines 12 to 22 so that the variable is empty.  This will cause the test to fail also.
7. Undo the steps in #6 to get a passing test.
8. Added tests on line 38 in jasmine/spec/feedreader.js to check the url.  You can rename the url property in the allFeeds variable and or blank out the url assignment to test the failure.
9. Added tests on line 56 in jasmine/spec/feedreader.js to check the name.  You can rename the name property in the allFeeds variable and or blank out the name assignment to test the failure.
10. Added a describe statement on line 68 in jasmine/spec/feedreader.js for the new suite.
11. Added an it statement on line 82 in jasmine/spec/feedreader.js to check to see if the menu is hidden.  To test you can remove the 'class="menu-hidden"' from the index.html to test the failure.
12. Added an it statement on line 98 in jasmine/spec/feedreader.js to check to see if the menu unhides after you click the icon.  The way i tested it was to comment out the click statement to see if it fails.  Also added an it statement on line 107 in jasmine/spec/feedreader.js to check to see if the menu is hidden after you click the icon again after it is unhidden.  The way i tested it was to comment out the click statement to see if it fails. 
13. Added a describe statement on line 114 in jasmine/spec/feedreader.js for the new suite.
14. Added an beforeEach statement on line 127 in jasmine/spec/feedreader.js so that we can load the first feed ( using the done callback).  Then on added the it statement on line 137 to check for the entries.  To test i commented out line 69 in the app.js file so that the entries didn't get populated on the web page.
15. Added a describe statement on line 147 in jasmine/spec/feedreader.js for the new suite.
16. Added an beforeEach statement on line 163 in jasmine/spec/feedreader.js so that we get get the first feeds content and then run the second feed to get it's content.  Then on added the it statement on line 174 to check for valid content and make sure the 2 contents do not match. I tested this by changing the second feed to pull the first feed again by changing the 1 to a 0 in line 166.