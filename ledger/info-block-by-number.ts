import '../utils/env-config'
import {BlockHttp} from 'nem2-sdk';

const blockHttp = new BlockHttp(process.env.REST_SERVER + ':' + process.env.PORT);
const height = 1;

blockHttp
    .getBlockByHeight(height)
    .subscribe(block => console.log(block), err => console.error(err));
