const tableBody= document.getElementById("table-body");


let flights = [
    {
        time: "08:44",
        destination: "LEGANES",
        flight: "OX 203",
        gate: "A 01",
        remarks: "ON TIME"
    },
    {
        time: "11:33",
        destination: "MADRID",
        flight: "OS 20",
        gate: "A 21",
        remarks: "ON TIME"
    },
    {
        time: "07:36",
        destination: "CARRANQUE",
        flight: "XX 111",
        gate: "F 55",
        remarks: "DELAYED"
    },
    {
        time: "04:52",
        destination: "PARIS",
        flight: "FS 23",
        gate: "A 01",
        remarks: "ON TIME"
    },
    {
        time: "08:11",
        destination: "ROMA",
        flight: "OB 4",
        gate: "D 22",
        remarks: "DELAYED"
    }

]

const destinations = ["DAMASCO", "CARRANQUE", "LEGANES", "GETAFE", "EL VISO"]
const remarks = ["DELAYED", "ONTIME", "LANDED"]


function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement("tr")
        
        for(const flightDetail in flight) {
            const tableCell = document.createElement("td") 
            const word= Array.from(flight[flightDetail])


            for(const [index,letter] of word.entries()) {
                const letterElement= document.createElement("div");
                
                setTimeout(() => {

                    letterElement.classList.add('flip')
                    letterElement.textContent = letter;
                    tableCell.append(letterElement)
                }, 100 *index)

            }
            tableRow.append(tableCell); 
        }  
        tableBody.append(tableRow);
    }
   
}
    populateTable()

function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length));

}

function generateRandomNumber() {
    const numbers = "0123456789"
    if(maxNumber) {
        const newNumbers=numbers.slice(0, maxNumber);
        return maxNumber.charAt(Math.floor(Math.random() * maxNumber.length));
    }
return numbers.charAt(Math.floor(Math.random() * number.length));
}


function generateTime() {
    let displayHour = hour

    if(hour <24) {
        hour++
    }
    if (hour>= 24) {
        hour=1
        displayHour = hour
    }
    if(hour<10) {
        displayHour = "0" +hour
    }

}

function shuffleApp() {
    flights.shift()
    flights.push( {
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: generateRandomLetter() + generateRandomLetter() +" " + generateRandomNumber() + generateRandomNumber(),
        gate: generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
        remarks: remarks[Math.floor(Math.random() * destinations.length)], 
    })

}