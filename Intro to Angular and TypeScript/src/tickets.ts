//                                                       2.	Tickets

class Ticket {
    public destination: string;
    public price: string;
    public status: string;

    constructor(destination: string, price: string, status: string) {
        this.destination = destination,
            this.price = price,
            this.status = status
    }
}

// function sort(input: string[], criteria: string) {
//     let result: object[] = []

//     input.map(t => t.split('|')).sort().forEach(t => {
//         let ticket = new Ticket(t[0], t[1], t[2]);
//         result.push(ticket)
//     });

//     console.log(result);

// }

function sort(input: string[], criteria: string) {
    let array: object[] = [];

    if (criteria == 'destination') {
        input.map(t => t.split('|')).sort((a, b) => a[0][0].localeCompare(b[0][0])).forEach(t => {
            let ticket = new Ticket(t[0], t[1], t[2]);
            array.push(ticket);
        });
    }

    if (criteria == 'status') {
        input.map(t => t.split('|')).sort((a, b) => a[2][2].localeCompare(b[2][2])).forEach(t => {
            let ticket = new Ticket(t[0], t[1], t[2]);
            array.push(ticket);
        });
    }

    if (criteria == 'price') {
        input.map(t => t.split('|')).sort((a, b) => (a[1][1]).localeCompare(b[1][1])).forEach(t => {
            let ticket = new Ticket(t[0], t[1], t[2]);
            array.push(ticket);
        });
    }

    console.log(array);
}

sort(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'status');
sort(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'price');
sort(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'destination');
