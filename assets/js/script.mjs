import fetchStarWarsData from "./fetchData.mjs";
import { firstRowCards, secondRowCards, thirdRowCards } from "./cards.mjs";

function* characterGenerator(characters) {
    for (let character of characters) {
        yield character
    }
}

async function cardGenerator(containerSelector, pageNumber, range, row) {
    const container = document.querySelector(containerSelector)
    const data = await fetchStarWarsData(pageNumber)
    const characters = data.results.slice(range.start, range.end)
    const generator = characterGenerator(characters)

    container.addEventListener('mouseenter', () => {
        const nextCharacter = generator.next()
        if (!nextCharacter.done) {
            const card = row(nextCharacter.value)
            container.insertAdjacentHTML('beforeend', card)
        }
    });
}

async function firstRowCardGenerator() {
    await cardGenerator('#firstRow', 1, { start: 0, end: 5 }, firstRowCards);
}

async function secondRowCardGenerator() {
    await cardGenerator('#secondRow', 1, { start: 5, end: 10 }, secondRowCards);
}

async function thirdRowCardGenerator() {
    await cardGenerator('#thirdRow', 2, { start: 0, end: 5 }, thirdRowCards);
}

firstRowCardGenerator()
secondRowCardGenerator()
thirdRowCardGenerator()