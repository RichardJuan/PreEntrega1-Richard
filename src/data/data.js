const productos = [
    {
        id: 7341,
        nombre: "ALL-STARS",
        descripcion: "sdfsdf",
        precio: 60000,
        stock: 2,
        category: "teams",
        imagen: '/multimedia/1_-TEAMS/All Stars/ALL-STAR-shop-v2-600x600.jpg'
    },
    {
        id: 7342,
        nombre: "PSYCHO",
        descripcion: "sdgfsdg",
        precio: 56000,
        stock: 1,
        category: "teams",
        imagen: '/multimedia/1_-TEAMS/Psycho Mix/PSYCO-shop-v2-600x600.jpg'
    },
    {
        id: 7343,
        nombre: "DEALER DEAL",
        descripcion: "sdgfsdg",
        precio: 60000,
        stock: 1,
        category: "teams",
        imagen: '/multimedia/1_-TEAMS/Dealer Deal/DEALER-shop-v2-600x600.jpg'
    },
    {
        id: 7344,
        nombre: "DREAM TEAM",
        descripcion: "sdgfsdg",
        precio: 60000,
        stock: 1,
        category: "teams",
        imagen: '/multimedia/1_-TEAMS/Dream Team/DREAM-TEAM-shop-v2-600x600.jpg'
    },
    {
        id: 591,
        nombre: "Blueberry FEM",
        descripcion: "sdgfsdg",
        precio: 37000,
        stock: 1,
        category: "starPlayers",
        imagen: '/multimedia/2_- STAR PLAYERS/BLUEBERRY-FEM/principal.png'
    },
    {
        id: 592,
        nombre: "Blueberry XXL AUTO",
        descripcion: "sdgfsdg",
        precio: 34000,
        stock: 1,
        category: "starPlayers",
        imagen: '/multimedia/2_- STAR PLAYERS/BLUEBERRY-XXL-AUTO/principal.png'
    },
    {
        id: 593,
        nombre: "Critical+2 AUTO",
        descripcion: "sdgfsdg",
        precio: 34000,
        stock: 1,
        category: "starPlayers",
        imagen: '/multimedia/2_- STAR PLAYERS/CRITICAL+2-AUTO/principal.png'
    },
    {
        id: 594,
        nombre: "Critical+2 FEM",
        descripcion: "sdgfsdg",
        precio: 39000,
        stock: 1,
        category: "starPlayers",
        imagen: '/multimedia/2_- STAR PLAYERS/CRITICAL +2 FEM/principal.png'
    },
    {
        id: 595,
        nombre: "Doble cookies AUTO",
        descripcion: "sdgfsdg",
        precio: 40000,
        stock: 1,
        category: "starPlayers",
        imagen: '/multimedia/2_- STAR PLAYERS/DOUBLE-COOKIES-AUTO/principal.jpg'
    },
    {
        id: 596,
        nombre: "Doble cookies FEM",
        descripcion: "sdgfsdg",
        precio: 40000,
        stock: 1,
        category: "starPlayers",
        imagen: '/multimedia/2_- STAR PLAYERS/DOUBLE-COOKIES-FEM/principal.png'
    },
    {
        id: 597,
        nombre: "El Gaucho",
        descripcion: "sdgfsdg",
        precio: 42000,
        stock: 1,
        category: "starPlayers",
        imagen: '/multimedia/2_- STAR PLAYERS/EL-GAUCHO/principal.jpg'
    },
    {
        id: 598,
        nombre: "Gorilla Glue AUTO",
        descripcion: "sdgfsdg",
        precio: 40000,
        stock: 1,
        category: "starPlayers",
        imagen: '/multimedia/2_- STAR PLAYERS/GORILLA-GLUE-AUTO/principal.jpg'
    },
    {
        id: 599,
        nombre: "Gorilla Glue FASTER",
        descripcion: "sdgfsdg",
        precio: 45000,
        stock: 1,
        category: "",
        imagen: '/multimedia/2_- STAR PLAYERS/GORILLA-GLUE-FASTER/principal.jpg'
    },
    {
        id: 5991,
        nombre: "Gorilla Glue FEM",
        descripcion: "sdgfsdg",
        precio: 45000,
        stock: 1,
        category: "",
        imagen: '/multimedia/2_- STAR PLAYERS/GORILLA-GLUE-FEM/principal.jpg'
    },
    {
        id: 607,
        nombre: "GREEN TIGER",
        descripcion: "sdgfsdg",
        precio: 50000,
        stock: 1,
        category: "hallOfFame",
        imagen: '/multimedia/4_- HALL OF FAME/GREEN TIGER/principal.jpg'
    },
    {
        id: 608,
        nombre: "OBG KUSH",
        descripcion: "sdgfsdg",
        precio: 50000,
        stock: 1,
        category: "hallOfFame",
        imagen: '/multimedia/4_- HALL OF FAME/OBG KUSH/principal.jpg'
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