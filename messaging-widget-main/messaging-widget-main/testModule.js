function createElemnet() {
    // Create a new div element
    var divElement = document.createElement('div');

    // Set attributes for the div element if needed
    // divElement.setAttribute('id', 'myDiv'); // Example: set id attribute

    // Create a text node
    var textNode = document.createTextNode('Hello, world!');

    // Append the text node to the div element
    divElement.appendChild(textNode);

    // Append the newly created div element to the body of the document
    document.body.appendChild(divElement);
}
createElemnet();