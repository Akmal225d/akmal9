
const obj1 = {
  name: 'Akmal',
  surname: 'Bahodirov',
  age: 15,
  address: 'Tashkent'
}

const product1 = {
img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTprWkpPHR0Wq8VNzp1go2B5B5kgbyscrpluA&s',
title: ' Сумка для девушек',
rate: 3.0,
reviews: 10,
oldPrice: 1000,
newPrice: 123140,
description: 'чота там чота там короче туркия норм качество'
}

const product2 = {
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTprWkpPHR0Wq8VNzp1go2B5B5kgbyscrpluA&s',
  title: ' Сумка для девушек',
  rate: 4.6,
  reviews: 190,
  oldPrice: 12000,
  newPrice: 142300,
  description: 'чота там чота там короче туркия норм качество'
  }

  const product3 = {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTprWkpPHR0Wq8VNzp1go2B5B5kgbyscrpluA&s',
    title: ' Сумка для девушек',
  rate: 2.6,
    reviews: 50,
    oldPrice: 11000,
    newPrice: 13760,
    description: 'чота там чота там короче туркия норм качество'
    }

    product3.rate = 4.9
    product3.newPrice = 2000
    product3.oldPrice = 1000

    product3.stock = 52 + 'товаров'

    delete product3.oldPrice

console.log(product1['title'], product1['newPrice'])

console.log(product2['title'], product2['newPrice'])

console.log(product3['title'], product3['oldPrice'], product3['newPrice'], product3['rate'], product3['stock'])


const cardImg = document.querySelector('.card img').src = product1.img
const cardName = document.querySelector('.card h3').innerText = product1.title
const cardRating = document.querySelector('#rating').innerText = product1.rate
const cardReviews = document.querySelector('#reviews').innerText = product1.reviews
const cardOldprice = document.querySelector('.card s').innerText = product1.oldPrice
const cardNewprice = document.querySelector('.card b').innerText = product1.newPrice

