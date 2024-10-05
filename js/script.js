const LoadAllPetsCategories = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/categories`);
    const data = await res.json();
    displayAllPetsCategories(data.categories);
}

const displayAllPetsCategories = (categories) => {
    const petsCategoryContainer = document.getElementById('pets-category-container');
    categories.forEach(category => {
        const div = document.createElement('div');
        div.innerHTML = `
          <button onclick="handleCategory('${category.category}')" class="border px-12 py-4 font-bold rounded-2xl flex gap-2 items-center">
            <img class="h-10 w-10" src="${category.category_icon}" alt="">
          ${category.category}s</button>
        `
        petsCategoryContainer.appendChild(div);
    });
}

const handleCategory = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`);
    const data = await res.json();
    console.log(data);
    displayAllPets(data.data)
}

LoadAllPetsCategories();