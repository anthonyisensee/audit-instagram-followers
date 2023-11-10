// Navigate to your Instagram profile page in a desktop web browser.

// Open the JavaScript console using CTRL + SHIFT + J. Code can be copy pasted into the console here and run by hitting enter.

// Ignore the cheeky warning from instagram. The code I'm about to have you run is definitely very safe. If your conscience is really bothering you, though, you can run the following code.

console.clear();

// Out of sight, out of mind.

// First things first, initialize some variables by pasting the following into the console and hitting enter to run. These will allow the rest of the code to run without errors.

let users_i_follow = [];
let users_that_follow_me = [];
let users_that_dont_follow_me_back = [];
let users_that_i_dont_follow_back = [];

// Click the number of users that you're following to to open the list of users that you follow. Run the following code to scroll to the bottom of the window and load in the full list.

document.querySelector("._aano").onscroll = function() { 
    setTimeout(
        function() { 
            document.querySelector("._aano").scrollTo(0, document.querySelector("._aano").scrollHeight);
        }, 
        1000);
}
document.querySelector("._aano").scrollTo(0, document.querySelector("._aano").scrollHeight);

// Once the list has stopped scrolling run the following code to create an array/list of users that you follow. ("undefined" will likely show in the console. Don't worry, it still worked!)

document.querySelectorAll('.x1dm5mii').forEach(e => users_i_follow.push(e.querySelector("._ap3a").innerHTML));

// Close the Following window by clicking the "X" in the top right of the window.

// Click the number of your followers to open the list of users that follow you. Again, run the following code to scroll to the bottom of the window and load in the full list.

document.querySelector("._aano").onscroll = function () {
    setTimeout(
        function () {
            document.querySelector("._aano").scrollTo(0, document.querySelector("._aano").scrollHeight);
        },
        1000);
}
document.querySelector("._aano").scrollTo(0, document.querySelector("._aano").scrollHeight);

// Once the list has stopped scrolling run the following code to create an array/list of users follow you. ("undefined" will likely show again in the console. Don't worry, it still worked!)

document.querySelectorAll('.x1dm5mii').forEach(e => users_that_follow_me.push(e.querySelector("._ap3a").innerHTML));

// Prepare to be offended.

// Run the following code to create arrays/lists of users that don't follow you back and users that you don't follow back.

users_that_dont_follow_me_back = users_i_follow.filter(item => !users_that_follow_me.includes(item));

users_that_i_dont_follow_back = users_that_follow_me.filter(item => !users_i_follow.includes(item));

// Run the following code to generate URLs to the profiles of the users that don't follow you back. From this list you can decide who you might want to remove from those that you follow.

console.log("Users that don't follow me back:")
users_that_dont_follow_me_back.forEach(i => console.log(`https://instagram.com/${i}`))

// Run the following code to generate URLs to the profiles of the users that you don't follow back. From this list you can decide who you might want to remove from those that follow you.

console.log("Users that I don't follow back:")
users_that_i_dont_follow_back.forEach(i => console.log(`https://instagram.com/${i}`))

// For bonus points you can enable popups on the website and run the following code to open all the profile pages at once. You will need to reload the page and rerun the code after having enabled popups, however.

users_that_dont_follow_me_back.forEach(i => window.open(`https://instagram.com/${i}`))
users_that_i_dont_follow_back.forEach(i => window.open(`https://instagram.com/${i}`))
