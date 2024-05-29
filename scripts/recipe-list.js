fetch('../recipes/recipe-list.json')
  .then(response => response.json())
  .then(filenames => {
    const recipeList = document.getElementById('recipe-list');

    filenames.forEach(filename => {
      fetch(`recipes/${filename}`) // Construct path to each recipe file
        .then(response => response.json())
        .then(recipeData => {
          // Access recipe data from the parsed object (recipeData)
          const recipeItem = document.createElement('li');
          recipeItem.textContent = recipeData.title; // Replace with desired property
          recipeList.appendChild(recipeItem);
        })
        .catch(error => console.error(error));
    });
  })
  .catch(error => console.error(error));
