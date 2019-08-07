import {ChainHttp} from 'nem2-sdk';

const chainhttp = new ChainHttp(process.env.REST_SERVER + ':' + process.env.PORT);

chainhttp 
    .getBlockchainHeight()        
    .subscribe(height => console.log(height), err => console.error(err));
