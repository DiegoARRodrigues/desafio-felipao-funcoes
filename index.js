let winner = 23
let defeat = 3
let balance = victories()
let ranking
let numberOfWins

function victories() {
	return winner - defeat
}

if (balance <= 10) {
	ranking = "Ferro"
    numberOfWins = 11 - balance
} else if (balance >= 11 && balance <= 20) {
    ranking = "Bronze"
    numberOfWins = 21 - balance
} else if (balance >= 21 && balance <= 50) {
    ranking = "Prata"
    numberOfWins = 51 - balance
} else if (balance >= 51 && balance <= 80) {
    ranking = "Ouro"
    numberOfWins = 81 - balance
} else if (balance >= 81 && balance <= 90) {
    ranking = "Diamante"
    numberOfWins = 91 - balance
} else if (balance >= 91 && balance <= 100) {
    ranking = "Diamante"
    numberOfWins = 101 - balance
} else {
    ranking = "Imortal"
}

console.log(`O Herói tem de saldo de ${balance} está no nível de ${ranking}`)
if (numberOfWins <= 100) {
    console.log(`Faltam apenas ${numberOfWins} vitórias para você atingir o próximo nível de ranking`)
} else {
    console.log("Parabéns intrépido você é top ranking")
}