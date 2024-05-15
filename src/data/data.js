const productos = [
    {
        id: 7341,
        nombre: "ALL-STARS",
        descripcion: "sdfsdf",
        precio: 60000,
        stock: 2,
        category: "starPlayers",
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
        imagen: '/multimedia/2_-STAR PLAYERS/BLUEBERRY FEM/PWEB_BB_FEM -01.png'
    },
    {
        id: 592,
        nombre: "Blueberry XXL AUTO",
        descripcion: "sdgfsdg",
        precio: 34000,
        stock: 1,
        category: "starPlayers",
        imagen: '/multimedia/2_-STAR PLAYERS/BLUEBERRY XXL AUTO/PWEB_BB_AUTO -01.png'
    },
    {
        id: 593,
        nombre: "Critical+2 AUTO",
        descripcion: "sdgfsdg",
        precio: 34000,
        stock: 1,
        category: "starPlayers",
        imagen: '/multimedia/2_-STAR PLAYERS/CRITICAL + 2 AUTO/auto-1 (1).png'
    },
    {
        id: 594,
        nombre: "Critical+2 FEM",
        descripcion: "sdgfsdg",
        precio: 39000,
        stock: 1,
        category: "starPlayers",
        imagen: '/multimedia/2_-STAR PLAYERS/CRITICAL +2 FEM/fem-1 (1).png'
    },
    {
        id: 595,
        nombre: "Doble cookies AUTO",
        descripcion: "sdgfsdg",
        precio: 40000,
        stock: 1,
        category: "starPlayers",
        imagen: '/multimedia/2_-STAR PLAYERS/DOUBLE COOKIES AUTO/DOUBLE COOKIES AUTO. PLANTA + LOGO.jpg'
    },
    {
        id: 596,
        nombre: "Doble cookies FEM",
        descripcion: "sdgfsdg",
        precio: 40000,
        stock: 1,
        category: "starPlayers",
        imagen: '/multimedia/2_-STAR PLAYERS/DOUBLE COOKIES FEM/DOUBLE COOKIES FEM 1000X1000.png'
    },
    {
        id: 597,
        nombre: "El Gaucho",
        descripcion: "sdgfsdg",
        precio: 42000,
        stock: 1,
        category: "starPlayers",
        imagen: '/multimedia/2_-STAR PLAYERS/EL GAUCHO/PLANTA-50.jpg'
    },
    {
        id: 598,
        nombre: "Gorilla Glue AUTO",
        descripcion: "sdgfsdg",
        precio: 40000,
        stock: 1,
        category: "starPlayers",
        imagen: '/multimedia/2_-STAR PLAYERS/GORILLA GLUE AUTO/IMAGEN_ gorilla Auto PLANTA+ LOGO.jpg'
    },
    {
        id: 599,
        nombre: "Gorilla Glue FASTER",
        descripcion: "sdgfsdg",
        precio: 45000,
        stock: 1,
        category: "",
        imagen: '/multimedia/2_-STAR PLAYERS/GORILLA GLUE FASTER/PLANTA-50.jpg'
    },
    {
        id: 5991,
        nombre: "Gorilla Glue FEM",
        descripcion: "sdgfsdg",
        precio: 45000,
        stock: 1,
        category: "",
        imagen: '/multimedia/2_-STAR PLAYERS/GORILLA GLUE FEM/Copia de gorilla-glue-4.jpg'
    },
    {
        id: 607,
        nombre: "GREEN TIGER",
        descripcion: "sdgfsdg",
        precio: 50000,
        stock: 1,
        category: "hallOfFame",
        imagen: '/multimedia/4_-HALL OF FAME/GREEN TIGER/BSF_Green-tiger_1.jpg'
    },
    {
        id: 608,
        nombre: "OBG KUSH",
        descripcion: "sdgfsdg",
        precio: 50000,
        stock: 1,
        category: "",
        imagen: '/multimedia/4_-HALL OF FAME/OBG KUSH/BSF_Obg-kush_1.jpg'
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