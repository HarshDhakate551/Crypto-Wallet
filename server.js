import { ethers } from "https://cdn.jsdelivr.net/npm/ethers@5.7.1/dist/ethers.esm.min.js";

// the wallet won't be accessible by just one mnemonic
// to create every time you click either create element or make use of localstorage
// let WalletArray = [];
// let inc = 0;
// document
//   .getElementById("generateMnemonics")
//   .addEventListener("click", function () {

//     const wallet = ethers.Wallet.createRandom();
//     WalletArray.push(wallet);

//     // creating an div and the tag to show elementss
//     const div = document.createElement('div');
//     div.setAttribute('id',`Div${inc}`);
//     document.body.appendChild(div)

//     const h1 = document.createElement('h1');
//     h1.setAttribute('id',`h1${inc}`);
//     div.appendChild(h1)

//     const p1 = document.createElement('p')
//     p1.setAttribute('id',`p1${inc}`);
//     div.appendChild(p1)

//     const p2 = document.createElement('p')
//     p2.setAttribute('id',`p2${inc}`);
//     div.appendChild(p2)

//     const p3 = document.createElement('p')
//     p3.setAttribute('id',`p3${inc}`);
//     div.appendChild(p3)

//     const p4 = document.createElement('p')
//     p4.setAttribute('id',`p4${inc}`);
//     div.appendChild(p4)
//     // -------------------------------------

//     h1.textContent += `Wallet ${inc}`;

//     const mnemonic = wallet.mnemonic.phrase;
//     p1.textContent = "The Mnemonic is : "+ mnemonic;

//     const seed = ethers.utils.mnemonicToSeed(mnemonic);
//     p2.textContent = "The Seed is : "+ seed;

//     const PublicKey = wallet.publicKey;
//     p3.textContent = "The Public key is : "+ PublicKey;

//     const PrivateKey = wallet.privateKey;
//     p4.textContent = "The Private key is : "+ PrivateKey;
//     alert("Wallet Generated")
//     inc++;
//   })

// console.log(WalletArray)
// // Event listener for the button click
// let increment = 0;
// document
//   .getElementById("generateMnemonics")
//   .addEventListener("click", function () {
//     console.log("Click");
//     const wallet = ethers.Wallet.createRandom();
//     console.log(wallet.mnemonic.phrase);

//     const p = document.getElementById("mnemonicDisplay");
//     p.textContent = wallet.mnemonic.phrase;

//     const seed = ethers.utils.mnemonicToSeed(wallet.mnemonic.phrase);
//     console.log(seed);

//     const seedTag = document.getElementById("SeedDisplay");
//     seedTag.textContent = seed;

//     console.log(wallet);
//     const PublicTag = document.getElementById("PublicKeyTag");
//     const publicKey = wallet.publicKey;
//     PublicTag.textContent = publicKey;
//     console.log("Public Key is : ", publicKey);

//     const PrivateTag = document.getElementById("PrivateKeyTag");
//     const PrivateKey = wallet.privateKey;
//     PrivateTag.textContent = PrivateKey;
//     console.log("Public Key is : ", PrivateKey);
//     increment++;
//   });

// creating HDNode wala wallet the wallet will be accessible by one mnemonic
// const WALLET = ethers.Wallet.createRandom();
// console.log(WALLET)
// const seed = ethers.utils.mnemonicToSeed(WALLET.mnemonic.phrase);
// console.log(seed);
// const mnemonic = WALLET.mnemonic.phrase;
// console.log(mnemonic);
// const HDNode = ethers.utils.HDNode.fromSeed(seed);
// console.log(HDNode)
// const path0 = "m/44'/60'/0/0'"
// const wallet0 = HDNode.derivePath(path0);
// console.log(wallet0)
// const path1 = "m/44'/60'/0/1'"
// const wallet1 = HDNode.derivePath(path1);
// console.log(wallet1)

// Integrating Wallet with Page
// Essential for wallet
let WALLET,seed,HDNode;
// Essential for derivative and Count of wallet
let walletCount = 0,i;
let mnemonics = "";
let div ;


document.getElementById("GW").addEventListener("click", function () {
  div = document.createElement("Div");
  div.setAttribute("id", `div${walletCount}`);
  document.body.appendChild(div);
  const h1 = document.createElement('h1');
  h1.textContent = `Wallet ${walletCount}`
  div.appendChild(h1);
  walletCount++;
  i = 0;
});

document.getElementById("GM").addEventListener("click", function () {
  // Creating wallet
  WALLET = ethers.Wallet.createRandom();
  console.log(WALLET);
  // Creating Mnemonic
  mnemonics = WALLET.mnemonic.phrase
  const p = document.createElement('p');
  p.textContent = "The mnemonic is : "+ mnemonics;
  div.appendChild(p)
  // Creating Seed
  seed = ethers.utils.mnemonicToSeed(mnemonics)
});

document.getElementById("GD").addEventListener("click", function(){
  // creating derivates from the seed
  // Main HDNode from which derivaties Occurs
  HDNode = ethers.utils.HDNode.fromSeed(seed);
  // console.log(HDNode)
  const path = `m/44'/60'/${i}/0'`
  const wallet = HDNode.derivePath(path);
  console.log(wallet)

  let p = document.createElement('p');
  p.textContent = `The Public Key No. ${i} is : `+wallet.publicKey;
  div.appendChild(p);

  i++;
})