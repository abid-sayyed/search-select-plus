


// scriptElement.onload = function() {
    
//     // Your code that depends on 'myScript.js' can go here
//   };

// document.body.textContent = "";

// let header = document.createElement("h1");
// header.textContent = "This page has been eaten";
// document.body.appendChild(header);

var iframe = document.createElement("iframe");

// Create a simple HTML document with your message
var html = '<html><head></head><body><h1>Hi, user!</h1></body></html>';

// Set the srcdoc attribute with the HTML content
iframe.srcdoc = html;

iframe.width = "400";
iframe.height = "300";
iframe.frameborder = "0"; // Optional: Remove the iframe border
document.head.appendChild(iframe);

// Add the iframe to the DOM by appending it to an existing element
// var containerElement = document.getElementById("container"); // Replace "container" with the ID of the element you want to append the iframe to
// containerElement.appendChild(iframe);
