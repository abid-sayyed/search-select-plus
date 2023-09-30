// Put all the javascript code here, that you want to execute after page load.




function sendSelectedText() {
  const selectedTextFromContent = window.getSelection().toString().trim();

  if (selectedTextFromContent.length > 0) {
    browser.runtime.sendMessage({ actionCon: "capturedWordFromContent", wordCon: selectedTextFromContent });
    console.log("Content Captured text:", selectedTextFromContent);

    let html = document.createElement("html");
    let head = document.createElement("head");
    let title = document.createElement("title");
    title.textContent = "Button Click Example";
    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "style.css";


    let body = document.createElement("body");
    let div = document.createElement("div");
    div.className = "navbar";

    let button1 = document.createElement("button");
    button1.className = "myButton";
    button1.setAttribute("data-engine", "cancel");
    button1.textContent = "cancel";

    let input = document.createElement("input");
    input.type = "text";
    input.id = "searchInput";
    input.className = "search-input";
    input.placeholder = "Search...";
    input.value = selectedTextFromContent;

    let button2 = document.createElement("button");
    button2.className = "myButton";
    button2.setAttribute("data-engine", "google");
    button2.textContent = "google";

    let button3 = document.createElement("button");
    button3.className = "myButton";
    button3.setAttribute("data-engine", "bing");
    button3.textContent = "bing";

    let button4 = document.createElement("button");
    button4.className = "myButton";
    button4.setAttribute("data-engine", "duckduckgo");
    button4.textContent = "duckduckgo";



    // Append elements to build the structure
    div.appendChild(button1);
    div.appendChild(input);
    div.appendChild(button2);
    div.appendChild(button3);
    div.appendChild(button4);

    body.appendChild(div);

    head.appendChild(title);
    // head.appendChild(link);

    html.appendChild(head);
    html.appendChild(body);




    html.style.height = "100%"; // Ensure the HTML element takes up the full height
    body.style.margin = "0"; // Remove body margin to avoid spacing at the top
    div.style.position = "fixed"; // Set the navbar to fixed position
    div.style.top = "0"; // Position it at the top
    div.style.left = "0"; // Position it at the left
    div.style.width = "31%"; // Make it full-width
    div.style.backgroundColor = "#333"; // Set the background color
    div.style.padding = "4px"; // Add padding to the navbar
    div.style.zIndex = "999"; // Set a high z-index to ensure it's on top


    // Append the HTML structure to the document
    document.body.appendChild(html);


    const buttons = document.querySelectorAll(".myButton");


    buttons.forEach((button, i) => {
      button.addEventListener("click", function () {
        const searchEngineName = button.getAttribute("data-engine");
        console.log(searchEngineName + "   searchengine name");
        // add logic here when you get cancel button
        if (searchEngineName == "cancel") {
          console.log("cancelTrue")
          html.remove();
        }

        else {
          performSearch(searchEngineName, selectedTextFromContent);
          html.remove();
        }


      });
    });
  }
}




// Return the buttons as an array
// return [button1, button2, button3, button4];




// Function to send selected text to the background script


document.addEventListener('mouseup', sendSelectedText);



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
  cancel: {
    name: "Cancel",
    url: "#" // You can set the URL to "#" or any other value for the "Cancel" button
  },
  // Add more search engines here in the same format
};



// Function to perform a search
function performSearch(engineName, searchInput) {
  const query = searchInput.trim();
  if (query !== "") {
    const searchEngine = searchEngines[engineName];
    if (searchEngine) {
      const fullURL = searchEngine.url + encodeURIComponent(query);
      window.open(fullURL, "_blank");
    } else {
      alert("Unknown search engine: " + engineName);
    }
  } else {
    alert("Please enter a search query");
  }
}



//may be important so don't delete not. after thorught chekcing then only delete.

// Function to handle button clicks
// function handleButtonClick(button) {
//   const searchEngineName = button.getAttribute("data-engine");
//   const searchEngineInfo = searchEngines[searchEngineName];
//   if (searchEngineInfo) {
//       return {
//           name: searchEngineInfo.name,
//           url: searchEngineInfo.url,
//       };
//   }
//   return null; // Return null for unknown search engines
// }

