const LoadAllPets = async () => {
    const res = await fetch(` https://openapi.programming-hero.com/api/peddy/pets`);
    const data = await res.json();
    displayAllPets(data.pets);
}

const displayAllPets = (pets) => {
    const allPetsContainer = document.getElementById('all-pets-container');
    pets.forEach(pet => {
        console.log(pet);
        const { image, breed, date_of_birth, gender, price, pet_name } = pet
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="border p-5 rounded-lg">
                            <figure>
                                <img class="rounded-lg"
                                    src="${image}"
                                    alt="">
                            </figure>
                            <div class="space-y-2">
                                <h2 class="card-title mt-4">${pet_name}</h2>
                                <div class="text-gray-600 space-y-2 border-b">
                                    <div class="flex items-center gap-1">
                                        <i class="fa-solid fa-wind h-5 w-5"></i>
                                        <p>Breed: ${breed ? breed : 'Not Found'}</p>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <i class="fa-regular fa-calendar h-5 w-5"></i>
                                        <p>Birth: ${date_of_birth ? date_of_birth : 'Not Found'}</p>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <i class="fa-solid fa-venus h-5 w-5"></i>
                                        <p>Gender: ${gender ? gender : 'Not Found'}</p>
                                    </div>
                                    <div class="flex items-center gap-1 border-b pb-4">
                                        <i class="fa-solid fa-dollar-sign h-5 w-5"></i>
                                        <p>Price: ${price}$</p>
                                    </div>
                                </div>

                                <div class="flex justify-between items-center gap-2">
                                    <div class="border px-4 py-2 rounded-lg mt-4 cursor-pointer">
                                        <i class="fa-regular fa-thumbs-up"></i>
                                    </div>
                                    <div
                                        class="border px-3 py-2 text-[#0E7A81] cursor-pointer  font-extrabold rounded-lg mt-4">
                                        Adopt
                                    </div>
                                    <div
                                        class="border px-3 py-2 text-[#0E7A81] cursor-pointer  font-extrabold rounded-lg mt-4">
                                        Adopt
                                    </div>
                                </div>
                            </div>
                        </div>
        `
        allPetsContainer.appendChild(div)
    });
}


LoadAllPets();