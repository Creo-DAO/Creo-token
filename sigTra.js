//Delegation signature template
const data = {
  types: {
    EIP712Domain: [
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "address" },
    ],
    Delegation: [
      { name: "delegatee", type: "address" },
      { name: "nonce", type: "uint256" },
      { name: "expiry", type: "uint256" },
    ],
  },
  primaryType: "Delegation",
  domain: {
    name: "contract name here",
    version: "contract domain version here",
    chainId: "current chain id here ",
    verifyingContract: "contract address here ",
  },
  message: {
    delegatee: "delegatee addresss here",
    nonce: `signer nonce here`,
    expiry: "signature expiry here ",
    contents: "Can be any thing",
  },
};
const signer = window.ethereum.selectedAddress;
const sigData = JSON.stringify(data);
window.ethereum.sendAsync(
  {
    method: "eth_signTypedData_v4",
    params: [signer, sigData],
    from: signer,
  },
  async function (err, result) {
    if (err) {
      return console.error(err);
    }
    const signature = result.result.substring(2);
    const r = "0x" + signature.substring(0, 64);
    const s = "0x" + signature.substring(64, 128);
    const v = parseInt(signature.substring(128, 130), 16);
    console.log({ v, r, s });
    return { v, r, s };
  }
);

// Permit signature template
const data = {
  types: {
    EIP712Domain: [
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "address" },
    ],
    Permit: [
      { name: "owner", type: "address" },
      { name: "spender", type: "address" },
      { name: "value", type: "uint256" },
      { name: "nonce", type: "uint256" },
      { name: "deadline", type: "uint256" },
    ],
  },
  primaryType: "Permit",
  domain: {
    name: "contract name here",
    version: "contract domain version here",
    chainId: "current chain id here ",
    verifyingContract: "contract address here ",
  },
  message: {
    owner: "owner addresss here",
    spender: "spender addresss here",
    value: `approval value`,
    nonce: `signer nonce here`,
    deadline: "signature expiry here",
    contents: "Approve me funds",
  },
};
const signer = window.ethereum.selectedAddress;
const sigData = JSON.stringify(data);
window.ethereum.sendAsync(
  {
    method: "eth_signTypedData_v4",
    params: [signer, sigData],
    from: signer,
  },
  async function (err, result) {
    if (err) {
      return console.error(err);
    }
    const signature = result.result.substring(2);
    const r = "0x" + signature.substring(0, 64);
    const s = "0x" + signature.substring(64, 128);
    const v = parseInt(signature.substring(128, 130), 16);
    console.log({ v, r, s });
    return { v, r, s };
  }
);
