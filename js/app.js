const bank = owner => {
    balance = 0;
    return amount => {
        balance = balance + amount;
        return balance;
    }
}
const MofijBank = bank('mofiz');
// const ami = MofijBank(100);
console.log(MofijBank(100));