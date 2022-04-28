export default function initMenuMobile() {
  const btnMobile = document.querySelector('#btn-mobile');

  function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
  }

  btnMobile.addEventListener('click', toggleMenu);
  btnMobile.addEventListener('touchstart', toggleMenu);
}

// let teste = document.querySelector('.detalhe-status');
// teste.testes = document.createElement('p');
// let texto = document.createTextNode(
//   Fbits.MinhaConta.Pedido.Produtos[0].Rastreamento,
// );
// teste.appendChild(texto);

// var lista = document.getElementsByTagName('ul')[0];
// var itens = document.getElementsByTagName('li');
// lista.insertBefore(novoElem, itens[0]);

// function criar() {
//   let p = document.createElement('p');
//   p.textContent =
//     'Seu pedido será enviado após a etapa de confecção dos produtos.';
//   p.style.color = 'white';
//   p.style.backgroundColor = '#ff7f62';
//   p.style.padding = '15px';
//   p.style.margin = '20px 0px 20px 0px';
//   p.style.borderRadius = '10px';
//   p.style.fontWeight = 'bold';
//   var cx = document.querySelector('.shipping .shipping-result');
//   cx.appendChild(p);
// }
