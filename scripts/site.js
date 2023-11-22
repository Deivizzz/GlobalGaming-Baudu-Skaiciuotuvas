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
      <button class="prideti">Pridėti</button>
    </div>
  </div>
  `;
};
baudosBankas();

const baudos = [{
  image: 'icons/icons8-headlight-100.png',
  name: 'Šviesos',
  price: '€400',
  title: ''
}, {
  image: 'icons/icons8-document-100.png',
  name: 'Draudimas',
  price: '€800',
  title: ''
}, {
  image: 'icons/icons8-engine-oil-100.png',
  name: 'Technikinė',
  price: '€1500',
  title: ''
}, {
  image: 'icons/icons8-licence-plate-100.png',
  name: 'Numeriai',
  price: '€1000',
  title: ''
}, {
  image: 'icons/icons8-road-100.png',
  name: 'Wrong',
  price: '€800',
  title: ''
}, {
  image: 'icons/icons8-automatic-car-wash-100.png',
  name: 'Chuliganiškas',
  price: '€1500',
  title: ''
}, {
  image: 'icons/icons8-crossroad-100.png',
  name: 'Neteisingas<br>važiavimas<br>per sankryžą',
  price: '€200',
  title: ''
}, {
  image: 'icons/icons8-slippery-road-100.png',
  name: 'Nesaugus<br>vairavimas',
  price: '€250',
  title: ''
}, {
  image: 'icons/icons8-car-racing-100.png',
  name: 'Nelegalios<br>lenktynės',
  price: '€1500',
  title: ''
}, {
  image: 'icons/icons8-sidewalk-100.png',
  name: 'Važiavimas<br>šaligatviu',
  price: '€500',
  title: 'žole/smėliu'
}, {
  image: 'icons/icons8-police-car-100.png',
  name: 'Trukdymas<br>policininkų<br>darbui',
  price: '€2000',
  title: ''
}, {
  image: 'icons/icons8-car-crash-100.png',
  name: 'Pareigūnų<br>taranavimas',
  price: '€2700',
  title: ''
}, {
  image: 'icons/icons8-shouting-100.png',
  name: 'Įkyrus<br>prašymas<br>dirbti<br>mokiniu',
  price: '€800',
  title: ''
}, {
  image: 'icons/icons8-police-fine-100.png',
  name: 'Prašymas<br>įspėti ar<br>sumažinti<br>baudą',
  price: '€250',
  title: ''
}];



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
        <p>${baudos.price}</p>
      </div>
      <div>
        <button class="prideti">Pridėti</button>
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
        <button class="prideti">Pridėti</button>
      </div>
    </div>
  `;
};
BaudosGreitis();


console.log(baudosHTML);

document.querySelector('.js-grid-video').innerHTML = baudosHTML;