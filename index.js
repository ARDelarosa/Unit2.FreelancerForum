// Variables are defined
const freelancers = [
    {name: "Sue", occupation: "Writer", price: 30},
    {name: "Dave", occupation: "Contractor", price: 50},
    {name: "Linda", occupation: "Tutor", price: 25},
    {name: "Ben", occupation: "Trainer", price: 65},
    {name: "Betty", occupation: "Attorney", price: 100},
    {name: "Tom", occupation: "Programmer", price: 85},
];
const maxLancers = 25;

const addFreelancerIntervalId = setInterval(addFreelancer, 2000);

render();

function render () {
    const people = document.querySelector("#names");
    if (!people) return;

    const nameElements = freelancers.map((output) => {
        const element = document.createElement("li");
        element.textContent = `${output.name}, ${output.occupation} - $${output.price}`;
        return element;
    });
    people.replaceChildren(...nameElements);

    updateAveragePrice();
}

function addFreelancer() {
    const randomFreelancer = freelancers[Math.floor(Math.random() * freelancers.length)];
    freelancers.push(randomFreelancer);
    render();
    if (freelancers.length >= maxLancers) {
        clearInterval(addFreelancerIntervalId);
    }
}

function updateAveragePrice() {
    const total = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
    const average = total / freelancers.length;
    const averagePriceElement = document.querySelector("#average-price");
    averagePriceElement.textContent = `$${average.toFixed(2)}`;

}