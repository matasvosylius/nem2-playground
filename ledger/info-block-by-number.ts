import {BlockHttp} from 'nem2-sdk';

const blockHttp = new BlockHttp('http://nem1.5hub.org:3000');

const height = 1;

blockHttp
    .getBlockByHeight(height)
    .subscribe(block => console.log(block), err => console.error(err));
