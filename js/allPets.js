const LoadAllPets = async () => {
    const loader = document.getElementById('loader');
    loader.classList.remove('hidden')
    try {
        const res = await fetch(` https://openapi.programming-hero.com/api/peddy/pets`);
        const data = await res.json();
        displayAllPets(data.pets);
    } catch (error) {
        console.log(error);
    }
}

const displayAllPets = (pets) => {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden')

    const allPetsContainer = document.getElementById('all-pets-container');
    allPetsContainer.innerHTML = ''

    if (pets.length === 0) {
        allPetsContainer.classList.remove('grid')
        allPetsContainer.innerHTML = `
        <div class="text-center space-y-4 bg-gray-50 p-5 max-w-[700px] mx-auto">
            <img class="mx-auto mt-2" src="images/error.webp" alt="">
            <h3 class="text-4xl font-extrabold">No Information Available</h3>
            <p>"No content available at the moment. Please check back later."
            "Sorry, there is currently no content to display."</p>
        </div>
        `
        return;
    }
    else {
        allPetsContainer.classList.add('grid')
    }

    pets.forEach(pet => {
        const { petId, image, breed, date_of_birth, gender, price, pet_name } = pet
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="border p-5 rounded-lg">
                            <figure>
                                <img class="rounded-lg w-full"
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
                                        <p>Price: ${price ? price : 'Not Found'}$</p>
                                    </div>
                                </div>

                                <div class="flex justify-between items-center gap-2">
                                    <div onclick="handleLike('${image}')" class="border px-4 py-2 rounded-lg mt-4 cursor-pointer">
                                        <i class="fa-regular fa-thumbs-up"></i>
                                    </div>
                                    <button
                                        id="btn-adopt"
                                        onclick="handleAdopt()"
                                        class="border px-3 py-2 text-[#0E7A81] cursor-pointer  font-extrabold rounded-lg mt-4">
                                        Adopt
                                    </button>
                                    <div
                                    onclick="showPetDetails('${petId}')"
                                        class="border px-3 py-2 text-[#0E7A81] cursor-pointer  font-extrabold rounded-lg mt-4">
                                        Details
                                    </div>
                                </div>
                            </div>
                        </div>
        `
        allPetsContainer.appendChild(div)
    });
}

const handleAdopt = () => {
    my_modal_5.showModal()
    const countContainer = document.getElementById('count');
    let count = 4
    const intervalId = setInterval(() => {
        count--
        countContainer.innerHTML = count;
        if (count <= 0) {
            clearInterval(intervalId)
            my_modal_5.close();
        }
        console.log(count);
    }, 1000);
}

const handleLike = (image) => {
    const petsContent = document.getElementById('pets-content');
    const div = document.createElement('div');
    div.innerHTML = `
     <img class="rounded-lg w-full"
                                    src="${image}"
                                    alt="">
    `
    petsContent.appendChild(div)
}

const showPetDetails = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    const data = await res.json();
    console.log(data.petData);
    const { pet_details, pet_name, image, breed, gender, date_of_birth, vaccinated_status, price } = data.petData;

    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = `
    <dialog id="my_modal_1" class="modal">
            <div class="modal-box">
                <img class="rounded-lg w-full" src="${image}" alt="">
                <h3 class="text-3xl font-bold my-4">${pet_name}</h3>

                <div class="text-gray-600 space-y-4 border-b flex gap-6">
                    <div class="">
                        <div class="flex items-center gap-1">
                            <i class="fa-solid fa-wind h-5 w-5"></i>
                            <p>Breed: ${breed ? breed : 'Not Found'}</p>
                        </div>
                        <div class="flex items-center gap-1">
                            <i class="fa-solid fa-venus h-5 w-5"></i>
                            <p>Gender: ${gender ? gender : 'Not Found'}</p>
                        </div>
                        <div class="flex items-center gap-1">
                            <i class="fa-solid fa-venus h-5 w-5"></i>
                            <p>Vaccinated_status: ${vaccinated_status ? vaccinated_status : 'Not Found'}</p>
                        </div>
                    </div>
                    <div>
                        <div class="flex items-center gap-1">
                            <i class="fa-regular fa-calendar h-5 w-5"></i>
                            <p>Birth: ${date_of_birth ? date_of_birth : 'Not Found'}</p>
                        </div>

                        <div class="flex items-center gap-1 pb-6 ">
                            <i class="fa-solid fa-dollar-sign h-5 w-5"></i>
                            <p>Price: ${price}$</p>
                        </div>
                    </div>
                </div>

                <div class="my-4">
                <h3 class="text-xl font-bold">Details Information</h3>
                <p>${pet_details}</p>
                </div>

                <div class="modal-action">
                <form method="dialog" class="w-full">
                    <!-- if there is a button in form, it will close the modal -->
                    <button class="btn w-full bg-green-100">Close</button>
                </form>
                </div>
            </div>
        </dialog>
    `
    my_modal_1.showModal()
}

const handleSortByPrice = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`);
    const data = await res.json();
    displaySortByPrice(data.pets);
}

const displaySortByPrice = (pets) => {
    console.log(pets);
    const sortedPets = pets.sort((a, b) => b.price - a.price);
    const loader = document.getElementById('loader');
    loader.classList.remove('hidden')

    // remove prev loaded data
    document.getElementById('all-pets-container').classList.add('hidden')

    setTimeout(() => {
        displayAllPets(sortedPets);
        // show loaded data
        document.getElementById('all-pets-container').classList.remove('hidden')
    }, 2000);
}
LoadAllPets();

