class Kafemat {
    constructor(kafe, mleko, voda, brojac) {
        this.kafe = kafe;
        this.mleko = mleko;
        this.voda = voda;
        this.brojac = brojac;
    }

    napraviKafe() {
        if(this.kafe >= 7 && this.mleko >= 20 && this.voda >= 100) {
            this.kafe -= 7;
            this.mleko -= 20;
            this.voda -= 100;
            this.brojac++;
            console.log('Kafeto e napraveno, nazdravje!')
            console.log(`Imate napraveno ${this.brojac} kafinja!`)
        } else {
            console.log(`Treba da imas: 7g kafe, 20g mleko i 100ml voda, a ti imas: ${this.kafe}g kafe, ${this.mleko}g mleko i ${this.voda}ml voda`)
        }
    }

}

const espreso = new Kafemat(21, 100, 1000, 0)
espreso.napraviKafe()
espreso.napraviKafe()
espreso.napraviKafe()
espreso.napraviKafe()
