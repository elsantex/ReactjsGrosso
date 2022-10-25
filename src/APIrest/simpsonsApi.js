

const simpsonsApi = [
    {
      id:0,
      category:"adultos",
      quote:"Yeah. Call this an unfair generalization if you must.. but old people are no good at everything",
      character:"Moe Szyslak",
      image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMoeSzyslak.png?1497567512411",
    characterDirection:"Right"
  },
    {
      id:1,
      category:"adultos",
      quote:"Hello, Simpson. I'm riding the bus today becuase Mother hid my car keys to punish me for talking to a woman on the phone. She was right to do it.",
    character:"Principal Skinner",
    image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FSeymourSkinner.png?1497567511460",
    characterDirection:"Right"
  },
    {
      id:2,
      category:"ninos",
      quote:"That's where I saw the leprechaun...He told me to burn things.",
    character:"Ralph Wiggum",
    image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
    characterDirection:"Left"
  },
    {
      id:3,
      category:"ninos",
      quote:"Me fail English? That's unpossible.",
    character:"Ralph Wiggum",
    image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
    characterDirection:"Left"
  },
    {
      id:4,
      category:"adultos",
      quote:"Oh Yeah!",
      character:"Duffman",
    image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FDuffman.png?1497567511709",
    characterDirection:"Left"
  },
    {
      id:5,
      category:"adultos",
      quote:"Thank you. Come again.",
    character:"Apu Nahasapeemapetilon",
    image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    characterDirection:"Left"
  },
    {
      id:6,
      category:"adultos",
      quote:"I'm sleeping in the bath tub.",
    character:"Marge Simpson",
    image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
    characterDirection:"Right"
  },
    {
      id:7,
      category:"adultos",
      quote:"And this is the snack holder where I can put my beverage or, if you will, cupcake.",
    character:"Homer Simpson",
    image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    characterDirection:"Right"
  },
    {
      id:8,
      category:"adultos",
      quote:"By chilling my loins I increase the chances of impregnating my wife.",
    character:"Apu Nahasapeemapetilon",
    image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629","characterDirection":"Left"
  },
    {
      id:9,
      category:"adultos",
      quote:"I used to be with it. But then they changed what it was. Now what I'm with isn't it, and what's it seems scary and wierd. It'll happen to you.",
    character:"Abe Simpson",
    image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FAbrahamSimpson.png?1497567511593",
    characterDirection:"Right"
  }
  ];

  export const getCharacterById = (id) =>{
    return simpsonsApi[id];
  }



  export default simpsonsApi;