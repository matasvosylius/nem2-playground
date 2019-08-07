import {ChainHttp} from 'nem2-sdk';

const url = process.env.REST_SERVER as string
const chainhttp = new ChainHttp(url);

chainhttp 
    .getBlockchainHeight()        
    .subscribe(height => console.log(height), err => console.error(err));
