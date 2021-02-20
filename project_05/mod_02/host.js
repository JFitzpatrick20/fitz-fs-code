const GUEST_LIST = [
    { name: 'Leonard', count: 6 },
    { name: 'Sharon', count: 4 }
  ];

  function buildGuestCard(guest) {
    return `
    <div class="guest-card">
    <span>${guest.name}, party of ${guest.count}</span>
    </div>
    `
    
}

function renderGuestList() {
    const guestList = $('.guest-list')
    guestList.empty()
    GUEST_LIST.forEach(Element => {
        guestList.append(buildGuestCard(Element))
    });

}

renderGuestList()



function addGuestToList(event) {
    event.preventDefault()
    
    GUEST_LIST.push(
        {
            count: $('#guest-count').val(),
            name: $('#guest-name').val()
        })
    renderGuestList() 
    $('form').trigger("reset")
    }
    
    


$('.guest-form').submit(addGuestToList) 


function serveNextGuest() {
    GUEST_LIST.shift()
    renderGuestList()
}

$('#serve').click(serveNextGuest);