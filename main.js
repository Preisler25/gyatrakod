let print
let temp

class Garazs{

    constructor(name, street, parking_place, parklist){
        this.name = name //name
        this.street = street //street
        this.parking_place = parking_place //max place
        this.parklist = parklist //list
    }

    wannaPark(list, num1){
        if(list.length < num1){
            return true
        } return false
    }
    parkIn(Kocsi){
        if(this.wannaPark(this.parklist, this.parking_place)){
            this.parklist.push(Kocsi)
            console.log(1);
        }
    }
    parkOut(Kocsi){
        const index = this.parklist.indexOf(Kocsi);
        this.parklist.splice(index, 1);
        console.log(2);
    }

    parkButton(Kocsi){
        if(Kocsi.parked == false){
            this.parkIn(Kocsi)
            Kocsi.parked = true
        }else{
            this.parkOut(Kocsi)
            Kocsi.parked = false
        }
    }

    display(list){
            print = "";
        for(let i = 0; i < list.length; i++) {     
            print += list[i].plate+"\n";
        }
    }
}

    

class Kocsi{
    constructor(plate, brand, type, parked, name){
        this.plate = plate
        this.brand = brand
        this.type = type
        this.parked = parked
        this.name = name
    }  
} 
let butList = "";
function loop() {
    G1.display(G1.parklist)
    document.getElementById('garadge').innerHTML = print;
    if(butList != undefined){document.getElementById('btnlist').innerHTML = butList;}
}

const createCar = () => {
    const name = document.getElementById('car').value
    const plate = document.getElementById('plate').value
    const brand = document.getElementById('brand').value
    const type = document.getElementById('type').value
    const parked = false
    
    window['C' + name] = new Kocsi(plate, brand, type, parked);
    butList += '<button onclick="G1.parkButton(C'+name+')">Parkcar'+name+'</button>';        
}

const G1 = new Garazs("freeParking", "tököly", 30, []);
//const C1 = new Kocsi("HUN-123", "porke", "911");
//const C2 = new Kocsi("HUN-456", "merci", "SL300");

setInterval(loop, 50)