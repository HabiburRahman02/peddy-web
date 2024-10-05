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
          <button id="btn-${category.category}" onclick="handleCategory('${category.category}')" class="btn-category border px-12 py-4 font-bold rounded-2xl flex gap-2 items-center">
            <img class="h-10 w-10" src="${category.category_icon}" alt="">
          ${category.category}s</button>
        `
        petsCategoryContainer.appendChild(div);
    });
}

const handleCategory = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`);
    const data = await res.json();
    displayAllPets(data.data)

    // remove active btn classes
    const buttons = document.getElementsByClassName('btn-category');
    for (const button of buttons) {
        button.classList.remove('bg-green-100', 'rounded-l-full', 'rounded-r-full')
        console.log(button);
    }

    // add active btn classes
    const activeBtn = document.getElementById(`btn-${id}`);
    activeBtn.classList.add('bg-green-100', 'rounded-l-full', 'rounded-r-full')


}

LoadAllPetsCategories();