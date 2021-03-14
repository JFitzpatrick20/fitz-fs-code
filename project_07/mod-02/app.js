const CARD_URL = `https://api.magicthegathering.io/v1/cards?pageSize=20`

function renderCard(card) {
    
    const newCard = $(`<div class="card">
    <h3>Serra Angel - {3}{W}{W}</h3>
    <h4>Creature — Angel</h4>
    <h5 class="set-name">Eternal Masters</h5>
    <pre>Flying, vigilance</pre>
    <img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=413570&amp;type=card">
  </div>`)
  cardElement.find('.set-name').data()
  return newCard
   
}

function renderCardList(cardList) {
    $('#results').empty()
    cardList.forEach( card => {
        $('#results').append(renderCard(card))
    });
}
renderCardList()

function fetchCardList(url) {
    $('.searching').addClass('active')
    window.setTimeout( () => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        $('.searching').removeClass('active')
        console.log(data.cards)

    })
    .catch(() => {})
 } ,1000)
} 
fetchCardList(CARD_URL)

$('#card-search').on('submit', function (event) {
    event.preventDefault()
    let cardName = $('#cname').val()
    let cardText = $('#ctext').val()
    $('#card-search').trigger('reset')

    let newQuery = `${CARD_URL}${cardName ? `&name=${cardName}` : ''}${cardText ? `&text=${cardText}` : ''}`
    console.log(newQuery)
    fetchCardList(newQuery)
    renderCardList()
});

$('#results').on('click', '.card .set-name', function () {
});