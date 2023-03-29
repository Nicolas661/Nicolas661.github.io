import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("Kartka","kartka.png")

add([
    sprite("Kartka"),
    pos(0,0)
])

loadSprite("Gwiazdka","Gwiazdka1.png")

const gwiazdka = add([
    sprite("Gwiazdka"),
    pos(0,100)
])

onUpdate(()=>{

    if(gwiazdka.pos.x<500)
{
    gwiazdka.pos.x=gwiazdka.pos.x + 1
    

}

else gwiazdka.pos.x=0
})

loadSound("muzyka","dzisiaj.mp3")

onKeyPress("space",()=>{
    play ("muzyka")
})
