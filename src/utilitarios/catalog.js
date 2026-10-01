import product1Img from '../assets/img/product-1.jpg';
import product2Img from '../assets/img/product-2.jpg';
import product3Img from '../assets/img/product-3.jpg';
import product4Img from '../assets/img/product-4.jpg';
import product5Img from '../assets/img/product-5.jpg';
import product6Img from '../assets/img/product-6.jpg';
import product7Img from '../assets/img/product-7.jpg';
import product8Img from '../assets/img/product-8.jpg';
import product9Img from '../assets/img/product-9.jpg';
import product10Img from '../assets/img/product-10.jpg';
import product11Img from '../assets/img/product-11.jpg';
import product12Img from '../assets/img/product-12.jpg';
import product13Img from '../assets/img/product-13.jpg';

import modelP1 from '../assets/img-models/model-p-1.jpg'
import modelP2 from '../assets/img-models/model-p-2.jpg'
import modelP3 from '../assets/img-models/model-p-3.jpg'
import modelP4 from '../assets/img-models/model-p-4.jpg'
import modelP5 from '../assets/img-models/model-p-5.jpg'
import modelP6 from '../assets/img-models/model-p-6.jpg'
import modelP7 from '../assets/img-models/model-p-7.jpg'
import modelP8 from '../assets/img-models/model-p-8.jpg'
import modelP9 from '../assets/img-models/model-p-9.jpg'
import modelP10 from '../assets/img-models/model-p-10.jpg'
import modelP11 from '../assets/img-models/model-p-11.jpg'
import modelP12 from '../assets/img-models/model-p-12.jpg'
import modelP13 from '../assets/img-models/model-p-13.jpg'

export const catalog = [
  {
    id: 1,
    brand: 'OH, BOY!',
    name: 'Vestido estampado',
    size: 'Tam: PP',
    price: 30,
    image: product1Img,
    images: [product1Img,modelP1],
    extra: false,
  },
  {
    id: 2,
    brand: 'Maria Filó',
    name: 'Saia preta estampada',
    size: 'Tam: P',
    price: 20,
    image: product2Img,
    images: [product2Img,modelP2],
    extra: false,
  },
  {
    id: 3,
    brand: 'C&A',
    name: 'Vestido branco com tecido brilhoso',
    size: 'Tam: PP/P',
    price: 20,
    image: product3Img,
    images: [product3Img,modelP3],
    extra: false,
  },
  {
    id: 4,
    brand: 'L3 Clothes',
    name: 'Vestido preto com brilho dourado',
    size: 'Tam: P',
    price: 25,
    image: product4Img,
    images: [product4Img,modelP4],
    extra: false,
  },
  {
    id: 5,
    brand: 'Lupo',
    name: 'Saia de treino com short por baixo ',
    size: 'Tam: M',
    price: 30,
    image: product5Img,
    images: [product5Img,modelP5],
    extra: false,
  },
  {
    id: 6,
    brand: 'Dress',
    name: 'Macacão longo tomara que caia',
    size: 'Tam: M',
    price: 35,
    image: product6Img,
    images: [product6Img,modelP6],
    extra: false,
  },
  {
    id: 7,
    brand: '',
    name: 'Body preto de couro sintético',
    size: 'Tam: P',
    price: 15,
    image: product7Img,
    images: [product7Img,modelP7],
    extra: false,
  },
  {
    id: 8,
    brand: 'Lez a Lez',
    name: 'Vestido jeans',
    size: 'Tam: M',
    price: 50,
    image: product8Img,
    images: [product8Img,modelP8],
    extra: false,
  },
  {
    id: 9,
    brand: 'Calvin Klein',
    name: 'Calça jeans Chumbo',
    size: 'Tam: 36',
    price: 35,
    image: product9Img,
    images: [product9Img,modelP9],
    extra: false,
  },
  {
    id: 10,
    brand: 'Vanessa Madsen',
    name: 'Short estampado',
    size: 'Tam: M',
    price: 40,
    image: product10Img,
    images: [product10Img,modelP10],
    extra: false,
  },
  {
    id: 11,
    brand: '',
    name: 'Short com elástico na cintura bicolor',
    size: 'Tam: 34-38',
    price: 15,
    image: product11Img,
    images: [product11Img,modelP11],
    extra: false,
  },
  {
    id: 12,
    brand: 'Maria Filó',
    name: 'Regata acetinada',
    size: 'Tam: P',
    price: 25,
    image: product12Img,
    images: [product12Img,modelP12],
    extra: false,
  },
  {
    id: 13,
    brand: '',
    name: 'Bucket tropical azul',
    size: 'Tam: 36',
    price: 15,
    image: product13Img,
    images: [product13Img,modelP13],
    extra: true,
  },
];

export const catalogIndexById= catalog.reduce((acc,currenValue) => {
  const {id} = currenValue
  acc[id] = currenValue
  return acc
},{})
  