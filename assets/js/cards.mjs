function cards(character, rowNumber) {
    return `
<div class="col-12 col-md-6 col-lg-4">
    <div class="single-timeline-content d-flex wow fadeInLeft" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
        <div class="timeline-icon${rowNumber}"><i class="fa fa-archive" aria-hidden="true"></i></div>
        <div class="timeline-text">
            <h6>${character.name}</h6>
            <p>Estatura: ${character.height} cm. Peso: ${character.mass} kg.</p>
        </div>
    </div>
</div>`
}

function firstRowCards(character) {
    return cards(character, 1)
}

function secondRowCards(character) {
    return cards(character, 2)
}

function thirdRowCards(character) {
    return cards(character, 3)
}

export { firstRowCards, secondRowCards, thirdRowCards }