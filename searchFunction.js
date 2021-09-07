const URL = 'https://fakejsonapi.com/countries'

let allItems;/* = [
  // Item 1
  {
    name: 'Osborne',
    link: 'https://google.com?person=osborne'
  },
  // Item 2,
  {
    name: 'Morrison',
    link: 'https://google.com?person=morrison'
  },
  // Item 3,
  { 
    name: 'Avishek',
    link: 'https://google.com?person=avishek'
  },
  // Item 4,
  {
    name: 'Bryce',
    link: 'https://google.com?person=bryce'
  },
  // Item 5
  {
    name: 'Chelynne',
    link: 'https://google.com?person=chelynne'
  },
];*/

console.log(allItems);
// Build list items from items array
function generateList(items, empty=false) {

  // Get list parent element 
  var list = document.getElementById("myUL");

  // Clear list
  list.innerHTML = '' 

  if(empty) {
    list.innerHTML = ''
    return
  }

  items.forEach(item => {
    // Create List item
    var element = document.createElement('li')
    // Create inner link item
    var link = document.createElement('a')

    // Set values on link item
    link.textContent = item.countryName
    link.href = 'www.google.ca'
    link.target = '_blank'

    // Attach link to list item
    element.appendChild(link)
    // Attach list item to list
    list.appendChild(element)
    console.log(item)
  })
}

// generateList(allItems)
function filterList() {
  // Declare variables
  var input = document.getElementById("myInput");
  var empty = !input.value.length

  var filteredItems = allItems.filter(item => {
    return item.countryName.toUpperCase().indexOf(input.value.toUpperCase()) > -1
  })

  generateList(filteredItems, empty)
}

console.log(URL);
fetch(URL)
  .then(response => response.json())
  .then(json => allItems = json.country)
  .then(() => console.log(allItems))


