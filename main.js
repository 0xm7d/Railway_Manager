const prompt = require('prompt-sync')();
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 45
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 48
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 49
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 49
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 49
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
const tickets = [
    {
        id: 1,
        passengerName:"mohamed",
        tripId: 2,
        departure : "Safi",
        destination : "Marrakech",
        seatNumber: 1,
        price: 90
    },
    {
        id: 2,
        passengerName:"omar",
        tripId: 5,
        departure : "Youssoufia",
        destination : "Casablanca",
        seatNumber: 1,
        price: 110
    },
    {
        id: 3,
        passengerName:"sara",
        tripId: 2,
        departure : "Safi",
        destination : "Marrakech",
        seatNumber: 2,
        price: 90
    },
    {
        id: 4,
        passengerName:"anas",
        tripId: 3,
        departure : "Safi",
        destination : "Casablanca",
        seatNumber: 1,
        price: 140
    },
    {
        id: 5,
        passengerName:"inas",
        tripId: 2,
        departure : "Safi",
        destination : "Marrakech",
        seatNumber: 3,
        price: 90
    },
    {
        id: 6,
        passengerName:"adam",
        tripId: 16,
        departure : "Meknes",
        destination : "Casablanca",
        seatNumber: 1,
        price: 105
    },
    {
        id: 7,
        passengerName:"younnes",
        tripId: 2,
        departure : "Safi",
        destination : "Marrakech",
        seatNumber: 4,
        price: 90
    },
    {
        id: 8,
        passengerName:"abdellah",
        tripId: 3,
        departure : "Safi",
        destination : "Casablanca",
        seatNumber: 2,
        price: 140
    },
    {
        id: 9,
        passengerName:"aya",
        tripId: 6,
        departure : "Marrakech",
        destination : "Casablanca",
        seatNumber: 1,
        price: 120
    },
    {
        id: 10,
        passengerName:"charaf",
        tripId: 2,
        departure : "Safi",
        destination : "Marrakech",
        seatNumber: 5,
        price: 90
    }
];
function    Afficher(){
    console.log("=== TRAJETS DISPONIBLES ===")
    for(let i = 0;i < trips.length ; i++){
        if(trips[i].availableSeats >= 1){   
            console.log(
                `#${trips[i].id} ${trips[i].departure} --> ${trips[i].destination}
Départ : ${trips[i].departureTime}
Arrivée : ${trips[i].arrivalTime}
Prix : ${trips[i].price} DH
Places disponibles : ${trips[i].availableSeats}\n`)
        }
    }
}
let ticket_id = 1
function    Acheter(){
    let found = false
    let nom = prompt('Nom du passager : ')
    let Identifiant = parseInt(prompt('Identifiant du trajet : '))
    for(let i = 0; i < trips.length; i++){
        if(Identifiant == trips[i].id ){
            found = true
            if(trips[i].availableSeats >= 1){
            let new_ticket = {
                id: ticket_id,
                passengerName:nom,
                tripId: Identifiant,
                seatNumber: 50 - trips[i].availableSeats + 1,
                price: trips[i].price
            }
            ticket_id++
            tickets[tickets.length] = new_ticket
            trips[i].availableSeats -= 1
            console.log("Ticket acheté avec succès.")
            console.log(
                `Ticket #${new_ticket.id}
Passager : ${new_ticket.passengerName}
Trajet : ${trips[i].departure} --> ${trips[i].destination}
Place : ${new_ticket.seatNumber}
Prix : ${new_ticket.price} DH`)
        }else{
            console.log('Train complet ')}
            break
        }
    }
    if(found == false)
        console.log('Trajet introuvable ')
}

function    Afficher_tickets(){
    console.log('=== TICKETS ===')
    if(tickets.length == 0)
        console.log("Aucun ticket enregistré.");
    for(let i = 0; i < tickets.length ; i++){
            console.log(
                `Ticket #${tickets[i].id}
    Passager : ${tickets[i].passengerName}
    Trajet : ${tickets[i].departure} --> ${tickets[i].destination}
    Place : ${tickets[i].seatNumber}
    Prix : ${tickets[i].price} DH\n`)
    }
}
function    Annuler(){
    let found = false
    let Identifiant = parseInt(prompt('Entrer Identifiant : '))
    let sure = prompt('es-tu sûr de vouloir supprimer ce ticket ? oui/no : ').toLowerCase()
    for(let i = 0;i < tickets.length; i++){
        if(sure == 'oui'){
            if(tickets[i].id == Identifiant){
                found = true
                for(let j = 0 ; j < trips.length ; j++){
                    if(trips[j].id == tickets[i].tripId){
                        trips[j].availableSeats += 1
                        break
                    }
                }
                tickets.splice(i,1)
                console.log("Ticket annulé avec succès ")
                break
        }}
        else
            return
    }
    if(found == false)
        console.log('Ticket introuvable ')
}
function    Rechercher(){
    let found = false
    let nom = prompt('Entrer le Nom du passger : ').toLocaleLowerCase()
    if(tickets.length == 0){
        console.log("Aucun ticket enregistré.");
        return;
    }
    for(let i = 0 ; i < tickets.length; i++){
        if(tickets[i].passengerName.toLocaleLowerCase() == nom)
        {
            found = true
            console.log(
                `Ticket #${tickets[i].id}
Passager : ${tickets[i].passengerName}
Trajet : ${tickets[i].departure} → ${tickets[i].destination}
Place : ${tickets[i].seatNumber}
Prix : ${tickets[i].price} DH\n`)
        }
    }
    if(found == false)
        console.log("Aucun ticket trouvé pour ce nom.");
}
function    Filtrer(){
    let ville = prompt("Entrer ville du depart : ").toLowerCase()
    let found = false
    for(let i = 0; i < trips.length ; i++){
        if(trips[i].departure.toLowerCase() == ville){
            console.log(`${trips[i].departure} → ${trips[i].destination} : ${trips[i].price} DH`)
            found = true
        }
    }
    if(found == false)
        console.log("Nous n'avons pas cette ville.")
}
function    Trier(){
    for(let i = 0; i< trips.length ; i++){
        for(let j = 0; j< trips.length - i - 1 ; j++){
            if(trips[j].price > trips[j + 1].price){
                let swap = trips[j]
                trips[j] = trips[j+1]
                trips[j+1] = swap
            }
        }
    }
    Afficher()
}
function    Statistique(){
    let sum_price = 0
    let plus_vendu_depart = ""
    let plus_vendu_destination = ""
    let max = 0
    for(let i = 0 ; i < tickets.length;i++){
        sum_price += tickets[i].price
    }
    for(let j = 0; j < trips.length ; j++){
        let count = 0
        for(let x = 0 ; x < tickets.length ; x++){
            if(trips[j].id == tickets[x].tripId)
                count++}
            if(count > max){
                max = count
                plus_vendu_depart = trips[j].departure
                plus_vendu_destination = trips[j].destination
            }
        }
        let choix = 0
        while(choix != 4){
            
        console.log(`=== STATISTIQUES === \n 1. Nombre total de tickets\n 2. Chiffre d'affaires total\n 3. Trajet le plus vendu\n 4. Retour`)
        choix = parseInt(prompt('Votre choix : '))
        switch(choix){
            case 1:
                console.log(`Nombre total de tickets : ${tickets.length}`);
                break;
            case 2:
                console.log(`Chiffre d'affaires total : ${sum_price} DH`);
                break;
            case 3:
                console.log(`Trajet le plus vendu : ${plus_vendu_depart} → ${plus_vendu_destination}\n ${max} tickets vendus`)
                break;
            case 4:
                return;
            default:
                console.log('choix invalid : ');
                break;
        }
        }
}
let id
while(id != 0){
    console.log("=================================\n        RAILWAY MANAGER\n=================================\n1. Afficher les trajets\n2. Acheter un ticket\n3. Afficher les tickets\n4. Annuler un ticket\n5. Rechercher un ticket\n6. Filtrer les trajets\n7. Trier les trajets\n8. Afficher les Statistiques\n0. Quitter")
    id = parseInt(prompt('Votre choix : '))
    switch(id){
        case 0:
            console.log("Au revoir ")
            break;
        case 1:
            Afficher()
            break;
        case 2:
            Acheter()
            break;
        case 3:
            Afficher_tickets()
            break;
        case 4:
            Annuler()
            break;
        case 5:
            Rechercher()
            break;
        case 6:
            Filtrer()
            break;
        case 7:
            Trier()
            break;
        case 8:
            Statistique()
            break;
        default:
            console.log("Choix invalide.");
            break;
    }
}