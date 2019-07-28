import { takeEvery, select, put, call, fork } from "redux-saga/effects";
import * as t from "./actionTypes";
// Selectors
import { getWeb3Instance } from "services/providers/selectors";
import { getIpfsInstance } from "services/providers/selectors";
// Actions
import {
  updateAvatar,
  updateAvatarHash,
  updateUserAddress,
  updateUserKeystore,
  updateUsername
} from "services/user/actions";

// Service > user

const localStorageUsername = "sc-user-name";
const localStorageAddress = "sc-user-address";
const localStorageAvatar = "sc-user-avatar";

/**
 * - Generate a random ethereum keypair
 * - Encrypt with the password and store to localstorage
 * - Upload the avatar to IPFS
 */
function* createAccount({ username, avatar, password }) {
  try {
    const web3 = yield select(getWeb3Instance);
    // Generates one or more accounts in the wallet.
    // If wallets already exist they will not be overridden.
    const wallet = web3.eth.accounts.wallet.create(1);
    const { address } = wallet[0];
    // Encrypts all wallet accounts to an array of encrypted keystore v3 objects.
    const [keystore] = web3.eth.accounts.wallet.encrypt(password);
    // Stores the wallet encrypted and as string in local storage.
    web3.eth.accounts.wallet.save(password);

    // Update the store
    yield put(updateUsername(username));
    yield put(updateUserAddress(address));
    yield put(updateAvatar(avatar));
    yield put(updateUserKeystore(keystore));
    // Update localStorage
    localStorage.setItem(localStorageUsername, username);
    localStorage.setItem(localStorageAddress, address);
    localStorage.setItem(localStorageAvatar, avatar);
    console.log("Created account", { address, keystore });

    // Upload avatar to IPFS
    const ipfs = yield select(getIpfsInstance);
    const avatarHash = yield call(ipfs.add, avatar);

    // Update the store
    yield put(updateAvatarHash(avatarHash));

    console.log("Uploaded avatar", { avatarHash });
  } catch (e) {
    console.error(`Error on createAccount: ${e.stack}`);
  }
}

function* loadFromLocalStorage() {
  try {
    const username = localStorage.getItem(localStorageUsername);
    const address = localStorage.getItem(localStorageAddress);
    const avatar = localStorage.getItem(localStorageAvatar);
    // Update the store
    if (username) yield put(updateUsername(username));
    if (address) yield put(updateUserAddress(address));
    if (avatar) yield put(updateAvatar(avatar));
  } catch (e) {
    console.error(`Error on loadFromLocalStorage: ${e.stack}`);
  }
}

/******************************* Watchers *************************************/

export default function*() {
  // yield fork(setInitialWeb3Instance);
  yield takeEvery(t.CREATE_ACCOUNT, createAccount);
  yield fork(loadFromLocalStorage);
}
