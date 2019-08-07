import { NetworkType, SimpleWallet, Password} from 'nem2-sdk';

/* start block 01 */
const password = new Password('password');

const wallet = SimpleWallet.create('wallet-name', password, NetworkType.MIJIN_TEST);

const account = wallet.open(password);
console.log('Your new account address is:', account.address.pretty(), 'and its private key', account.privateKey);

