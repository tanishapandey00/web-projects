//var localStorage = ('localStorage' in window);
/*is how we used localStorage originally.  
It's basically just checking if the key/property 
"localStorage" is attached to the window object,
 and if it is, it returns true, else it returns false.
  (At this point in the course I haven't explain what the
   window object is. I teach this in the Advanced JS 
   section a little later.) */
// This snippet is actually the entire storage.js file, so feel free to copy it if you like.
function saveData(key, value) {

    // Notice how we aren't doing any like ('localStorage' in window).
    // We are simply just accessing the global property, just like referring to name instead of window.name
    if (localStorage) {
        localStorage.setItem(key, value);
    } else {
        alert('Browser does not support the localStorage API');
    }
}


function loadData(key) {
    if (localStorage) {
        if (key in localStorage) {
            return localStorage.getItem(key);
        }
    } else {
        alert('Browser does not support the localStorage API');
    }
}
