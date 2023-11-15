import Navbar from './components/navbar/Navbar.js';
import CardItem from './components/Itens/CardItem.js';
import React from 'react';
import { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaitems: [
        {
          titulo: "Porção (1)",
          imagem: "https://drive.google.com/uc?id=1eSU_mWM6aMvZZ0-RfBE02mTC8So3g8Ju&export=download",
          preco: "(P) RS 25,00 (M) RS 50,00 (G) RS 75,00",
          categoria: 1,
          descricao: ["400g de batata, 400g de frango sassami"]
        },
        {
          titulo: "Porção (2)",
          imagem: "https://drive.google.com/uc?id=1q7jx57n7bXFgzMDFnswncJ3LSDKawoJH&export=download",
          preco: "(P) RS 25,00 (M) RS 50,00 (G) RS 75,00",
          categoria: 1,
          descricao: ["300g de batata, 250g de calabresa"]
        },
        {
          titulo: "Porção (3)",
          imagem: "https://drive.google.com/uc?id=1zqzkDFCc7Ym52H0UTqDmaKILKP-E8V56&export=download",
          preco: "(P) RS 25,00 (M) RS 50,00 (G) RS 75,00",
          categoria: 1,
          descricao: [" 400g de batata, 400g de frango a passarinho, 300g de polenta"]
        },
        {
          titulo: "Porção (4)",
          imagem: "https://drive.google.com/uc?id=1jczUJnb8oOrbdNBRSSF1KI2W8b7_qsYp&export=download",
          preco: "(P) RS 25,00 (M) RS 50,00 (G) RS 75,00",
          categoria: 1,
          descricao: ["300g de batata, 300g de tulipa, 400g de frango a passarinho, 200g de coração"]
        },
        {
          titulo: "Porção (5)",
          imagem: "https://drive.google.com/uc?id=1gAUunz0k84NMyrW-0iDlITHKnfmaA7Av&export=download",
          preco: "(P) RS 25,00 (M) RS 50,00 (G) RS 75,00",
          categoria: 1,
          descricao: ["400g de frango a passarinho, 400g de batata"]
        },
        {
          titulo: "Porção (6)",
          imagem: "https://drive.google.com/uc?id=1WgCZYrLzRjXoppkEp2RWfZiFhbUnQ_GE&export=download",
          preco: "(P) RS 25,00 (M) RS 50,00 (G) RS 75,00",
          categoria: 1,
          descricao: ["ovo de codorna, pepino, azeitona, cebola cristal, batata, aipin, polenta, anéis de cebola, coração, alcatra, frago, calabresa, maionese e pão xadres"]
        },
        {
          titulo: "Porção (7)",
          imagem: "https://drive.google.com/uc?id=1HFXeooo8B8xeLW1MGzSOeUUdkmEdqM8L&export=download",
          preco: "(P) RS 25,00 (M) RS 50,00 (G) RS 75,00",
          categoria: 1,
          descricao: ["300g de de batata, 300g de polenta, 300g de frango sassami,300g de frango a passarinho"]
        },
        {
          titulo: "Porção (8)",
          imagem: "https://drive.google.com/uc?id=15ih_h0JCc_U9USQKlOAkQh3-uDwN7ZZS&export=download",
          preco: "(P) RS 25,00 (M) RS 50,00 (G) RS 75,00",
          categoria: 1,
          descricao: ["300g de batata, 300g de tulipa"]
        },
        {
          titulo: "Porção (9)",
          imagem: "https://drive.google.com/uc?id=1sK1o5xevETAP8oOKlTBYn4z2kgLUdgsa&export=download",
          preco: "(P) RS 25,00 (M) RS 50,00 (G) RS 75,00",
          categoria: 1,
          descricao: ["300g de batata, 300g de polenta, 250g de calabresa, 300g de frango sassami, 200g de alcatra"]
        },
        {
          titulo: "Porção (10)",
          imagem: "https://drive.google.com/uc?id=1jc87xtnJyVRPfOh5SErYRJCXw_FnMS_9&export=download",
          preco: "(P) RS 25,00 (M) RS 50,00 (G) RS 75,00",
          categoria: 1,
          descricao: ["250g de tiras alcatra, 250g de tiras file de peito, 250g de calabresa, 400g de batata"]
        },
        {
          titulo: "Combo (1)",
          imagem: "https://drive.google.com/uc?id=1OiIDu4-QqUNWJNCtYHGQjLxPl1bLdIJy&export=download",
          preco: "(P) RS 25,00 (M) RS 50,00 (G) RS 75,00",
          categoria: 3,
          descricao: ["Dois Hamburguer (pão, carne, queijo, presunto e tomate), 300g de batata, 300g de nagtes"]
        }, {
          titulo: "Batata frita",
          imagem: "https://drive.google.com/uc?id=1-tZF3WkvZ0VFRUVmMwc8-1P9TG4yw6dn&export=download",
          preco: "(P) RS 25,00 (M) RS 50,00 (G) RS 75,00",
          categoria: 1,
          descricao: ["250g de batata","500g de batata"]
        }, {
          titulo: "Batata com bacon",
          imagem: "https://drive.google.com/uc?id=1ft_yotR9b5KhpmyHuZYqkBTXR9Olagop&export=download",
          preco: "(P) RS 25,00 (M) RS 50,00",
          categoria: 1,
          descricao: ["250g de batata","500g de batata"]
        }, {
          titulo: "Batata bacon e cheddar",
          imagem: "https://drive.google.com/uc?id=1fSkAa0oiRgX-QPiAsqro6g9O4EwU2qMF&export=download",
          preco: "(P) RS 25,00 (M) RS 50,00",
          categoria: 1,
          descricao: ["250g de batata","500g de batata"]
        }, {
          titulo: "Xis gaúcho (carne)",
          imagem: "https://drive.google.com/uc?id=1WgCZYrLzRjXoppkEp2RWfZiFhbUnQ_GE&export=download",
          preco: "RS 50,00",
          categoria: 2,
          descricao: ["150g de carne, ovo, queijo, presunto, milho, ervilha, tomate picado, alface picado, maionese caseira acompanha fritas"]
        }, {
          titulo: "Xis gaúcho (Frango)",
          imagem: "https://drive.google.com/uc?id=1WgCZYrLzRjXoppkEp2RWfZiFhbUnQ_GE&export=download",
          preco: "R$50,00",
          categoria: 2,
          descricao: [" 150g de frango, ovo, queijo, presunto, milho, ervilha, tomate picado, alface picado, maionese caseira acompanha fritas"]
        }, {
          titulo: "Xis gaúcho (Calabresa)",
          imagem: "https://drive.google.com/uc?id=1WgCZYrLzRjXoppkEp2RWfZiFhbUnQ_GE&export=download",
          preco: "R$50,00",
          categoria: 2,
          descricao: ["150g de calabresa, ovo, queijo, presunto, milho, ervilha, tomate picado, alface picado, maionese caseira acompanha fritas"]
        }, {
          titulo: "Xis gaúcho (Bacon)",
          imagem: "https://drive.google.com/uc?id=1WgCZYrLzRjXoppkEp2RWfZiFhbUnQ_GE&export=download",
          preco: "R$50,00",
          categoria: 2,
          descricao: ["150g de bacon, ovo, queijo, presunto, milho, ervilha, tomate picado, alface picado, maionese caseira acompanha fritas"]
        }, {
          titulo: "Xis gaúcho (Coração)",
          imagem: "https://drive.google.com/uc?id=1WgCZYrLzRjXoppkEp2RWfZiFhbUnQ_GE&export=download",
          preco: "R$50,00",
          categoria: 2,
          descricao: ["150g de coração, ovo, queijo, presunto, milho, ervilha, tomate picado, alface picado, maionese caseira acompanha fritas"]
        }, {
          titulo: "Xis gaúcho (Carne e Bacon)",
          imagem: "https://drive.google.com/uc?id=1WgCZYrLzRjXoppkEp2RWfZiFhbUnQ_GE&export=download",
          preco: "R$50,00",
          categoria: 2,
          descricao: ["150g de carne, 100g de bacon, ovo, queijo, presunto, milho, ervilha, tomate picado, alface picado, maionese caseira acompanha fritas"]
        }, {
          titulo: "Xis gaúcho (Tudão)",
          imagem: "https://drive.google.com/uc?id=1WgCZYrLzRjXoppkEp2RWfZiFhbUnQ_GE&export=download",
          preco: "R$50,00",
          categoria: 2,
          descricao: ["Xis gaúcho (tudão), 150g de carne, 100g de bacon, 100g de calabresa, 100g de frango, 100g de coração, ovo, queijo, presunto, milho, ervilha, tomate picado, alface picado, maionese caseira acompanha fritas."]
        }
      ],
      categoria: 0,
    };
  }
  selecaoCategoria(select) {
    this.setState({ categoria: select })
  }
  render() {
    return (
      <div>
        <Navbar selecionarCategoria={this.selecaoCategoria.bind(this)} />
        {this.state.listaitems.filter((food, i) => this.state.categoria === 0 || food.categoria === this.state.categoria).map((food, index) => { return <CardItem key={index} titulo={food.titulo} descricao={food.descricao} valor={food.preco} imagem={food.imagem} /> })}
      </div >
    );
  }
}

export default App;
