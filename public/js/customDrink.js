const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#drink-name').value.trim();
   
    const allIngredients = document.querySelectorAll('input');
    console.log(allIngredients, name)
  
const ingredients = [];

    for (const element of allIngredients) {
    if (element.checked=== true){
        ingredients.push(element.value)
    }
  }

    if (name  && ingredients) {
      const response = await fetch(`/api/Drink`, {
        method: 'POST',
        body: JSON.stringify({ name, ingredients }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/favoriteDrink');
      } else {
        alert('Failed to create drink');
      }
    }
  };
  
//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/customDrinks/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete drink');
//       }
//     }
//   };
  
  document
    .querySelector('#drink-form')//change for our handlebars
    .addEventListener('submit', newFormHandler);
  
//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);
  