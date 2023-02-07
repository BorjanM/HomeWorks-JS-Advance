let urlAllProducts = "https://fakestoreapi.com/products";
let prvProdukt = document.getElementById(`produktite`);
prvProdukt.style.color = `blue`;

fetch(urlAllProducts)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      console.log(element);

      const div = document.createElement(`div`);{
        div.innerHTML = `<br> <hr> MODEL: <br> ${element.title} <br> cenata e ${element.price}Eu   <br><img src="${element.image}">`;
        document.body.appendChild(div);
      }
    });
  });
