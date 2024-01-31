import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
    throw new Error("Provide a public key to check the balance of!");
}

const publicKey = new PublicKey(suppliedPublicKey);

const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`The balance of the wallet address ${publicKey} is ${balanceInSOL}!!!`);