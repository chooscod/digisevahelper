const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

fetch("data.json")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      header.textContent = user.name
      // Create anchor element.
      var a = document.createElement('a'); 
                  
      // Create the text node for anchor element.
      var link = document.createTextNode("Click here");
        
      // Append the text node to anchor element.
      a.appendChild(link); 
        
      // Set the title.
      a.title = "This is Link"; 
        
      // Set the href property.
      a.href = user.email; 
        
      // Append the anchor element to the body.
      card.appendChild(a); 
      
      userCardContainer.append(card)
      return { name: user.name, email: user.email, element: card }
    })
  })





  