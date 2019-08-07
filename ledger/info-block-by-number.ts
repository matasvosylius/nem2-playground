import '../utils/env-config'
import {BlockHttp} from 'nem2-sdk';

const url = process.env.REST_SERVER as string;
const blockHttp = new BlockHttp(url);
const height = 1;

blockHttp
    .getBlockByHeight(height)
    .subscribe(block => console.log(block), err => console.error(err));
