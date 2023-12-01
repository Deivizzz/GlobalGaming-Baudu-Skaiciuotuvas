let baudosHTML = '';

function baudosBankas () {
  baudosHTML +=`
  <div class="preview">
    <div class="icon">
      <img src="icons/icons8-merchant-account-100.png" alt="">
    </div>
    <div class="pav">
      <p">Bankas</p>
    </div>
    <div class="suma">
      <select class="banko-ivestis">
        <option value="" style="display: none;">Pasirink</option>
        <option value="lengvas">Lengvas</option>
        <option value="vidutinis">Vidutinis</option>
        <option value="sunkus">Sunkus</option>
      </select>
    </div>
    <div>
      <button class="prideti js-prideti" data-baudos-kaina="${baudos.price}" data-baudos-id="${baudos.id}">Pridėti</button>
    </div>
  </div>
  `;
};
baudosBankas();

baudos.forEach((baudos) => {
  baudosHTML +=`
    <div class="preview">
      <div class="icon">
      <img src="${baudos.image}" alt="">
      </div>
      <div class="pav">
        <p title="${baudos.title}">${baudos.name}</p>
      </div>
      <div class="suma">
        <p>€${baudos.price}</p>
      </div>
      <div>
        <button class="prideti js-prideti" data-baudos-kaina="${baudos.price}" data-baudos-id="${baudos.id}">Pridėti</button>
      </div>
    </div>
  `;
});

function BaudosGreitis() {
  baudosHTML +=`
    <div class="preview">
      <div class="icon">
        <img src="icons/icons8-speedometer-100.png" alt="">
      </div>
      <div class="pav">
        <p style="padding-top: 15px;">Greičio<br>viršijimas</p>
      </div>
      <div class="suma greicio-ivestis">
        <select class="banko-ivestis">
          <option value="" style="display: none;">Pasirink</option>
          <option value="10-20" title="€100">10-20</option>
          <option value="20-30" title="€250">20-30</option>
          <option value="30-40" title="€350">30-40</option>
          <option value="40+" title="€600">40+</option>
        </select>
      </div>
      <div>
        <button class="prideti js-prideti" data-baudos-kaina="${baudos.price}" data-baudos-id="${baudos.id}">Pridėti</button>
      </div>
    </div>
  `;
};
BaudosGreitis();

console.log(baudosHTML);

document.querySelector('.js-grid-video').innerHTML = baudosHTML;

document.querySelectorAll('.js-prideti').forEach((button) => {
  button.addEventListener('click', () => {
    const baudosId = button.dataset.baudosId;

    let matchingItem;

    cart.forEach((item) => {
      if(baudosId === item.baudosId) {
        matchingItem = item;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        baudosId: baudosId,
        quantity: 1
      });
    }
    console.log(cart);
  });
});