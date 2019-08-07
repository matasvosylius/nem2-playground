import {AccountHttp, Address} from "nem2-sdk";
import '../utils/env-config'

const url = process.env.REST_SERVER as string;
const accountHttp = new AccountHttp(url);
const address = Address.createFromRawAddress('');

accountHttp
    .getAccountInfo(address)
    .subscribe(accountInfo => console.log(accountInfo), err => console.error(err));