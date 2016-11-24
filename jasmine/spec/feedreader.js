/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        /* check to make sure allFeeds is defined and not zero length, 
        * then check the url for each (forEach loop) of  the feeds to 
        * check if thr url is defined and not a length of 0.
        */


        it('have a defined url and not an empty string', function() {
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });


        /* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        /* check to make sure allFeeds is defined and not zero length, 
        * then check the name for each (forEach loop) of  the feeds to 
        * check if thr name is defined and not a length of 0.
        */
        it('have a defined name and not an empty string', function() {


            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        /* The menu is being hid/shown by using a class (menu-hidden) on the body tag.  
        * It is origianlly assigned the 'menu-hidden' class and there is a click event 
        * on the anchor (<a>) tag to toggle the class on and off.
        * This test will check to see if there is a class menu-hidden on the body tag
        * by checking the className property.  This property is a list of the classes 
        * assigned to an element.  We look for the class name of 'menu-hidden'
        */
        it('is hidden by default', function() {
            expect(document.body.className).toContain('menu-hidden');
        });


         /* Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        /* had to simulate a click by usng Jquery. i found out that a javascipt click 
        * doesn't work for an anchor tag.  the anchor tag has a class of 
        * 'menu-icon-link' which is how we get the item to click on.
        * Once the item is clicked, then we check for the 'menu-hidden' class
        * on the body tag to make sure it is not there.
        */
        it('is shown when icon is clicked', function() {
            $('.menu-icon-link').click();
            expect(document.body.className).not.toContain('menu-hidden');
        });

        /* If we click again , then the 'menu-hidden' class on the body
        * tag should be assigned to make the menu disappear.  The test 
        * below checks for that
        */
        it('is hidden when icon is clicked again', function() {
            $('.menu-icon-link').click();
            expect(document.body.className).toContain('menu-hidden');
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /*Write a test that ensures when the loadFeed
        * function is called and completes its work, there is at least
        * a single .entry element within the .feed container.
        * Remember, loadFeed() is asynchronous so this test will require
        * the use of Jasmine's beforeEach and asynchronous done() function.
        */
         
        /* This before each function will load the first feed and run the callback
        * done ( used for Jasmine's asyncronous operations) so that the test
        * can check the entries after the data is loaded.
        */
        beforeEach(function(done){
              loadFeed(0, done);
        });
        
        /* once the data is loaded, then we check to see if there is an article tag
        * with a class of 'entry' ( get first one only) from the element that has the 
        * feed class on it.  An article tag should exist for each result entry
        * from the parsed feed.  The handle bar template is defined to display it
        * that way.
        */
        it('have at least one .entry element within the .feed container', function() {
            var entryElement = $(".feed").find("article.entry:first"); 

            expect(entryElement.length).toBeGreaterThan(0);

         });
        
    });

    /* Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        /* This check will get the content (html) from the first feed and check it
        * against the content of a second feed's html.  We will have to save the first
        * and second feed content ( in before each) in order to compare it.
        */

        // save content of first and second feed in a variable
        var firstFeedHtml;
        var secondFeedHtml;

        // get first feed content, then run the second content on the callback
        // of the first to get the second feed content, then call done.
        beforeEach(function(done){
            loadFeed(0, function() {
                firstFeedHtml = $('.feed').html();
                loadFeed(1, function(){
                    secondFeedHtml = $('.feed').html();
                    done();
                });
            });
        });

        // check and compare the contents once the feeds have loaded.
        it('has changed content on page', function() { 
            expect(firstFeedHtml).toBeDefined();
            expect(firstFeedHtml.length).not.toBe(0);

            expect(secondFeedHtml).toBeDefined();
            expect(secondFeedHtml.length).not.toBe(0);

            expect(secondFeedHtml).not.toEqual(firstFeedHtml);

        });

    });

}());
