export const airdrop = "0xeEd84e779162501a8C3624F47D2c27215D6D80e1";
export const airdrop_ABI = [{
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "AirdropAmount",
    "inputs": [{
        "type": "uint256[]",
        "name": "_amounts",
        "internalType": "uint256[]"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "emergencyWithdraw",
    "inputs": [{
        "type": "address",
        "name": "_token",
        "internalType": "contract IARC20"
    }, {
        "type": "uint256",
        "name": "_tokenAmount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "emergencyWithdrawARC",
    "inputs": [{
        "type": "uint256",
        "name": "Amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "multisendToken",
    "inputs": [{
        "type": "address",
        "name": "_token",
        "internalType": "contract IARC20"
    }, {
        "type": "address[]",
        "name": "_contributors",
        "internalType": "address[]"
    }, {
        "type": "uint256[]",
        "name": "_balances",
        "internalType": "uint256[]"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "multisendTokenSigle",
    "inputs": [{
        "type": "address",
        "name": "_token",
        "internalType": "contract IARC20"
    }, {
        "type": "address[]",
        "name": "_contributors",
        "internalType": "address[]"
    }, {
        "type": "uint256",
        "name": "_balances",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "multisendTokenwithApprove",
    "inputs": [{
        "type": "address",
        "name": "_token",
        "internalType": "contract IARC20"
    }, {
        "type": "address[]",
        "name": "_contributors",
        "internalType": "address[]"
    }, {
        "type": "uint256[]",
        "name": "_balances",
        "internalType": "uint256[]"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }],
    "name": "owner",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "renounceOwnership",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "payable",
    "outputs": [],
    "name": "sendMultiARC",
    "inputs": [{
        "type": "address[]",
        "name": "_contributors",
        "internalType": "address payable[]"
    }, {
        "type": "uint256[]",
        "name": "_balances",
        "internalType": "uint256[]"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "transferOwnership",
    "inputs": [{
        "type": "address",
        "name": "newOwner",
        "internalType": "address"
    }]
}, {
    "type": "event",
    "name": "Multisended",
    "inputs": [{
        "type": "uint256",
        "name": "total",
        "indexed": false
    }, {
        "type": "address",
        "name": "tokenAddress",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "OwnershipTransferred",
    "inputs": [{
        "type": "address",
        "name": "previousOwner",
        "indexed": true
    }, {
        "type": "address",
        "name": "newOwner",
        "indexed": true
    }],
    "anonymous": false
}]

export const token_adress = '0xD73c99e818aa0881C1Ac2641cEE6f570D8D79Eb4'
export const token_abi = [{
    "type": "constructor",
    "inputs": [{
        "type": "address",
        "name": "_marketingWallet",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "ExcludefromLimits",
    "inputs": [{
        "type": "address",
        "name": "_addr",
        "internalType": "address"
    }, {
        "type": "bool",
        "name": "_state",
        "internalType": "bool"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "_balances",
    "inputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "_isExcluded",
    "inputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "addpairaddress",
    "inputs": [{
        "type": "address",
        "name": "_pair",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "addtoblacklisted",
    "inputs": [{
        "type": "address",
        "name": "_addr",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "addtolocked",
    "inputs": [{
        "type": "address",
        "name": "_addr",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "allowance",
    "inputs": [{
        "type": "address",
        "name": "_owner",
        "internalType": "address"
    }, {
        "type": "address",
        "name": "spender",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "approve",
    "inputs": [{
        "type": "address",
        "name": "spender",
        "internalType": "address"
    }, {
        "type": "uint256",
        "name": "amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "automatedMarketMakerPairs",
    "inputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "balanceOf",
    "inputs": [{
        "type": "address",
        "name": "account",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "burn",
    "inputs": [{
        "type": "address",
        "name": "_addr",
        "internalType": "address"
    }, {
        "type": "uint256",
        "name": "_amt",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "buying",
    "inputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "buyliquidityFee",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "buymarketingFee",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "calculatebuyliquidityFee",
    "inputs": [{
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "calculatebuymarketingFee",
    "inputs": [{
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "calculatesellliquidityFee",
    "inputs": [{
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "calculatesellmarketingFee",
    "inputs": [{
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "calculatetransferliquidityFee",
    "inputs": [{
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "calculatetransfermarketingFee",
    "inputs": [{
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint8",
        "name": "",
        "internalType": "uint8"
    }],
    "name": "decimals",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "decreaseAllowance",
    "inputs": [{
        "type": "address",
        "name": "spender",
        "internalType": "address"
    }, {
        "type": "uint256",
        "name": "subtractedValue",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "getTokens",
    "inputs": [{
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "increaseAllowance",
    "inputs": [{
        "type": "address",
        "name": "spender",
        "internalType": "address"
    }, {
        "type": "uint256",
        "name": "addedValue",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "isBlacklisted",
    "inputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "islocked",
    "inputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "locktime",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }],
    "name": "marketingwallet",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "maxTrPerDay",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "maxTxAmount",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "maxbuyamount",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "maxsellamount",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "maxwalletamount",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "mint",
    "inputs": [{
        "type": "address",
        "name": "_addr",
        "internalType": "address"
    }, {
        "type": "uint256",
        "name": "_amt",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "string",
        "name": "",
        "internalType": "string"
    }],
    "name": "name",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "numTokensSellToAddToLiquidity",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }],
    "name": "owner",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "pauseContract",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "paused",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "removeFromblacklisted",
    "inputs": [{
        "type": "address",
        "name": "_addr",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "removefromlocked",
    "inputs": [{
        "type": "address",
        "name": "_addr",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "selling",
    "inputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "sellliquidityFee",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "sellmarketingFee",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setAutomatedMarketMakerPairs",
    "inputs": [{
        "type": "address",
        "name": "newPair",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setLiquidityFeePercent",
    "inputs": [{
        "type": "uint256",
        "name": "_transferliquidityFee",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "_buyliquidityFee",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "_sellliquidityFee",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setMarketingfeepercent",
    "inputs": [{
        "type": "uint256",
        "name": "_transfermarketingFee",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "_sellmarketingFee",
        "internalType": "uint256"
    }, {
        "type": "uint256",
        "name": "_buymarketingFee",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setTrading",
    "inputs": [{
        "type": "bool",
        "name": "_state",
        "internalType": "bool"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setTransferperdaylimti",
    "inputs": [{
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setbuylimit",
    "inputs": [{
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setmarketingwallet",
    "inputs": [{
        "type": "address",
        "name": "_newmarketingwallet",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setmaxTxAmount",
    "inputs": [{
        "type": "uint256",
        "name": "_maxTxAmount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setmaxsell",
    "inputs": [{
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setmaxwalletamount",
    "inputs": [{
        "type": "uint256",
        "name": "_maxwalletamount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setnumTokensSellToAddToLiquidity",
    "inputs": [{
        "type": "uint256",
        "name": "_numTokensSellToAddToLiquidity",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "setswapAndLiquifyEnabled",
    "inputs": [{
        "type": "bool",
        "name": "_swapAndLiquifyEnabled",
        "internalType": "bool"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "swapAndLiquifyEnabled",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "string",
        "name": "",
        "internalType": "string"
    }],
    "name": "symbol",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "totalSupply",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "tradingActive",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "transfer",
    "inputs": [{
        "type": "address",
        "name": "recipient",
        "internalType": "address"
    }, {
        "type": "uint256",
        "name": "amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [{
        "type": "bool",
        "name": "",
        "internalType": "bool"
    }],
    "name": "transferFrom",
    "inputs": [{
        "type": "address",
        "name": "sender",
        "internalType": "address"
    }, {
        "type": "address",
        "name": "recipient",
        "internalType": "address"
    }, {
        "type": "uint256",
        "name": "amount",
        "internalType": "uint256"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "transferliquidityFee",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "uint256",
        "name": "",
        "internalType": "uint256"
    }],
    "name": "transfermarketingFee",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "transferownership",
    "inputs": [{
        "type": "address",
        "name": "_newonwer",
        "internalType": "address"
    }]
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "address",
        "name": "",
        "internalType": "address"
    }],
    "name": "uniswapV2Pair",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "view",
    "outputs": [{
        "type": "address",
        "name": "",
        "internalType": "contract IUniswapV2Router02"
    }],
    "name": "uniswapV2Router",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "unpauseContract",
    "inputs": []
}, {
    "type": "function",
    "stateMutability": "nonpayable",
    "outputs": [],
    "name": "withDraw",
    "inputs": [{
        "type": "uint256",
        "name": "_amount",
        "internalType": "uint256"
    }]
}, {
    "type": "event",
    "name": "Approval",
    "inputs": [{
        "type": "address",
        "name": "owner",
        "indexed": true
    }, {
        "type": "address",
        "name": "spender",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "value",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "Paused",
    "inputs": [{
        "type": "address",
        "name": "account",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "Transfer",
    "inputs": [{
        "type": "address",
        "name": "from",
        "indexed": true
    }, {
        "type": "address",
        "name": "to",
        "indexed": true
    }, {
        "type": "uint256",
        "name": "value",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "event",
    "name": "Unpaused",
    "inputs": [{
        "type": "address",
        "name": "account",
        "indexed": false
    }],
    "anonymous": false
}, {
    "type": "receive"
}]