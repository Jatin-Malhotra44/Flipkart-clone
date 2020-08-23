import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Boat Rockerz ",
                "src": "https://www.upsieutoc.com/images/2020/08/23/boat-rockerz.jpg",
                "description": "Wireless Headphones",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 1999,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Data Card",
                "src": "https://www.upsieutoc.com/images/2020/08/23/dataCard.jpg",
                "description": "Jio Wireless Net",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 699,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Web Cam",
                "src": "https://www.upsieutoc.com/images/2020/08/23/logitech-webcam.jpg",
                "description": "Web Cam with inbuilt microphone",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 2459,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Boat Rockerz ",
                "src": "https://www.upsieutoc.com/images/2020/08/23/boat-rockerz.jpg",
                "description": "Wireless Headphones",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 1999,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Data Card",
                "src": "https://www.upsieutoc.com/images/2020/08/23/dataCard.jpg",
                "description": "Jio Wireless Net",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 699,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Web Cam",
                "src": "https://www.upsieutoc.com/images/2020/08/23/logitech-webcam.jpg",
                "description": "Web Cam with inbuilt microphone",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 2459,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "7",
                "title": "Nike Shoes",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
                "description": "Nike Shoes",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 1899,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "8",
                "title": "Action Heels ",
                "src": "https://www.upsieutoc.com/images/2020/08/23/heels.jpg",
                "description": "Light and sturdy",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 270,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "9",
                "title": "Silk kurti",
                "src": "https://www.upsieutoc.com/images/2020/08/23/kurti.jpg",
                "description": "Very Light and colorful",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 450,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "10",
                "title": "Nike Shoes",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
                "description": "Nike Shoes",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 1899,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "11",
                "title": "Action Heels ",
                "src": "https://www.upsieutoc.com/images/2020/08/23/heels.jpg",
                "description": "Light and sturdy",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 270,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "12",
                "title": "Silk kurti",
                "src": "https://www.upsieutoc.com/images/2020/08/23/kurti.jpg",
                "description": "Very Light and colorful",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 450,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "13",
                "title": "Leather Sofa Set",
                "src": "https://www.upsieutoc.com/images/2020/08/23/sofa.jpg",
                "description": "10 Years Warrenty",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 12000,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "14",
                "title": "LG Home Theatre",
                "src": "https://www.upsieutoc.com/images/2020/08/23/televisionUnit.jpg",
                "description": "Feels Real",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 37000,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "15",
                "title": "Home Swing",
                "src": "https://www.upsieutoc.com/images/2020/08/23/swing.jpg",
                "description": "Time To relax",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 5720,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "16",
                "title": "SunFlower Chair",
                "src": "https://www.upsieutoc.com/images/2020/08/23/chair.jpg",
                "description": "50 years of Trust",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 470,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "17",
                "title": "LG Home Theatre",
                "src": "https://www.upsieutoc.com/images/2020/08/23/televisionUnit.jpg",
                "description": "Feels Real",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 37000,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "18",
                "title": "Home Swing",
                "src": "https://www.upsieutoc.com/images/2020/08/23/swing.jpg",
                "description": "Time To relax",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 5720,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
        ],
        electronic: [
            {
                "_id": "1",
                "title": "Boat Rockerz ",
                "src": "https://www.upsieutoc.com/images/2020/08/23/boat-rockerz.jpg",
                "description": "Wireless Headphones",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 1999,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Data Card",
                "src": "https://www.upsieutoc.com/images/2020/08/23/dataCard.jpg",
                "description": "Jio Wireless Net",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 699,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Web Cam",
                "src": "https://www.upsieutoc.com/images/2020/08/23/logitech-webcam.jpg",
                "description": "Web Cam with inbuilt microphone",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 2459,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Boat Rockerz ",
                "src": "https://www.upsieutoc.com/images/2020/08/23/boat-rockerz.jpg",
                "description": "Wireless Headphones",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 1999,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Data Card",
                "src": "https://www.upsieutoc.com/images/2020/08/23/dataCard.jpg",
                "description": "Jio Wireless Net",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 699,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Web Cam",
                "src": "https://www.upsieutoc.com/images/2020/08/23/logitech-webcam.jpg",
                "description": "Web Cam with inbuilt microphone",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 2459,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            }
        ],
        fashion: [
            {
                "_id": "7",
                "title": "Nike Shoes",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
                "description": "Nike Shoes",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 1899,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "8",
                "title": "Action Heels ",
                "src": "https://www.upsieutoc.com/images/2020/08/23/heels.jpg",
                "description": "Light and sturdy",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 270,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "9",
                "title": "Silk kurti",
                "src": "https://www.upsieutoc.com/images/2020/08/23/kurti.jpg",
                "description": "Very Light and colorful",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 450,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "10",
                "title": "Nike Shoes",
                "src": "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
                "description": "Nike Shoes",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 1899,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "11",
                "title": "Action Heels ",
                "src": "https://www.upsieutoc.com/images/2020/08/23/heels.jpg",
                "description": "Light and sturdy",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 270,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "12",
                "title": "Silk kurti",
                "src": "https://www.upsieutoc.com/images/2020/08/23/kurti.jpg",
                "description": "Very Light and colorful",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 450,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        furniture: [
            {
                "_id": "13",
                "title": "Leather Sofa Set",
                "src": "https://www.upsieutoc.com/images/2020/08/23/sofa.jpg",
                "description": "10 Years Warrenty",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 12000,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "14",
                "title": "LG Home Theatre",
                "src": "https://www.upsieutoc.com/images/2020/08/23/televisionUnit.jpg",
                "description": "Feels Real",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 37000,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "15",
                "title": "Home Swing",
                "src": "https://www.upsieutoc.com/images/2020/08/23/swing.jpg",
                "description": "Time To relax",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 5720,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "16",
                "title": "SunFlower Chair",
                "src": "https://www.upsieutoc.com/images/2020/08/23/chair.jpg",
                "description": "50 years of Trust",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 470,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "17",
                "title": "LG Home Theatre",
                "src": "https://www.upsieutoc.com/images/2020/08/23/televisionUnit.jpg",
                "description": "Feels Real",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 37000,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "18",
                "title": "Home Swing",
                "src": "https://www.upsieutoc.com/images/2020/08/23/swing.jpg",
                "description": "Time To relax",
                "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                "price": 5720,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart,fashion,furniture,electronic} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
            const data2 = fashion.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data,...data2]})
            const data3 = electronic.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data,...data3]})
            const data4 = furniture.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data,...data4]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products,fashion,furniture,electronic, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products,fashion,furniture,electronic, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


