import {ChainHttp} from 'nem2-sdk';

const chainhttp = new ChainHttp('http://nem1.5hub.org:3000');


chainhttp 
    .getBlockchainHeight()        
    .subscribe(height => console.log(height), err => console.error(err));
