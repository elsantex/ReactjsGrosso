

const productos = [
    {
      id:0,
      category:"TV",
      description:"Resolución:3840 x 2160",
      description2:"Formato de pantalla: Plano",
      item:`Smart TV 4K UHD Samsung 75” `,
      precio:400000,
      image:"https://images.fravega.com/f500/cb62ff72942d27494e4fda22751d256f.jpg",
    
  },
    {
      id:1,
      category:"TV",
      description:"Resolución:3840 x 2160",
      description2:"Formato de pantalla: Plano",
      item:`Smart TV 4K UHD 55" Admiral`,
      precio:150000,
    image:"https://images.fravega.com/f500/2d277ff6b1ddbd8c14092c6b199c2ca4.jpg",
    
  },
    {
      id:2,
      category:"TV",
      description:"Resolución:1920 x 1080",
      description2:"Formato de pantalla: Plano",
    item:`Smart TV 40" Full HD TCL`,
    precio:75000,
    image:"https://images.fravega.com/f500/1581ea7fe76bf78887561f2f98369269.jpg",
      },
    {
      id:3,
      category:"TV",
      description:"Resolución:3840 x 2160",
      description2:"Formato de pantalla: Plano",
    item:`Smart TV 4K 65" LG`,
    precio:200000,
    image:"https://images.fravega.com/f500/b96d94fb4da04a80ccb944e316a93343.jpg",
      },
    {
      id:4,
      category:"Smartphone",
      description:"Camara principal: 50.0 MP + 12.0 MP + 10.0 MP",
      description2:"Camara frontal: 4.0 MP + 10.0 MP",
      item:"Celular Samsung Galaxy Z Fold4 512GB",
      precio:430000,
    image:"https://images.fravega.com/f500/d01047ac1160082d33a808fce19fff3d.jpg",
      },
    {
      id:5,
      category:"Smartphone",
      description:"Camara principal: 12 MP + 108 MP + 10 MP + 10 MP",
      description2:"Camara frontal: 40 MP",
    item:"Celular Samsung Galaxy S22 Ultra",
    precio:362.999,
    image:"https://images.fravega.com/f500/3ffb6815c43f44aadbeaaeb86af2a273.jpg",
      },
    {
      id:6,
      category:"Smartphone",
      description:"Camara principal: 50 MP+ 50 MP + 2 MP",
      description2:"Camara frontal: 60 MP",
    item:"Celular Motorola Edge 30 Pro 256 GB",
    precio:230000,
    image:"https://images.fravega.com/f500/6fd9539be85e227e9af928286a546a11.jpg",
    
  },
    {
      id:7,
      category:"Smartphone",
      description:"Camara principal: 50 MP + 8 MP + 2 MP",
      description2:"Camara frontal: 16 MP",
    item:"Celular Motorola G22 128GB",
    precio:52000,
    image:"https://images.fravega.com/f500/1df905f399b2e1a9c9ac94cb47d0f685.jpg",
    
  },
    {
      id:8,
      category:"Electrodomestico",
      description:"Capacidad: 23 litros",
      description2:"Potencia: 800 watts",
    item:"Microondas Samsung 800W 23Lt con Grill",
    precio:48000,
    image:"https://images.fravega.com/f500/dc2c38ecd9c156f049720f05f6e205cd.jpg",
  },
    {
      id:9,
      category:"Electrodomestico",
      description:"Tipo de carga: Frontal",
      description2:"Capacidad de lavado: De 5 a 7 Kg",
      item:"Lavarropas Carga Frontal Inverter Samsung 7 Kg 1400 RPM ",
      precio:137500,
    image:"https://images.fravega.com/f500/574d7dad53aa30b375edc7aabd6437d1.jpg",
    
  },
  {
    id:10,
    category:"Electrodomestico",
    description:"Capacidad bruta: 564 litros",
    description2:"Estantes regulables: Si",
  item:"Heladera No Frost Whirlpool 541Lt",
  precio:505000,
  image:"https://images.fravega.com/f500/fb476ba3039ace3532a3ae0f1210de7e.jpg",
  
},
{
  id:11,
  category:"Electrodomestico",
  description:"Frio/Calor: Si",
  description2:"Frigorias: 4000 a 4999",
item:"Aire Acondicionado Split Frío/Calor Philco 4400F 5200W",
precio:165000,
image:"https://images.fravega.com/f500/2597e35022f8ce8e6e5dbd9ec8ba9c95.jpg",

}

  
  ];

  export const getItemById = (id) =>{
    return productos[id];
  }



  export default productos;