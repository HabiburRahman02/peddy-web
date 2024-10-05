const LoadAllPets = async () => {
    const res = await fetch(` https://openapi.programming-hero.com/api/peddy/pets`);
    const data = await res.json();
    displayAllPets(data.pets);
}

const displayAllPets = (pets) => {
    const allPetsContainer = document.getElementById('all-pets-container');
    pets.forEach(pet => {
        console.log(pet);
        const {breed, date_of_birth,gender,price,pet_name} =pet
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="border p-5 rounded-lg">
                            <figure>
                                <img class="rounded-lg"
                                    src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                                    alt="">
                            </figure>
                            <div class="space-y-2">
                                <h2 class="card-title mt-4">Pets name!</h2>
                                <div class="text-gray-600 space-y-2 border-b">
                                    <div class="flex items-center gap-1">
                                        <i class="fa-solid fa-wind h-5 w-5"></i>
                                        <p>Breed: </p>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <i class="fa-regular fa-calendar h-5 w-5"></i>
                                        <p>Birth: </p>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <i class="fa-solid fa-venus h-5 w-5"></i>
                                        <p>Gender: </p>
                                    </div>
                                    <div class="flex items-center gap-1 border-b pb-4">
                                        <i class="fa-solid fa-dollar-sign h-5 w-5"></i>
                                        <p>Price: </p>
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