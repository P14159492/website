(function(){
  let demoData4 = document.getElementById("demo4");

  // creates a JavaScript object by parsing the JSON-formatted string from the file
  let obj = JSON.parse(newwalk);
 
  let theData =  "";

  // populates the chosen element's content with the data:
  
  let i;
  for (i = 0; i < obj.museum.length; i++){
	theData += `<li>${obj.museum[i].museumpoints}</li>`;
  }
  
  demoData4.innerHTML = theData; 

}());