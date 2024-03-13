import { Injectable } from '@nestjs/common';
import { Bank } from './bank-accounts/dto/bank';
//import { User } from './entities/users';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello ConVita Customer!';
  }

  getBanksList(): string {
    let privatBankObject = new Bank("JOINT STOCK COMPANY COMMERCIAL BANK PRIVATBANK", "JSC CB PRIVATBANK", "300001", "01001, Ukraine, Kyiv, str. Hospital, 12-G", "14360570", "143605704021", "100238786", "No. 22 dated 05.10.2011", "PRIVATE/UKRPACK", "PBANUA2X");

let senseBankObject = new Bank("JSC SENSE BANK", "JSC SENSE BANK",
  "300346", "Ukraine, 03150, Kyiv city, Velika Vasylkivska street, building 100",
  "23494714", "", "", "No. 61 dated 01.12.2022", "", "ALFAUAUK");

let monoBankObject = new Bank("monobank", "", "322001", "04114, Kyiv, str. Avtozavodska,54 / 19", "21133352", "", "", "", "", "UNJSUAUKXXX");
    
    let pumbBankObject = new Bank("JOINT STOCK COMPANY FIRST UKRAINIAN INTERNATIONAL BANK", "JSC PUMB",
  "334851", "04070, Ukraine, Kyiv, st. Andriivska, 4", "14282829", "", "", "", "", "FUIBUA2X");

let oschadBankObject = new Bank("State Savings Bank of Ukraine Joint Stock Company", "", "300465",
  "01001, Ukraine, Kyiv, str. Hospital, 12-G", "00032129", "", "", "", "", "COSBUAUK");

let citiBankObject = new Bank("Joint-Stock Company Citibank (Ukraine)", "", "300584",
  "03150, Kyiv, str. Dilova, 16-G", "21685485", "", "", "", "", "CITIUAUK");

    let bankList: Array<Bank> = [privatBankObject, senseBankObject, monoBankObject, pumbBankObject, oschadBankObject, citiBankObject];
    return JSON.stringify(bankList);
    // return bankList.map( (bank) =>{
    //  //return `${bank.name}  ${bank.mfo}  ${bank.addreess}`;
    //   return JSON.stringify(bank);
    // }).toString();
  }
  getUsersList(): string {
    // let user1111 = new User("1111", "login") 
    // let usersList: Array<User> = [user1111];
    // return JSON.stringify(usersList);
    return 'usersList';
  }
}

