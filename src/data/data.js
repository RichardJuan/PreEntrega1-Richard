const productos = [
    {
        id: 467,
        nombre: "ALL-STARS",
        descripcion: "sdfsdf",
        precio: 60000,
        stock: 2,
        category: "starPlayers",
        imagen: '/multimedia/1_-TEAMS/All Stars/ALL-STAR-shop-v2-600x600.jpg'
    },
    {
        id: 478,
        nombre: "PSYCHO",
        descripcion: "sdgfsdg",
        precio: 56000,
        stock: 1,
        category: "teams",
        imagen: '/multimedia/1_-TEAMS/Psycho Mix/PSYCO-shop-v2-600x600.jpg'
    }
]

const obtenerProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2500);
    })
};

export default obtenerProductos;