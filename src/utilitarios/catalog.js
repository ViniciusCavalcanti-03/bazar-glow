import product1Img from '../assets/img/product-1.jpg';
import product2Img from '../assets/img/product-2.jpg';
import product3Img from '../assets/img/product-3.jpg';
import product4Img from '../assets/img/product-4.jpg';
import product5Img from '../assets/img/product-5.jpg';
import product6Img from '../assets/img/product-6.jpg';
import product7Img from '../assets/img/product-7.jpg';
import product8Img from '../assets/img/product-8.jpg';
import product9Img from '../assets/img/product-9.jpg';


export const catalog = [
  {
    id: 1,
    brand: 'Zara',
    name: 'Camisa Larga com Bolsos',
    size: 'Tam: M',
    price: 70,
    image: product1Img,
    extra: false,
  },
  {
    id: 2,
    brand: 'Zara',
    name: 'Casaco Reto com Lã',
    size: 'Tam: M',
    price: 85,
    image: product2Img,
    extra: false,
  },
  {
    id: 3,
    brand: 'Zara',
    name: 'Jaqueta com Efeito Camurça',
    size: 'Tam: M',
    price: 60,
    image: product3Img,
    extra: false,
  },
  {
    id: 4,
    brand: 'Zara',
    name: 'Sobretudo em Mescla de Lã',
    size: 'Tam: M',
    price: 160,
    image: product4Img,
    extra: false,
  },
  {
    id: 5,
    brand: 'Zara',
    name: 'Camisa Larga Acolchoada de Veludo Cotelê',
    size: 'Tam: M',
    price: 110,
    image: product5Img,
    extra: false,
  },
  {
    id: 6,
    brand: 'Zara',
    name: 'Casaco de Lã com Botões',
    size: 'Tam: M',
    price: 170,
    image: product6Img,
    extra: false,
  },
  {
    id: 7,
    brand: 'Zara',
    name: 'Casaco com Botões',
    size: 'Tam: M',
    price: 75,
    image: product7Img,
    extra: false,
  },
  {
    id: 8,
    brand: 'Zara',
    name: 'Colete Comprido com Cinto',
    size: 'Tam: M',
    price: 88,
    image: product8Img,
    extra: false,
  },
  {
    id: 9,
    brand: 'freeway',
    name: 'Sapato de couro',
    size: 'Tam: 38',
    price: 40,
    image: product9Img,
    extra: true,
  },
];

export const catalogIndexById= catalog.reduce((acc,currenValue) => {
  const {id} = currenValue
  acc[id] = currenValue
  return acc
},{})
  