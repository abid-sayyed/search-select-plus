
 // Get references to all buttons with the class "myButton"
 const searchInput = document.getElementById("searchInput");
 const buttons = document.getElementsByClassName("myButton");
 
// Define an object that stores information about search engines
const searchEngines = {
    google: {
        name: "Google",
        url: "https://www.google.com/search?q="
    },
    bing: {
        name: "Bing",
        url: "https://www.bing.com/search?q="
    },
    duckduckgo: {
        name: "DuckDuckGo",
        url: "https://duckduckgo.com/?q="
    },
    // Add more search engines here in the same format
};


 // Loop through all the buttons and add a click event listener to each
 for (let i = 0; i < buttons.length; i++) {
     buttons[i].addEventListener("click", function() {
         // Display an alert when the button is clicked
          alert("Button " + (i + 1) + " Clicked!");
      
         const searchEngineName = buttons[i].getAttribute("data-engine");
          console.log("Button " + (i + 1) + " Clicked!");



         // Perform the search using the selected search engine
         performSearch(searchEngineName);


         // Log a message to the console
     });
 }




function performSearch(engineName) {
    // Get the user's search query from the input field
    const query = searchInput.value;

    // Check if the query is not empty
    if (query.trim() !== "") {
        // Check if the selected search engine exists in the searchEngines object
        if (searchEngines[engineName]) {
            // Construct the search URL based on the selected search engine
            const fullURL = searchEngines[engineName].url + encodeURIComponent(query);

            // Open a new tab or window with the search results
            window.open(fullURL, "_blank");
        } else {
            // Handle the case where the selected engine is not recognized
            alert("Unknown search engine: " + engineName);
        }
    } else {
        // Display an alert if the input is empty
        alert("Please enter a search query");
    }
}

// Listen for notification click event.





// browserAction.js (assuming you have a separate script for your browser action)

// Listen for messages from the background script



  

let num = 0;
console.log(num++ + "Hii")
// browser.runtime.onMessage.addListener((message) => {
//     console.log("Received message:", message);
//     if (message.actionBg === "capturedWordFromBg") {
//       // Handle the captured text here
//       selectedText = message.wordBg; 
//       searchInput.value = selectedText;
//       console.log("working from baction" + selectedText)
 
//     }
//   });


  
  // Listen for messages from the content script.


