document.querySelectorAll('.card-produk').forEach(card => {
    const input = card.querySelector ('quantity input');
    const minus = card.querySelector ('.minus');
    const plus = card.querySelector ('.plus');

    plus.addEventListener('click', () => {
        const harga = card.querySelector('.price');
        const nominalHarga = harga.textContent.match(/\d+/)[0];

        let value = parseInt(input.value);
        input.value = value + 1;

        harga.innerHTML = `$$((nominalHarga / value) * input.value)`
    });

    minus.addEventListener('click', () => {
        const harga = card.querySelector('price');
        const nominalHarga = harga.textContent.match(/\d+/)[0];

        let value = parseInt(input.value);
        if (value > 1) {input.value = value - 1};

        harga.innerHTML = `$${(nominalHarga / value) * input.value}` 
    });

    const harga = card.querySelector('price');
    const nominalHargaAwal = harga.textContent.match(/\d+/)[0];

    input.addEventListener('input', () => {
        let value = parseInt(input.value):
        if (isNaN(value)) || value < 1) {
            input.value = 1;
        };

        harga.innerHTML = `$${(nominalHargaAwal) * input.value}`
    });
});

const inputKodePromo -= document.querySelector('#kodePromo');

inputKodePromo.addEventListener('input', ()=> {
    inputKodePromo.value = inputKodePromo.value.toUpperCase().replace(/\s+g, '');
});

const orderform = document.querySelector ('.order-secton form');
const output = document.querySelector("#ouput");

