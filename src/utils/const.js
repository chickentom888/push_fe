const ABI_TOKEN = [
    {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount0",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount1",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "name": "Burn",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount0",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount1",
                "type": "uint256"
            }
        ],
        "name": "Mint",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount0In",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount1In",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount0Out",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount1Out",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "name": "Swap",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint112",
                "name": "reserve0",
                "type": "uint112"
            },
            {
                "indexed": false,
                "internalType": "uint112",
                "name": "reserve1",
                "type": "uint112"
            }
        ],
        "name": "Sync",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "DOMAIN_SEPARATOR",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "MINIMUM_LIQUIDITY",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "PERMIT_TYPEHASH",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "name": "burn",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "amount0",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount1",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "factory",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getReserves",
        "outputs": [
            {
                "internalType": "uint112",
                "name": "_reserve0",
                "type": "uint112"
            },
            {
                "internalType": "uint112",
                "name": "_reserve1",
                "type": "uint112"
            },
            {
                "internalType": "uint32",
                "name": "_blockTimestampLast",
                "type": "uint32"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "_token0",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_token1",
                "type": "address"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "kLast",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "name": "mint",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "liquidity",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "nonces",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "v",
                "type": "uint8"
            },
            {
                "internalType": "bytes32",
                "name": "r",
                "type": "bytes32"
            },
            {
                "internalType": "bytes32",
                "name": "s",
                "type": "bytes32"
            }
        ],
        "name": "permit",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "price0CumulativeLast",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "price1CumulativeLast",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            }
        ],
        "name": "skim",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount0Out",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount1Out",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "swap",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "sync",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "token0",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "token1",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const ABI_PRESALE_1 = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_presaleGenerator",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "baseFeeAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenFeeAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "refererTokenFeeAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "baseLiquidity",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenLiquidity",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "remainingBaseTokenBalance",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "remainingSaleTokenBalance",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "zeroRoundTokenBurn",
                "type": "uint256"
            }
        ],
        "name": "AddLiquidity",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "baseTokenAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "saleTokenAmount",
                "type": "uint256"
            }
        ],
        "name": "BuyToken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "baseTokenAmount",
                "type": "uint256"
            }
        ],
        "name": "UserWithdrawBaseToken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "saleTokenAmount",
                "type": "uint256"
            }
        ],
        "name": "UserWithdrawSaleToken",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "BUYERS",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "baseDeposited",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenBought",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "PRESALE_LOCK_FORWARDER",
        "outputs": [
            {
                "internalType": "contract IPresaleLockForwarder",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "PRESALE_SETTING",
        "outputs": [
            {
                "internalType": "contract IPresaleSetting",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "WrapToken",
        "outputs": [
            {
                "internalType": "contract IWrapToken",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "addLiquidity",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "buyToken",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "_users",
                "type": "address[]"
            },
            {
                "internalType": "bool",
                "name": "_add",
                "type": "bool"
            }
        ],
        "name": "editWhitelist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "forceFailByAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "forceFailIfPairExists",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "getBuyerInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "baseDeposited",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenBought",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getContractVersion",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getFeeInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "baseFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "refererFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "baseFeeAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "tokenFeeAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "refererFeeAddress",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getGeneralInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "contractVersion",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "presaleGenerator",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getListBuyerLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getListBuyerLengthAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPresaleAddressInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "presaleOwner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "saleToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "baseToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "wrapTokenAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "dexLockerAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "dexFactoryAddress",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPresaleGenerator",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPresaleMainInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "tokenPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "limitPerBuyer",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "hardCap",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "softCap",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "liquidityPercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "listingPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "lockPeriod",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "presaleInMainToken",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPresaleRound",
        "outputs": [
            {
                "internalType": "int8",
                "name": "",
                "type": "int8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPresaleStatus",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getRoundInfo",
        "outputs": [
            {
                "internalType": "bool",
                "name": "activeZeroRound",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "activeFirstRound",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getStatusInfo",
        "outputs": [
            {
                "internalType": "bool",
                "name": "whitelistOnly",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "lpGenerationComplete",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "forceFailed",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "totalBaseCollected",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalTokenSold",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalTokenWithdrawn",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalBaseWithdrawn",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "firstRoundLength",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "numBuyers",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "successAt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "liquidityAt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "currentStatus",
                "type": "uint256"
            },
            {
                "internalType": "int8",
                "name": "currentRound",
                "type": "int8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getUserWhitelistStatus",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getWhitelistFlag",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getWhitelistedUserAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getWhitelistedUsersLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getWrapTokenAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getZeroRoundInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "percent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "finishBeforeFirstRound",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "finishAt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxBaseTokenAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxSlot",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "registeredSlot",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getZeroRoundUserAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getZeroRoundUserLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ownerWithdrawSaleToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "registerZeroRound",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "retrieveBalance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "retrieveToken",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "_baseToken",
                "type": "address"
            },
            {
                "internalType": "contract IERC20",
                "name": "_presaleToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_baseFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_tokenFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_refererFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "_baseFeeAddress",
                "type": "address"
            },
            {
                "internalType": "address payable",
                "name": "_tokenFeeAddress",
                "type": "address"
            },
            {
                "internalType": "address payable",
                "name": "_refererAddress",
                "type": "address"
            }
        ],
        "name": "setFeeInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "_presaleOwner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_tokenPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_limitPerBuyer",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_hardCap",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_softCap",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_liquidityPercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_listingPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_endTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_lockPeriod",
                "type": "uint256"
            }
        ],
        "name": "setMainInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_activeZeroRound",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "_activeFirstRound",
                "type": "bool"
            }
        ],
        "name": "setRoundInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_flag",
                "type": "bool"
            }
        ],
        "name": "setWhitelistFlag",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_limitPerBuyer",
                "type": "uint256"
            }
        ],
        "name": "updateLimitPerBuyer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_endTime",
                "type": "uint256"
            }
        ],
        "name": "updateTime",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "userWithdrawBaseToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "userWithdrawSaleToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const ABI_PRESALE_2 = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_presaleGenerator",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "baseFeeAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenFeeAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "baseLiquidity",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenLiquidity",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "remainingBaseTokenBalance",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "remainingSaleTokenBalance",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "zeroRoundTokenBurn",
                "type": "uint256"
            }
        ],
        "name": "AddLiquidity",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "baseTokenAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "saleTokenAmount",
                "type": "uint256"
            }
        ],
        "name": "BuyToken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "baseTokenAmount",
                "type": "uint256"
            }
        ],
        "name": "UserWithdrawBaseToken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "saleTokenAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "percent",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "numberClaimed",
                "type": "uint256"
            }
        ],
        "name": "UserWithdrawSaleToken",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "BUYERS",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "baseDeposited",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenBought",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenClaimed",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "numberClaimed",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "PRESALE_LOCK_FORWARDER",
        "outputs": [
            {
                "internalType": "contract IPresaleLockForwarder",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "PRESALE_SETTING",
        "outputs": [
            {
                "internalType": "contract IPresaleSetting",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "WrapToken",
        "outputs": [
            {
                "internalType": "contract IWrapToken",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "addLiquidity",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "buyToken",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "_users",
                "type": "address[]"
            },
            {
                "internalType": "bool",
                "name": "_add",
                "type": "bool"
            }
        ],
        "name": "editWhitelist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "forceFailByAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "forceFailIfPairExists",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "getBuyerInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "baseDeposited",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenBought",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenClaimed",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "numberClaimed",
                "type": "uint256"
            },
            {
                "internalType": "uint256[]",
                "name": "historyTimeClaimed",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "historyAmountClaimed",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getFeeInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "baseFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "baseFeeAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "tokenFeeAddress",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getGeneralInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "contractVersion",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "contractType",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "presaleGenerator",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getListBuyerLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getListBuyerLengthAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPresaleAddressInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "presaleOwner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "saleToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "baseToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "wrapTokenAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "dexLockerAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "dexFactoryAddress",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPresaleMainInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "tokenPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "limitPerBuyer",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "hardCap",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "softCap",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "liquidityPercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "listingPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "lockPeriod",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "presaleInMainToken",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPresaleRound",
        "outputs": [
            {
                "internalType": "int8",
                "name": "",
                "type": "int8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPresaleStatus",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getRoundInfo",
        "outputs": [
            {
                "internalType": "bool",
                "name": "activeZeroRound",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "activeFirstRound",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getStatusInfo",
        "outputs": [
            {
                "internalType": "bool",
                "name": "whitelistOnly",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "lpGenerationComplete",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "forceFailed",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "totalBaseCollected",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalTokenSold",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalTokenWithdrawn",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalBaseWithdrawn",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "firstRoundLength",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "numBuyers",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "successAt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "liquidityAt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "currentStatus",
                "type": "uint256"
            },
            {
                "internalType": "int8",
                "name": "currentRound",
                "type": "int8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getUserWhitelistStatus",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getVestingInfo",
        "outputs": [
            {
                "internalType": "bool",
                "name": "activeVesting",
                "type": "bool"
            },
            {
                "internalType": "uint256[]",
                "name": "vestingPeriod",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "vestingPercent",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getWhitelistFlag",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getWhitelistedUserAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getWhitelistedUsersLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getZeroRoundInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "percent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "finishBeforeFirstRound",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "finishAt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxBaseTokenAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxSlot",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "registeredSlot",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getZeroRoundUserAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getZeroRoundUserLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ownerWithdrawSaleToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "registerZeroRound",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "retrieveBalance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "retrieveToken",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "_baseToken",
                "type": "address"
            },
            {
                "internalType": "contract IERC20",
                "name": "_presaleToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_baseFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_tokenFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "_baseFeeAddress",
                "type": "address"
            },
            {
                "internalType": "address payable",
                "name": "_tokenFeeAddress",
                "type": "address"
            }
        ],
        "name": "setFeeInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "_presaleOwner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_tokenPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_limitPerBuyer",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_hardCap",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_softCap",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_liquidityPercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_listingPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_endTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_lockPeriod",
                "type": "uint256"
            }
        ],
        "name": "setMainInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_activeZeroRound",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "_activeFirstRound",
                "type": "bool"
            }
        ],
        "name": "setRoundInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_activeVesting",
                "type": "bool"
            },
            {
                "internalType": "uint256[]",
                "name": "_vestingPeriod",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "_vestingPercent",
                "type": "uint256[]"
            }
        ],
        "name": "setVestingInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_flag",
                "type": "bool"
            }
        ],
        "name": "setWhitelistFlag",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_limitPerBuyer",
                "type": "uint256"
            }
        ],
        "name": "updateLimitPerBuyer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_endTime",
                "type": "uint256"
            }
        ],
        "name": "updateTime",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "userWithdrawBaseToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "userWithdrawSaleToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const ABI_PRESALE_3 = [
    {
        "inputs": [{"internalType": "address", "name": "_presaleGenerator", "type": "address"}],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "internalType": "uint256",
            "name": "baseFeeAmount",
            "type": "uint256"
        }, {"indexed": false, "internalType": "uint256", "name": "tokenFeeAmount", "type": "uint256"}, {
            "indexed": false,
            "internalType": "uint256",
            "name": "baseLiquidity",
            "type": "uint256"
        }, {"indexed": false, "internalType": "uint256", "name": "tokenLiquidity", "type": "uint256"}, {
            "indexed": false,
            "internalType": "uint256",
            "name": "remainingBaseTokenBalance",
            "type": "uint256"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "remainingSaleTokenBalance",
            "type": "uint256"
        }, {"indexed": false, "internalType": "uint256", "name": "zeroRoundTokenBurn", "type": "uint256"}],
        "name": "AddLiquidity",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": false, "internalType": "address", "name": "user", "type": "address"}, {
            "indexed": false,
            "internalType": "uint256",
            "name": "baseTokenAmount",
            "type": "uint256"
        }, {"indexed": false, "internalType": "uint256", "name": "saleTokenAmount", "type": "uint256"}],
        "name": "BuyToken",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": false, "internalType": "address", "name": "user", "type": "address"}, {
            "indexed": false,
            "internalType": "uint256",
            "name": "baseTokenAmount",
            "type": "uint256"
        }],
        "name": "UserWithdrawBaseToken",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": false, "internalType": "address", "name": "user", "type": "address"}, {
            "indexed": false,
            "internalType": "uint256",
            "name": "saleTokenAmount",
            "type": "uint256"
        }, {"indexed": false, "internalType": "uint256", "name": "percent", "type": "uint256"}, {
            "indexed": false,
            "internalType": "uint256",
            "name": "numberClaimed",
            "type": "uint256"
        }],
        "name": "UserWithdrawSaleToken",
        "type": "event"
    }, {
        "inputs": [{"internalType": "address", "name": "", "type": "address"}],
        "name": "BUYERS",
        "outputs": [{"internalType": "uint256", "name": "baseDeposited", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "tokenBought",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "tokenClaimed", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "numberClaimed",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "PRESALE_LOCK_FORWARDER",
        "outputs": [{"internalType": "contract IPresaleLockForwarder", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "PRESALE_SETTING",
        "outputs": [{"internalType": "contract IPresaleSetting", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "WrapToken",
        "outputs": [{"internalType": "contract IWrapToken", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "addLiquidity",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_amount", "type": "uint256"}],
        "name": "buyToken",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address[]", "name": "_users", "type": "address[]"}, {
            "internalType": "bool",
            "name": "_add",
            "type": "bool"
        }], "name": "editWhitelist", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [],
        "name": "forceFailByAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "forceFailByOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "forceFailIfPairExists",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "_address", "type": "address"}],
        "name": "getBuyerInfo",
        "outputs": [{"internalType": "uint256", "name": "baseDeposited", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "tokenBought",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "tokenClaimed", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "numberClaimed",
            "type": "uint256"
        }, {"internalType": "uint256[]", "name": "historyTimeClaimed", "type": "uint256[]"}, {
            "internalType": "uint256[]",
            "name": "historyAmountClaimed",
            "type": "uint256[]"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "getFeeInfo",
        "outputs": [{"internalType": "uint256", "name": "baseFeePercent", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "tokenFeePercent",
            "type": "uint256"
        }, {"internalType": "address", "name": "baseFeeAddress", "type": "address"}, {
            "internalType": "address",
            "name": "tokenFeeAddress",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "getGeneralInfo",
        "outputs": [{"internalType": "uint256", "name": "contractVersion", "type": "uint256"}, {
            "internalType": "string",
            "name": "contractType",
            "type": "string"
        }, {"internalType": "address", "name": "presaleGenerator", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "getListBuyerLength",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_index", "type": "uint256"}],
        "name": "getListBuyerLengthAtIndex",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "getPresaleAddressInfo",
        "outputs": [{"internalType": "address", "name": "presaleOwner", "type": "address"}, {
            "internalType": "address",
            "name": "fundAddress",
            "type": "address"
        }, {"internalType": "address", "name": "saleToken", "type": "address"}, {
            "internalType": "address",
            "name": "baseToken",
            "type": "address"
        }, {"internalType": "address", "name": "wrapTokenAddress", "type": "address"}, {
            "internalType": "address",
            "name": "dexLockerAddress",
            "type": "address"
        }, {"internalType": "address", "name": "dexFactoryAddress", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "getPresaleMainInfo",
        "outputs": [{"internalType": "uint256", "name": "tokenPrice", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "limitPerBuyer",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "amount", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "hardCap",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "softCap", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "liquidityPercent",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "listingPrice", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "startTime",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "endTime", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "lockPeriod",
            "type": "uint256"
        }, {"internalType": "bool", "name": "presaleInMainToken", "type": "bool"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "getPresaleRound",
        "outputs": [{"internalType": "int8", "name": "", "type": "int8"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "getPresaleStatus",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "getRoundInfo",
        "outputs": [{"internalType": "bool", "name": "activeZeroRound", "type": "bool"}, {
            "internalType": "bool",
            "name": "activeFirstRound",
            "type": "bool"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "getStatusInfo",
        "outputs": [{"internalType": "bool", "name": "whitelistOnly", "type": "bool"}, {
            "internalType": "bool",
            "name": "lpGenerationComplete",
            "type": "bool"
        }, {"internalType": "bool", "name": "forceFailed", "type": "bool"}, {
            "internalType": "uint256",
            "name": "totalBaseCollected",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "totalTokenSold", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "totalTokenWithdrawn",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "totalBaseWithdrawn", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "firstRoundLength",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "numBuyers", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "successAt",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "liquidityAt", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "currentStatus",
            "type": "uint256"
        }, {"internalType": "int8", "name": "currentRound", "type": "int8"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "_user", "type": "address"}],
        "name": "getUserWhitelistStatus",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "getVestingInfo",
        "outputs": [{"internalType": "bool", "name": "activeVesting", "type": "bool"}, {
            "internalType": "uint256[]",
            "name": "vestingPeriod",
            "type": "uint256[]"
        }, {"internalType": "uint256[]", "name": "vestingPercent", "type": "uint256[]"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "getWhitelistFlag",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_index", "type": "uint256"}],
        "name": "getWhitelistedUserAtIndex",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "getWhitelistedUsersLength",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "getZeroRoundInfo",
        "outputs": [{"internalType": "address", "name": "tokenAddress", "type": "address"}, {
            "internalType": "uint256",
            "name": "tokenAmount",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "percent", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "finishBeforeFirstRound",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "finishAt", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "maxBaseTokenAmount",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "maxSlot", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "registeredSlot",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_index", "type": "uint256"}],
        "name": "getZeroRoundUserAtIndex",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "getZeroRoundUserLength",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "ownerWithdrawSaleToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "registerZeroRound",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "amount", "type": "uint256"}, {
            "internalType": "address",
            "name": "userAddress",
            "type": "address"
        }], "name": "retrieveBalance", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "tokenAddress", "type": "address"}, {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }, {"internalType": "address", "name": "userAddress", "type": "address"}],
        "name": "retrieveToken",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "contract IERC20",
            "name": "_baseToken",
            "type": "address"
        }, {"internalType": "contract IERC20", "name": "_presaleToken", "type": "address"}, {
            "internalType": "uint256",
            "name": "_baseFeePercent",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "_tokenFeePercent", "type": "uint256"}, {
            "internalType": "address payable",
            "name": "_baseFeeAddress",
            "type": "address"
        }, {"internalType": "address payable", "name": "_tokenFeeAddress", "type": "address"}],
        "name": "setFeeInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address payable",
            "name": "_presaleOwner",
            "type": "address"
        }, {"internalType": "uint256", "name": "_amount", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "_tokenPrice",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "_limitPerBuyer", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "_hardCap",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "_softCap", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "_liquidityPercent",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "_listingPrice", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "_startTime",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "_endTime", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "_lockPeriod",
            "type": "uint256"
        }], "name": "setMainInfo", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{"internalType": "bool", "name": "_activeZeroRound", "type": "bool"}, {
            "internalType": "bool",
            "name": "_activeFirstRound",
            "type": "bool"
        }], "name": "setRoundInfo", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{"internalType": "bool", "name": "_activeVesting", "type": "bool"}, {
            "internalType": "uint256[]",
            "name": "_vestingPeriod",
            "type": "uint256[]"
        }, {"internalType": "uint256[]", "name": "_vestingPercent", "type": "uint256[]"}],
        "name": "setVestingInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "bool", "name": "_flag", "type": "bool"}],
        "name": "setWhitelistFlag",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "fundAddress", "type": "address"}],
        "name": "updateFundAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_limitPerBuyer", "type": "uint256"}],
        "name": "updateLimitPerBuyer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_startTime", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "_endTime",
            "type": "uint256"
        }], "name": "updateTime", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256[]",
            "name": "_vestingPeriod",
            "type": "uint256[]"
        }, {"internalType": "uint256[]", "name": "_vestingPercent", "type": "uint256[]"}],
        "name": "updateVestingInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "userWithdrawBaseToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "userWithdrawSaleToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }];
const ABI_SALE_1 = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_saleGenerator",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "baseFeeAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenFeeAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "remainingBaseTokenBalance",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "remainingSaleTokenBalance",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "zeroRoundTokenBurn",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "refundAmount",
                "type": "uint256"
            }
        ],
        "name": "ActiveClaim",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "baseTokenAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "saleTokenAmount",
                "type": "uint256"
            }
        ],
        "name": "BuyToken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "baseTokenAmount",
                "type": "uint256"
            }
        ],
        "name": "UserWithdrawBaseToken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "saleTokenAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "percent",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "numberClaimed",
                "type": "uint256"
            }
        ],
        "name": "UserWithdrawSaleToken",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "BUYERS",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "baseDeposited",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenBought",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenClaimed",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "numberClaimed",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "SALE_SETTING",
        "outputs": [
            {
                "internalType": "contract ISaleSetting",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "WrapToken",
        "outputs": [
            {
                "internalType": "contract IWrapToken",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "activeClaim",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "buyToken",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "_users",
                "type": "address[]"
            },
            {
                "internalType": "bool",
                "name": "_add",
                "type": "bool"
            }
        ],
        "name": "editWhitelist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "forceFailByAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "getBuyerInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "baseDeposited",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenBought",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenClaimed",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "numberClaimed",
                "type": "uint256"
            },
            {
                "internalType": "uint256[]",
                "name": "historyTimeClaimed",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "historyAmountClaimed",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getFeeInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "baseFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "baseFeeAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "tokenFeeAddress",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getGeneralInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "contractVersion",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "contractType",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "saleGenerator",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getListBuyerLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getListBuyerLengthAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getRoundInfo",
        "outputs": [
            {
                "internalType": "bool",
                "name": "activeZeroRound",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "activeFirstRound",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSaleAddressInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "saleOwner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "saleToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "baseToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "wrapTokenAddress",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSaleMainInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "tokenPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "limitPerBuyer",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "hardCap",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "softCap",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "saleInMainToken",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSaleRound",
        "outputs": [
            {
                "internalType": "int8",
                "name": "",
                "type": "int8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSaleStatus",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getStatusInfo",
        "outputs": [
            {
                "internalType": "bool",
                "name": "whitelistOnly",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "isActiveClaim",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "forceFailed",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "totalBaseCollected",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalTokenSold",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalTokenWithdrawn",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalBaseWithdrawn",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "firstRoundLength",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "numBuyers",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "successAt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "activeClaimAt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "currentStatus",
                "type": "uint256"
            },
            {
                "internalType": "int8",
                "name": "currentRound",
                "type": "int8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getUserWhitelistStatus",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getVestingInfo",
        "outputs": [
            {
                "internalType": "bool",
                "name": "activeVesting",
                "type": "bool"
            },
            {
                "internalType": "uint256[]",
                "name": "vestingPeriod",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "vestingPercent",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getWhitelistFlag",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getWhitelistedUserAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getWhitelistedUsersLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getZeroRoundInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "percent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "finishBeforeFirstRound",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "finishAt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxBaseTokenAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxSlot",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "registeredSlot",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getZeroRoundUserAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getZeroRoundUserLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ownerWithdrawSaleToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "registerZeroRound",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "retrieveBalance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "retrieveToken",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "_baseToken",
                "type": "address"
            },
            {
                "internalType": "contract IERC20",
                "name": "_saleToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_baseFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_tokenFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "_baseFeeAddress",
                "type": "address"
            },
            {
                "internalType": "address payable",
                "name": "_tokenFeeAddress",
                "type": "address"
            }
        ],
        "name": "setFeeInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "_saleOwner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_tokenPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_limitPerBuyer",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_hardCap",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_softCap",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_endTime",
                "type": "uint256"
            }
        ],
        "name": "setMainInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_activeZeroRound",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "_activeFirstRound",
                "type": "bool"
            }
        ],
        "name": "setRoundInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_activeVesting",
                "type": "bool"
            },
            {
                "internalType": "uint256[]",
                "name": "_vestingPeriod",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "_vestingPercent",
                "type": "uint256[]"
            }
        ],
        "name": "setVestingInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_flag",
                "type": "bool"
            }
        ],
        "name": "setWhitelistFlag",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_limitPerBuyer",
                "type": "uint256"
            }
        ],
        "name": "updateLimitPerBuyer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_endTime",
                "type": "uint256"
            }
        ],
        "name": "updateTime",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "userWithdrawBaseToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "userWithdrawSaleToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const ABI_SALE_2 = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_saleGenerator",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "baseFeeAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenFeeAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "remainingBaseTokenBalance",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "remainingSaleTokenBalance",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "zeroRoundTokenBurn",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "refundAmount",
                "type": "uint256"
            }
        ],
        "name": "ActiveClaim",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "baseTokenAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "saleTokenAmount",
                "type": "uint256"
            }
        ],
        "name": "BuyToken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "baseTokenAmount",
                "type": "uint256"
            }
        ],
        "name": "UserWithdrawBaseToken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "saleTokenAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "percent",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "numberClaimed",
                "type": "uint256"
            }
        ],
        "name": "UserWithdrawSaleToken",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "BUYERS",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "baseDeposited",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenBought",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenClaimed",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "numberClaimed",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "SALE_SETTING",
        "outputs": [
            {
                "internalType": "contract ISaleSetting",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "WrapToken",
        "outputs": [
            {
                "internalType": "contract IWrapToken",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "activeClaim",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "buyToken",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "_users",
                "type": "address[]"
            },
            {
                "internalType": "bool",
                "name": "_add",
                "type": "bool"
            }
        ],
        "name": "editWhitelist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "forceFailByAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "forceFailByOwner",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "getBuyerInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "baseDeposited",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenBought",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenClaimed",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "numberClaimed",
                "type": "uint256"
            },
            {
                "internalType": "uint256[]",
                "name": "historyTimeClaimed",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "historyAmountClaimed",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getFeeInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "baseFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "baseFeeAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "tokenFeeAddress",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getGeneralInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "contractVersion",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "contractType",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "saleGenerator",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getListBuyerLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getListBuyerLengthAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getRoundInfo",
        "outputs": [
            {
                "internalType": "bool",
                "name": "activeZeroRound",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "activeFirstRound",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSaleAddressInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "saleOwner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "fundAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "saleToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "baseToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "wrapTokenAddress",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSaleMainInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "tokenPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "limitPerBuyer",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "hardCap",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "softCap",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "saleInMainToken",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSaleRound",
        "outputs": [
            {
                "internalType": "int8",
                "name": "",
                "type": "int8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSaleStatus",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getStatusInfo",
        "outputs": [
            {
                "internalType": "bool",
                "name": "whitelistOnly",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "isActiveClaim",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "forceFailed",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "totalBaseCollected",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalTokenSold",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalTokenWithdrawn",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalBaseWithdrawn",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "firstRoundLength",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "numBuyers",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "successAt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "activeClaimAt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "currentStatus",
                "type": "uint256"
            },
            {
                "internalType": "int8",
                "name": "currentRound",
                "type": "int8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getUserWhitelistStatus",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getVestingInfo",
        "outputs": [
            {
                "internalType": "bool",
                "name": "activeVesting",
                "type": "bool"
            },
            {
                "internalType": "uint256[]",
                "name": "vestingPeriod",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "vestingPercent",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getWhitelistFlag",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getWhitelistedUserAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getWhitelistedUsersLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getZeroRoundInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "percent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "finishBeforeFirstRound",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "finishAt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxBaseTokenAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxSlot",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "registeredSlot",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getZeroRoundUserAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getZeroRoundUserLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ownerWithdrawSaleToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "registerZeroRound",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "retrieveBalance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            }
        ],
        "name": "retrieveToken",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "_baseToken",
                "type": "address"
            },
            {
                "internalType": "contract IERC20",
                "name": "_saleToken",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_baseFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_tokenFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "_baseFeeAddress",
                "type": "address"
            },
            {
                "internalType": "address payable",
                "name": "_tokenFeeAddress",
                "type": "address"
            }
        ],
        "name": "setFeeInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "_saleOwner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_tokenPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_limitPerBuyer",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_hardCap",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_softCap",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_endTime",
                "type": "uint256"
            }
        ],
        "name": "setMainInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_activeZeroRound",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "_activeFirstRound",
                "type": "bool"
            }
        ],
        "name": "setRoundInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_activeVesting",
                "type": "bool"
            },
            {
                "internalType": "uint256[]",
                "name": "_vestingPeriod",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "_vestingPercent",
                "type": "uint256[]"
            }
        ],
        "name": "setVestingInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_flag",
                "type": "bool"
            }
        ],
        "name": "setWhitelistFlag",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "fundAddress",
                "type": "address"
            }
        ],
        "name": "updateFundAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_limitPerBuyer",
                "type": "uint256"
            }
        ],
        "name": "updateLimitPerBuyer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_endTime",
                "type": "uint256"
            }
        ],
        "name": "updateTime",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256[]",
                "name": "_vestingPeriod",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "_vestingPercent",
                "type": "uint256[]"
            }
        ],
        "name": "updateVestingInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "userWithdrawBaseToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "userWithdrawSaleToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const ABI_POOL_1 = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_poolGenerator",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "zeroRoundTokenBurn",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "notSoldToken",
                "type": "uint256"
            }
        ],
        "name": "ActiveClaim",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "baseTokenAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "poolTokenAmount",
                "type": "uint256"
            }
        ],
        "name": "BuyToken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenAmount",
                "type": "uint256"
            }
        ],
        "name": "UserWithdrawAuctionToken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "baseTokenAmount",
                "type": "uint256"
            }
        ],
        "name": "UserWithdrawBaseToken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "poolTokenAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "percent",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "numberClaimed",
                "type": "uint256"
            }
        ],
        "name": "UserWithdrawPoolToken",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "BUYERS",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "baseDeposited",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenBought",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenClaimed",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "numberClaimed",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "POOL_SETTING",
        "outputs": [
            {
                "internalType": "contract IPoolSetting",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "WrapToken",
        "outputs": [
            {
                "internalType": "contract IWrapToken",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "activeClaim",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "buyToken",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "_users",
                "type": "address[]"
            },
            {
                "internalType": "bool",
                "name": "_add",
                "type": "bool"
            }
        ],
        "name": "editWhitelist",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "forceFailByAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAuctionAmountToBurn",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "burnAmount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAuctionRoundInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "registeredSlot",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalTokenAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "burnedTokenAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "refundTokenAmount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getAuctionUserAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "getAuctionUserInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "auctionAmount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAuctionUserLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            }
        ],
        "name": "getBuyerInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "baseDeposited",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenBought",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenClaimed",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "numberClaimed",
                "type": "uint256"
            },
            {
                "internalType": "uint256[]",
                "name": "historyTimeClaimed",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "historyAmountClaimed",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getGeneralInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "contractVersion",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "contractType",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "poolGenerator",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getListBuyerLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getListBuyerLengthAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPoolAddressInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "poolOwner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "poolToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "baseToken",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "wrapTokenAddress",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPoolMainInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "tokenPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "limitPerBuyer",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "hardCap",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "softCap",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "endTime",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "poolInMainToken",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPoolRound",
        "outputs": [
            {
                "internalType": "int8",
                "name": "",
                "type": "int8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPoolStatus",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getRoundInfo",
        "outputs": [
            {
                "internalType": "bool",
                "name": "activeZeroRound",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "activeFirstRound",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "activeAuctionRound",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getStatusInfo",
        "outputs": [
            {
                "internalType": "bool",
                "name": "whitelistOnly",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "isActiveClaim",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "forceFailed",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "totalBaseCollected",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalTokenSold",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalTokenWithdrawn",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalBaseWithdrawn",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "firstRoundLength",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "numBuyers",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "successAt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "activeClaimAt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "currentStatus",
                "type": "uint256"
            },
            {
                "internalType": "int8",
                "name": "currentRound",
                "type": "int8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "getUserWhitelistStatus",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getVestingInfo",
        "outputs": [
            {
                "internalType": "bool",
                "name": "activeVesting",
                "type": "bool"
            },
            {
                "internalType": "uint256[]",
                "name": "vestingPeriod",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "vestingPercent",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getWhitelistFlag",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getWhitelistedUserAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getWhitelistedUsersLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getZeroRoundInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "percent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "finishBeforeFirstRound",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "finishAt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxBaseTokenAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxSlot",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "registeredSlot",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getZeroRoundUserAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getZeroRoundUserLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ownerWithdrawBaseToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ownerWithdrawPoolToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "registerAuctionRound",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "registerZeroRound",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "retrieveBalance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "retrieveToken",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_endTime",
                "type": "uint256"
            }
        ],
        "name": "setAuctionRoundInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "_poolOwner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_tokenPrice",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_limitPerBuyer",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_hardCap",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_softCap",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_endTime",
                "type": "uint256"
            }
        ],
        "name": "setMainInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_activeZeroRound",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "_activeFirstRound",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "_activeAuctionRound",
                "type": "bool"
            }
        ],
        "name": "setRoundInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "_baseToken",
                "type": "address"
            },
            {
                "internalType": "contract IERC20",
                "name": "_poolToken",
                "type": "address"
            }
        ],
        "name": "setTokenInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_activeVesting",
                "type": "bool"
            },
            {
                "internalType": "uint256[]",
                "name": "_vestingPeriod",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "_vestingPercent",
                "type": "uint256[]"
            }
        ],
        "name": "setVestingInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_flag",
                "type": "bool"
            }
        ],
        "name": "setWhitelistFlag",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_limitPerBuyer",
                "type": "uint256"
            }
        ],
        "name": "updateLimitPerBuyer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_startTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_endTime",
                "type": "uint256"
            }
        ],
        "name": "updateTime",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256[]",
                "name": "_vestingPeriod",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "_vestingPercent",
                "type": "uint256[]"
            }
        ],
        "name": "updateVestingInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "userWithdrawAuctionToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "userWithdrawBaseToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "userWithdrawPoolToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const ABI_POOL_GENERATOR = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "poolOwner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "poolAddress",
                "type": "address"
            }
        ],
        "name": "CreatePool",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "POOL_FACTORY",
        "outputs": [
            {
                "internalType": "contract IPoolFactory",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "POOL_SETTING",
        "outputs": [
            {
                "internalType": "contract IPoolSetting",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "_poolOwner",
                "type": "address"
            },
            {
                "internalType": "contract IERC20",
                "name": "_poolToken",
                "type": "address"
            },
            {
                "internalType": "contract IERC20",
                "name": "_baseToken",
                "type": "address"
            },
            {
                "internalType": "bool[4]",
                "name": "_activeInfo",
                "type": "bool[4]"
            },
            {
                "internalType": "uint256[8]",
                "name": "unitParams",
                "type": "uint256[8]"
            },
            {
                "internalType": "uint256[]",
                "name": "_vestingPeriod",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "_vestingPercent",
                "type": "uint256[]"
            }
        ],
        "name": "createPool",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const ABI_SALE_GENERATOR = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "saleOwner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "saleAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "creationFee",
                "type": "uint256"
            }
        ],
        "name": "CreateSale",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "SALE_FACTORY",
        "outputs": [
            {
                "internalType": "contract ISaleFactory",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "SALE_SETTING",
        "outputs": [
            {
                "internalType": "contract ISaleSetting",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "_saleOwner",
                "type": "address"
            },
            {
                "internalType": "contract IERC20",
                "name": "_saleToken",
                "type": "address"
            },
            {
                "internalType": "contract IERC20",
                "name": "_baseToken",
                "type": "address"
            },
            {
                "internalType": "bool[3]",
                "name": "_activeInfo",
                "type": "bool[3]"
            },
            {
                "internalType": "uint256[7]",
                "name": "unitParams",
                "type": "uint256[7]"
            },
            {
                "internalType": "uint256[]",
                "name": "_vestingPeriod",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "_vestingPercent",
                "type": "uint256[]"
            }
        ],
        "name": "createSale",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const ABI_PRESALE_GENERATOR = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "presaleOwner",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "presaleAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "creationFee",
                "type": "uint256"
            }
        ],
        "name": "CreatePresale",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "PRESALE_FACTORY",
        "outputs": [
            {
                "internalType": "contract IPresaleFactory",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "PRESALE_SETTING",
        "outputs": [
            {
                "internalType": "contract IPresaleSetting",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "_presaleOwner",
                "type": "address"
            },
            {
                "internalType": "contract IERC20",
                "name": "_presaleToken",
                "type": "address"
            },
            {
                "internalType": "contract IERC20",
                "name": "_baseToken",
                "type": "address"
            },
            {
                "internalType": "bool[3]",
                "name": "_activeInfo",
                "type": "bool[3]"
            },
            {
                "internalType": "uint256[10]",
                "name": "unitParams",
                "type": "uint256[10]"
            },
            {
                "internalType": "uint256[]",
                "name": "_vestingPeriod",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "_vestingPercent",
                "type": "uint256[]"
            }
        ],
        "name": "createPresale",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const ABI_PRESALE_SETTING = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "SETTING",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "BASE_FEE_PERCENT",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "TOKEN_FEE_PERCENT",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "BASE_FEE_ADDRESS",
                "type": "address"
            },
            {
                "internalType": "address payable",
                "name": "TOKEN_FEE_ADDRESS",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "CREATION_FEE",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "FIRST_ROUND_LENGTH",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "MAX_PRESALE_LENGTH",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "MIN_LIQUIDITY_PERCENT",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "ADMIN_ADDRESS",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "MIN_LOCK_PERIOD",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "MAX_SUCCESS_TO_LIQUIDITY",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "WRAP_TOKEN_ADDRESS",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "DEX_LOCKER_ADDRESS",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "WHITELIST_TOKEN_BALANCE",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "ZERO_ROUND",
        "outputs": [
            {
                "internalType": "address",
                "name": "TOKEN_ADDRESS",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "TOKEN_AMOUNT",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "PERCENT",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "FINISH_BEFORE_FIRST_ROUND",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_baseToken",
                "type": "address"
            }
        ],
        "name": "baseTokenIsValid",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAdminAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBaseFeeAddress",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBaseFeePercent",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getBaseTokenAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCreationFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getDexLockerAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getFeeAddresses",
        "outputs": [
            {
                "internalType": "address",
                "name": "baseFeeAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "tokenFeeAddress",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getFees",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "baseFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "creationFee",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getFinishBeforeFirstRound",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getFirstRoundLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getListBaseTokenLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getMaxPresaleLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getMaxSuccessToLiquidity",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getMinLiquidityPercent",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getMinLockPeriod",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSettingAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "baseFeeAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "tokenFeeAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "adminAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "wrapTokenAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "dexLockerAddress",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSettingInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "baseFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "creationFee",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "firstRoundLength",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxPresaleLength",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "minLiquidityPercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "minLockPeriod",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxSuccessToLiquidity",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTokenFeeAddress",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTokenFeePercent",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getWhitelistTokenAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getWrapTokenAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getZeroRound",
        "outputs": [
            {
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "percent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "finishBeforeFirstRound",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getZeroRoundPercent",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getZeroRoundTokenAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getZeroRoundTokenAmount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "_adminAddress",
                "type": "address"
            }
        ],
        "name": "setAdminAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "_baseFeeAddress",
                "type": "address"
            }
        ],
        "name": "setBaseFeeAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_baseFeePercent",
                "type": "uint256"
            }
        ],
        "name": "setBaseFeePercent",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_creationFee",
                "type": "uint256"
            }
        ],
        "name": "setCreationFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_dexLockerAddress",
                "type": "address"
            }
        ],
        "name": "setDexLockerAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "_baseFeeAddress",
                "type": "address"
            },
            {
                "internalType": "address payable",
                "name": "_tokenFeeAddress",
                "type": "address"
            }
        ],
        "name": "setFeeAddresses",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_baseFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_tokenFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_creationFee",
                "type": "uint256"
            }
        ],
        "name": "setFees",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "finishBeforeFirstRound",
                "type": "uint256"
            }
        ],
        "name": "setFinishBeforeFirstRound",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_firstRoundLength",
                "type": "uint256"
            }
        ],
        "name": "setFirstRoundLength",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_maxLength",
                "type": "uint256"
            }
        ],
        "name": "setMaxPresaleLength",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_time",
                "type": "uint256"
            }
        ],
        "name": "setMaxSuccessToLiquidity",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_minLiquidityPercent",
                "type": "uint256"
            }
        ],
        "name": "setMinLiquidityPercent",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_time",
                "type": "uint256"
            }
        ],
        "name": "setMinLockPeriod",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "baseFeeAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "tokenFeeAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "adminAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "wrapTokenAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "dexLockerAddress",
                "type": "address"
            }
        ],
        "name": "setSettingAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "baseFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "creationFee",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "firstRoundLength",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxPresaleLength",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "minLiquidityPercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "minLockPeriod",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxSuccessToLiquidity",
                "type": "uint256"
            }
        ],
        "name": "setSettingInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "_tokenFeeAddress",
                "type": "address"
            }
        ],
        "name": "setTokenFeeAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tokenFeePercent",
                "type": "uint256"
            }
        ],
        "name": "setTokenFeePercent",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_wrapTokenAddress",
                "type": "address"
            }
        ],
        "name": "setWrapTokenAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "percent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "finishBeforeFirstRound",
                "type": "uint256"
            }
        ],
        "name": "setZeroRound",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_percent",
                "type": "uint256"
            }
        ],
        "name": "setZeroRoundPercent",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenAddress",
                "type": "address"
            }
        ],
        "name": "setZeroRoundTokenAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_tokenAmount",
                "type": "uint256"
            }
        ],
        "name": "setZeroRoundTokenAmount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_baseToken",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "_allow",
                "type": "bool"
            }
        ],
        "name": "updateBaseToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_token",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_holdAmount",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "_allow",
                "type": "bool"
            }
        ],
        "name": "updateWhitelistToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_user",
                "type": "address"
            }
        ],
        "name": "userHoldSufficientFirstRoundToken",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "whitelistTokenLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
const ABI_PRESALE_FACTORY = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "presaleContract",
                "type": "address"
            }
        ],
        "name": "PresaleRegistered",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "_allow",
                "type": "bool"
            }
        ],
        "name": "adminAllowPresaleGenerator",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "presaleAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "presaleGeneratorAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_presaleGeneratorAddress",
                "type": "address"
            }
        ],
        "name": "presaleGeneratorIsValid",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "presaleGeneratorsLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_presaleAddress",
                "type": "address"
            }
        ],
        "name": "presaleIsRegistered",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "presalesLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_presaleAddress",
                "type": "address"
            }
        ],
        "name": "registerPresale",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const ABI_MINT_TOKEN_FACTORY = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "tokenOwner",
                "type": "address"
            }
        ],
        "name": "TokenRegistered",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_address",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "_allow",
                "type": "bool"
            }
        ],
        "name": "adminAllowTokenGenerator",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenOwner",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "getTokenByOwnerAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenOwner",
                "type": "address"
            }
        ],
        "name": "getTokensLengthByOwner",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenAddress",
                "type": "address"
            }
        ],
        "name": "isToken",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenOwner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_tokenAddress",
                "type": "address"
            }
        ],
        "name": "registerToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "tokenAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_index",
                "type": "uint256"
            }
        ],
        "name": "tokenGeneratorAtIndex",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenGenerator",
                "type": "address"
            }
        ],
        "name": "tokenGeneratorIsAllowed",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokenGeneratorsLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "tokensLength",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const ABI_MINT_TOKEN_SETTING = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "SETTING",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "CREATION_FEE",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "TOTAL_SUPPLY_FEE",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "TOKEN_FEE_ADDRESS",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getCreationFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSettingInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "creationFee",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "totalSupplyFee",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "tokenFeeAddress",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTokenFeeAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getTotalSupplyFee",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_creationFee",
                "type": "uint256"
            }
        ],
        "name": "setCreationFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_creationFee",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_totalSupplyFee",
                "type": "uint256"
            },
            {
                "internalType": "address payable",
                "name": "_tokenFeeAddress",
                "type": "address"
            }
        ],
        "name": "setSettingInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "_tokenFeeAddress",
                "type": "address"
            }
        ],
        "name": "setTokenFeeAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_totalSupplyFee",
                "type": "uint256"
            }
        ],
        "name": "setTotalSupplyFee",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const ABI_MINT_TOKEN_GENERATOR = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenFactory",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_tokenSetting",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "creationFee",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalSupplyFee",
                "type": "uint256"
            }
        ],
        "name": "CreateToken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "TOKEN_FACTORY",
        "outputs": [
            {
                "internalType": "contract ITokenFactory",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "TOKEN_SETTING",
        "outputs": [
            {
                "internalType": "contract ITokenSetting",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "symbol",
                "type": "string"
            },
            {
                "internalType": "uint8",
                "name": "decimals",
                "type": "uint8"
            },
            {
                "internalType": "uint256",
                "name": "totalSupply",
                "type": "uint256"
            }
        ],
        "name": "createToken",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
const ABI_AIRDROP_SETTING = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
        }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
        "name": "OwnershipTransferred",
        "type": "event"
    }, {
        "inputs": [],
        "name": "SETTING",
        "outputs": [{
            "internalType": "uint256",
            "name": "FEE_AMOUNT",
            "type": "uint256"
        }, {"internalType": "address payable", "name": "FEE_ADDRESS", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "getFeeAddress",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "getFeeAmount",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "getSettingInfo",
        "outputs": [{"internalType": "uint256", "name": "feeAmount", "type": "uint256"}, {
            "internalType": "address payable",
            "name": "feeAddress",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "owner",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address payable", "name": "_feeAddress", "type": "address"}],
        "name": "setFeeAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_feeAmount", "type": "uint256"}],
        "name": "setFeeAmount",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_feeAmount", "type": "uint256"}, {
            "internalType": "address payable",
            "name": "_feeAddress",
            "type": "address"
        }], "name": "setSettingInfo", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }];
const ABI_AIRDROP_CONTRACT = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_airdropSettingAddress",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "userAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "tokenType",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "numberAddress",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "feeAmount",
                "type": "uint256"
            }
        ],
        "name": "AirdropToken",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "AIRDROP_SETTING",
        "outputs": [
            {
                "internalType": "contract IAirdropSetting",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address[]",
                "name": "listAddress",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "listAmount",
                "type": "uint256[]"
            }
        ],
        "name": "airdropMain",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "internalType": "address[]",
                "name": "listAddress",
                "type": "address[]"
            },
            {
                "internalType": "uint256[]",
                "name": "listAmount",
                "type": "uint256[]"
            }
        ],
        "name": "airdropToken",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

const ABI_LOCK = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "extendAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "oldUnlockTime",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "newUnlockTime",
                "type": "uint256"
            }
        ],
        "name": "ExtendLockDuration",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "lockAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "withdrawAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "lockTime",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "unlockTime",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "needToPayFee",
                "type": "bool"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "baseFee",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenFeePercent",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenFeeAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "realTokenAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "discountPercent",
                "type": "uint256"
            }
        ],
        "name": "LockTokenItem",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "receiveAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "RetrieveBalance",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "fromAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "toAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "TransferLock",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "receiveAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "receiveAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "unlockTime",
                "type": "uint256"
            }
        ],
        "name": "WithdrawToken",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_unlockTime",
                "type": "uint256"
            }
        ],
        "name": "extendLockDuration",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_withdrawalAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_unlockTime",
                "type": "uint256"
            }
        ],
        "name": "lockToken",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "retrieveMainBalance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_receiverAddress",
                "type": "address"
            }
        ],
        "name": "transferLock",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "withdrawToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "allLockIds",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getAllLockIds",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_withdrawalAddress",
                "type": "address"
            }
        ],
        "name": "getLockByWithdrawalAddress",
        "outputs": [
            {
                "internalType": "uint256[]",
                "name": "",
                "type": "uint256[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_walletAddress",
                "type": "address"
            }
        ],
        "name": "getTokenBalanceByAddress",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_tokenAddress",
                "type": "address"
            }
        ],
        "name": "getTotalTokenBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "LOCK_SETTING",
        "outputs": [
            {
                "internalType": "contract ILockSetting",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "lockByWithdrawalAddress",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "lockedToken",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "tokenAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "lockAddress",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "withdrawalAddress",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "lockTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "unlockTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "withdrawTime",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isPayFee",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "baseFee",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenFeePercent",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenFeeAmount",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "realTokenAmount",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isWithdraw",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lockId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "walletTokenBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

const ABI_LOTTERY = [
    {
        "inputs": [{
            "internalType": "address",
            "name": "_paymentTokenAddress",
            "type": "address"
        }, {"internalType": "address", "name": "_randomGeneratorAddress", "type": "address"}],
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "uint256",
            "name": "lotteryId",
            "type": "uint256"
        }, {"indexed": false, "internalType": "uint256", "name": "firstTicketIdNextLottery", "type": "uint256"}],
        "name": "LotteryClose",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "uint256",
            "name": "lotteryId",
            "type": "uint256"
        }, {"indexed": false, "internalType": "uint256", "name": "injectedAmount", "type": "uint256"}],
        "name": "LotteryInjection",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "uint256",
            "name": "lotteryId",
            "type": "uint256"
        }, {"indexed": false, "internalType": "uint256", "name": "finalNumber", "type": "uint256"}, {
            "indexed": false,
            "internalType": "uint256",
            "name": "countWinningTickets",
            "type": "uint256"
        }],
        "name": "LotteryNumberDrawn",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "uint256",
            "name": "lotteryId",
            "type": "uint256"
        }, {"indexed": false, "internalType": "uint256", "name": "startTime", "type": "uint256"}, {
            "indexed": false,
            "internalType": "uint256",
            "name": "endTime",
            "type": "uint256"
        }, {"indexed": false, "internalType": "uint256", "name": "priceTicket", "type": "uint256"}, {
            "indexed": false,
            "internalType": "uint256",
            "name": "firstTicketId",
            "type": "uint256"
        }, {"indexed": false, "internalType": "uint256", "name": "injectedAmount", "type": "uint256"}],
        "name": "LotteryOpen",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": false,
            "internalType": "address",
            "name": "operator",
            "type": "address"
        }, {"indexed": false, "internalType": "address", "name": "treasury", "type": "address"}, {
            "indexed": false,
            "internalType": "address",
            "name": "injector",
            "type": "address"
        }],
        "name": "NewOperatorAndTreasuryAndInjectorAddresses",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "internalType": "address", "name": "randomGenerator", "type": "address"}],
        "name": "NewRandomGenerator",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
        }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
        "name": "OwnershipTransferred",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "claimer",
            "type": "address"
        }, {"indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256"}, {
            "indexed": true,
            "internalType": "uint256",
            "name": "lotteryId",
            "type": "uint256"
        }, {"indexed": false, "internalType": "uint256", "name": "numberTickets", "type": "uint256"}],
        "name": "TicketsClaim",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{"indexed": true, "internalType": "address", "name": "buyer", "type": "address"}, {
            "indexed": true,
            "internalType": "uint256",
            "name": "lotteryId",
            "type": "uint256"
        }, {"indexed": false, "internalType": "uint256", "name": "numberTickets", "type": "uint256"}, {
            "indexed": false,
            "internalType": "uint256[]",
            "name": "listTicketId",
            "type": "uint256[]"
        }],
        "name": "TicketsPurchase",
        "type": "event"
    }, {
        "inputs": [],
        "name": "MAX_LENGTH_LOTTERY",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "MAX_TREASURY_FEE",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "MIN_DISCOUNT_DIVISOR",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "MIN_LENGTH_LOTTERY",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_lotteryId", "type": "uint256"}, {
            "internalType": "uint32[]",
            "name": "_ticketNumbers",
            "type": "uint32[]"
        }], "name": "buyTickets", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_lotteryId", "type": "uint256"}, {
            "internalType": "bool",
            "name": "_autoInjection",
            "type": "bool"
        }], "name": "calculateReward", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "_discountDivisor",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "_priceTicket", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "_numberTickets",
            "type": "uint256"
        }],
        "name": "calculateTotalPriceForBulkTickets",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "pure",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "_randomGeneratorAddress", "type": "address"}],
        "name": "changeRandomGenerator",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_lotteryId", "type": "uint256"}, {
            "internalType": "uint256[]",
            "name": "_ticketIds",
            "type": "uint256[]"
        }, {"internalType": "uint32[]", "name": "_brackets", "type": "uint32[]"}],
        "name": "claimTickets",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_lotteryId", "type": "uint256"}],
        "name": "closeLottery",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "currentLotteryId",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "currentTicketId",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_lotteryId", "type": "uint256"}],
        "name": "getRewardInfo",
        "outputs": [{
            "internalType": "uint256[6]",
            "name": "rewardsBreakdown",
            "type": "uint256[6]"
        }, {
            "internalType": "uint256[6]",
            "name": "tokenPerBracket",
            "type": "uint256[6]"
        }, {"internalType": "uint256[6]", "name": "countWinnersPerBracket", "type": "uint256[6]"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_lotteryId", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
        }], "name": "injectFunds", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [],
        "name": "injectorAddress",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "maxNumberTicketsPerBuyOrClaim",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "maxPriceTicket",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "minPriceTicket",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "operatorAddress",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "owner",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "paymentToken",
        "outputs": [{"internalType": "contract IERC20", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "pendingInjectionNextLottery",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "randomGenerator",
        "outputs": [{"internalType": "contract IRandomNumberGenerator", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "tokenAddress", "type": "address"}, {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }, {"internalType": "address", "name": "userAddress", "type": "address"}],
        "name": "retrieveToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "_operatorAddress",
            "type": "address"
        }, {"internalType": "address", "name": "_treasuryAddress", "type": "address"}, {
            "internalType": "address",
            "name": "_injectorAddress",
            "type": "address"
        }], "name": "setAddress", "outputs": [], "stateMutability": "nonpayable", "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_maxNumberTicketsPerBuy", "type": "uint256"}],
        "name": "setMaxNumberTicketsPerBuy",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "_minPriceTicket",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "_maxPriceTicket", "type": "uint256"}],
        "name": "setMinAndMaxTicketPrice",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_endTime", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "_priceTicket",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "_discountDivisor", "type": "uint256"}, {
            "internalType": "uint256[6]",
            "name": "_rewardsBreakdown",
            "type": "uint256[6]"
        }, {"internalType": "uint256", "name": "_treasuryFee", "type": "uint256"}],
        "name": "startLottery",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "treasuryAddress",
        "outputs": [{"internalType": "address", "name": "", "type": "address"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "viewCurrentLotteryId",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_lotteryId", "type": "uint256"}],
        "name": "viewLottery",
        "outputs": [{"internalType": "uint32", "name": "status", "type": "uint32"}, {
            "internalType": "uint256",
            "name": "startTime",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "endTime", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "priceTicket",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "discountDivisor", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "treasuryFee",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "firstTicketId", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "firstTicketIdNextLottery",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "amountCollected", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "numberBuyer",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "finalNumber", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256[]", "name": "_ticketIds", "type": "uint256[]"}],
        "name": "viewNumbersAndStatusesForTicketIds",
        "outputs": [{"internalType": "uint32[]", "name": "", "type": "uint32[]"}, {
            "internalType": "bool[]",
            "name": "",
            "type": "bool[]"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "uint256", "name": "_lotteryId", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "_ticketId",
            "type": "uint256"
        }, {"internalType": "uint32", "name": "_bracket", "type": "uint32"}],
        "name": "viewRewardsForTicketId",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{"internalType": "address", "name": "_user", "type": "address"}, {
            "internalType": "uint256",
            "name": "_lotteryId",
            "type": "uint256"
        }, {"internalType": "uint256", "name": "_cursor", "type": "uint256"}, {
            "internalType": "uint256",
            "name": "_size",
            "type": "uint256"
        }],
        "name": "viewUserInfoForLotteryId",
        "outputs": [{"internalType": "uint256[]", "name": "", "type": "uint256[]"}, {
            "internalType": "uint32[]",
            "name": "",
            "type": "uint32[]"
        }, {"internalType": "bool[]", "name": "", "type": "bool[]"}, {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }
];
const ABI_STAKING = [{"inputs":[{"internalType":"address","name":"_stakingToken","type":"address"},{"internalType":"address","name":"_swapToken","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"swapTokenAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stakingTokenAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalStakingAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"swapTokenBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stakingTokenBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stakingId","type":"uint256"},{"indexed":false,"internalType":"address","name":"paymentToken","type":"address"}],"name":"BuyToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalStakingAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"stakingId","type":"uint256"},{"indexed":false,"internalType":"address","name":"paymentToken","type":"address"}],"name":"StakingToken","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"TOKEN_DECIMALS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_isRunning","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allStakingId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"swapTokenAmount","type":"uint256"}],"name":"buy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"defaultMinAmountStaking","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dexPairAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"listStakingItem","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"},{"internalType":"uint256","name":"stakingTime","type":"uint256"},{"internalType":"address","name":"paymentToken","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minAmountStaking","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operatorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operatorAddress","type":"address"},{"internalType":"address","name":"_dexPairAddress","type":"address"},{"internalType":"address","name":"_feeAddress","type":"address"}],"name":"setAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"staking","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakingAmountByAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"stakingIdByAddress","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"}],"name":"takeBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"}],"name":"takeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toggleRunning","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalBoughtAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDepositedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

const ABI_PANCAKE = [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

const PRESALE_GENERATOR_ADDRESS = "0x4A8d30e4e3A2b634f51E395513a440578429C01c";
const MINT_TOKEN_GENERATOR_ADDRESS = "0xF0348B287Fb73d283e53911DcbE4166681600E9F";
const AIRDROP_ADDRESS = "0x629E2f5bADeba3e4e3554F86A547e89c7179FAF5";
const AIRDROP_SETTING = "0x9739B9647B9B25b9bb6f9BcC5F05d9be5ce7d4B6";
const LOCK_ADDRESS = "0xe741ad412f44532FedBC358D04C17b9446335BaA";
const LOTTERY_ADDRESS = "0xe95d53f9ae6db136fcfebb3975a8ef4f33aa27d7";
const PANCAKE_ADDRESS = "0x10ed43c718714eb63d5aa57b78b54704e256024e";

const ETH_CHAIN_ID = {
    1: "main",
    3: "test",
    4: "test",
    5: "test",
    42: "test",
};
const BSC_CHAIN_ID = {
    56: "main",
    97: "test",
};
const BASE_TOKEN_PLATFORM = {
    'bsc': "BNB",
    'eth': "ETH",
    'polygon': "MATIC",
};
const BASE_TOKEN_NAME = {
    'bsc': "binance-smart-chain",
    'eth': "ethereum",
    'polygon': "matic",
};

const LD = {
    chonNhanh: {
        conGiap: "Con giáp",
        dan: "Dàn",
        soKep: "Số kép",
        tong: "Tổng",
        dauDuoi: "Đầu đuôi",
        chanLe: "Chẵn lẻ",
        he: "Hệ",
        coSo: "Có số"
    },
    conGiap: {
        ty: {
            name: "Tý",
            list: ['00', '12', '24', '36', '48', '60', '72', '84', '96']
        },
        suu: {
            name: "Sửu",
            list: ['01', '13', '25', '37', '49', '61', '73', '85', '97']
        },
        dan: {
            name: "Dần",
            list: ["02", "14", "26", "38", "50", "62", "74", "86", "98"]
        },
        mao: {
            name: "Mão",
            list: ["03", "15", "27", "39", "51", "63", "75", "87", "99"]
        },
        thin: {
            name: "Thìn",
            list: ["04", "16", "28", "40", "52", "64", "76", "88"]
        },
        ran: {
            name: "Tỵ",
            list: ["05", "17", "29", "41", "53", "65", "77", "89"]
        },
        ngo: {
            name: "Ngọ",
            list: ["06", "18", "30", "42", "54", "66", "78", "90"]
        },
        mui: {
            name: "Mùi",
            list: ["07", "19", "31", "43", "55", "67", "79", "91"]
        },
        than: {
            name: "Thân",
            list: ["08", "20", "32", "44", "56", "68", "80", "92"]
        },
        dau: {
            name: "Dậu",
            list: ["09", "21", "33", "45", "57", "69", "81", "93"]
        },
        tuat: {
            name: "Tuất",
            list: ["10", "22", "34", "46", "58", "70", "82", "94"]
        },
        hoi: {
            name: "Hợi",
            list: ["11", "23", "35", "47", "59", "71", "83", "95"]
        }
    },
    dan: {
        kep05: {
            name: "05 có kép",
            list: ['00', '01', '02', '03', '04', '05', '10', '11', '12', '13', '14', '15', '20', '21', '22', '23', '24', '25', '30', '31', '32', '33', '34', '35', '40', '41', '42', '43', '44', '45', '50', '51', '52', '53', '54', '55']
        },
        kep05_bo: {
            name: "05 bỏ kép",
            list: ['01', '02', '03', '04', '05', '10', '12', '13', '14', '15', '20', '21', '23', '24', '25', '30', '31', '32', '34', '35', '40', '41', '42', '43', '45', '50', '51', '52', '53', '54']
        },
        kep06: {
            name: "06 có kép",
            list: ["00", "01", "02", "03", "04", "05", "06", "10", "11", "12", "13", "14", "15", "16", "20", "21", "22", "23", "24", "25", "26", "30", "31", "32", "33", "34", "35", "36", "40", "41", "42", "43", "44", "45", "46", "50", "51", "52", "53", "54", "55", "56", "60", "61", "62", "63", "64", "65", "66"]
        },
        kep06_bo: {
            name: "06 bỏ kép",
            list: ["01", "02", "03", "04", "05", "06", "10", "12", "13", "14", "15", "16", "20", "21", "23", "24", "25", "26", "30", "31", "32", "34", "35", "36", "40", "41", "42", "43", "45", "46", "50", "51", "52", "53", "54", "56", "60", "61", "62", "63", "64", "65"]
        },
        kep07: {
            name: "07 có kép",
            list: ["00", "01", "02", "03", "04", "05", "06", "07", "10", "11", "12", "13", "14", "15", "16", "17", "20", "21", "22", "23", "24", "25", "26", "27", "30", "31", "32", "33", "34", "35", "36", "37", "40", "41", "42", "43", "44", "45", "46", "47", "50", "51", "52", "53", "54", "55", "56", "57", "60", "61", "62", "63", "64", "65", "66", "67", "70", "71", "72", "73", "74", "75", "76", "77"]
        },
        kep07_bo: {
            name: "07 bỏ kép",
            list: ["01", "02", "03", "04", "05", "06", "07", "10", "12", "13", "14", "15", "16", "17", "20", "21", "23", "24", "25", "26", "27", "30", "31", "32", "34", "35", "36", "37", "40", "41", "42", "43", "45", "46", "47", "50", "51", "52", "53", "54", "56", "57", "60", "61", "62", "63", "64", "65", "67", "70", "71", "72", "73", "74", "75", "76"]
        },
        kep08: {
            name: "08 có kép",
            list: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "10", "11", "12", "13", "14", "15", "16", "17", "18", "20", "21", "22", "23", "24", "25", "26", "27", "28", "30", "31", "32", "33", "34", "35", "36", "37", "38", "40", "41", "42", "43", "44", "45", "46", "47", "48", "50", "51", "52", "53", "54", "55", "56", "57", "58", "60", "61", "62", "63", "64", "65", "66", "67", "68", "70", "71", "72", "73", "74", "75", "76", "77", "78", "80", "81", "82", "83", "84", "85", "86", "87", "88"]
        },
        kep08_bo: {
            name: "08 bỏ kép",
            list: ["01", "02", "03", "04", "05", "06", "07", "08", "10", "12", "13", "14", "15", "16", "17", "18", "20", "21", "23", "24", "25", "26", "27", "28", "30", "31", "32", "34", "35", "36", "37", "38", "40", "41", "42", "43", "45", "46", "47", "48", "50", "51", "52", "53", "54", "56", "57", "58", "60", "61", "62", "63", "64", "65", "67", "68", "70", "71", "72", "73", "74", "75", "76", "78", "80", "81", "82", "83", "84", "85", "86", "87"]
        },
        kep15: {
            name: "15 có kép",
            list: ["11", "12", "13", "14", "15", "21", "22", "23", "24", "25", "31", "32", "33", "34", "35", "41", "42", "43", "44", "45", "51", "52", "53", "54", "55"]
        },
        kep15_bo: {
            name: "15 bỏ kép",
            list: ["12", "13", "14", "15", "21", "23", "24", "25", "31", "32", "34", "35", "41", "42", "43", "45", "51", "52", "53", "54"]
        },
        kep16: {
            name: "16 có kép",
            list: ["11", "12", "13", "14", "15", "16", "21", "22", "23", "24", "25", "26", "31", "32", "33", "34", "35", "36", "41", "42", "43", "44", "45", "46", "51", "52", "53", "54", "55", "56", "61", "62", "63", "64", "65", "66"]
        },
        kep16_bo: {
            name: "16 bỏ kép",
            list: ["12", "13", "14", "15", "16", "21", "23", "24", "25", "26", "31", "32", "34", "35", "36", "41", "42", "43", "45", "46", "51", "52", "53", "54", "56", "61", "62", "63", "64", "65"]
        },
        kep17: {
            name: "17 có kép",
            list: ["11", "12", "13", "14", "15", "16", "17", "21", "22", "23", "24", "25", "26", "27", "31", "32", "33", "34", "35", "36", "37", "41", "42", "43", "44", "45", "46", "47", "51", "52", "53", "54", "55", "56", "57", "61", "62", "63", "64", "65", "66", "67", "71", "72", "73", "74", "75", "76", "77"]
        },
        kep17_bo: {
            name: "17 bỏ kép",
            list: ["12", "13", "14", "15", "16", "17", "21", "23", "24", "25", "26", "27", "31", "32", "34", "35", "36", "37", "41", "42", "43", "45", "46", "47", "51", "52", "53", "54", "56", "57", "61", "62", "63", "64", "65", "67", "71", "72", "73", "74", "75", "76"]
        },
        kep18: {
            name: "18 có kép",
            list: ["11", "12", "13", "14", "15", "16", "17", "18", "21", "22", "23", "24", "25", "26", "27", "28", "31", "32", "33", "34", "35", "36", "37", "38", "41", "42", "43", "44", "45", "46", "47", "48", "51", "52", "53", "54", "55", "56", "57", "58", "61", "62", "63", "64", "65", "66", "67", "68", "71", "72", "73", "74", "75", "76", "77", "78", "81", "82", "83", "84", "85", "86", "87", "88"]
        },
        kep18_bo: {
            name: "18 bỏ kép",
            list: ["12", "13", "14", "15", "16", "17", "18", "21", "23", "24", "25", "26", "27", "28", "31", "32", "34", "35", "36", "37", "38", "41", "42", "43", "45", "46", "47", "48", "51", "52", "53", "54", "56", "57", "58", "61", "62", "63", "64", "65", "67", "68", "71", "72", "73", "74", "75", "76", "78", "81", "82", "83", "84", "85", "86", "87"]
        },
        kep19: {
            name: "19 có kép",
            list: ["11", "12", "13", "14", "15", "16", "17", "18", "19", "21", "22", "23", "24", "25", "26", "27", "28", "29", "31", "32", "33", "34", "35", "36", "37", "38", "39", "41", "42", "43", "44", "45", "46", "47", "48", "49", "51", "52", "53", "54", "55", "56", "57", "58", "59", "61", "62", "63", "64", "65", "66", "67", "68", "69", "71", "72", "73", "74", "75", "76", "77", "78", "79", "81", "82", "83", "84", "85", "86", "87", "88", "89", "91", "92", "93", "94", "95", "96", "97", "98", "99"]
        },
        kep19_bo: {
            name: "19 bỏ kép",
            list: ["12", "13", "14", "15", "16", "17", "18", "19", "21", "23", "24", "25", "26", "27", "28", "29", "31", "32", "34", "35", "36", "37", "38", "39", "41", "42", "43", "45", "46", "47", "48", "49", "51", "52", "53", "54", "56", "57", "58", "59", "61", "62", "63", "64", "65", "67", "68", "69", "71", "72", "73", "74", "75", "76", "78", "79", "81", "82", "83", "84", "85", "86", "87", "89", "91", "92", "93", "94", "95", "96", "97", "98"]
        },
        kep26: {
            name: "26 có kép",
            list: ["22", "23", "24", "25", "26", "32", "33", "34", "35", "36", "42", "43", "44", "45", "46", "52", "53", "54", "55", "56", "62", "63", "64", "65", "66"]
        },
        kep26_bo: {
            name: "26 bỏ kép",
            list: ["23", "24", "25", "26", "32", "34", "35", "36", "42", "43", "45", "46", "52", "53", "54", "56", "62", "63", "64", "65"]
        },
        kep27: {
            name: "27 có kép",
            list: ["22", "23", "24", "25", "26", "27", "32", "33", "34", "35", "36", "37", "42", "43", "44", "45", "46", "47", "52", "53", "54", "55", "56", "57", "62", "63", "64", "65", "66", "67", "72", "73", "74", "75", "76", "77"]
        },
        kep27_bo: {
            name: "27 bỏ kép",
            list: ["23", "24", "25", "26", "27", "32", "34", "35", "36", "37", "42", "43", "45", "46", "47", "52", "53", "54", "56", "57", "62", "63", "64", "65", "67", "72", "73", "74", "75", "76"]
        },
        kep28: {
            name: "28 có kép",
            list: ["22", "23", "24", "25", "26", "27", "28", "32", "33", "34", "35", "36", "37", "38", "42", "43", "44", "45", "46", "47", "48", "52", "53", "54", "55", "56", "57", "58", "62", "63", "64", "65", "66", "67", "68", "72", "73", "74", "75", "76", "77", "78", "82", "83", "84", "85", "86", "87", "88"]
        },
        kep28_bo: {
            name: "28 bỏ kép",
            list: ["23", "24", "25", "26", "27", "28", "32", "34", "35", "36", "37", "38", "42", "43", "45", "46", "47", "48", "52", "53", "54", "56", "57", "58", "62", "63", "64", "65", "67", "68", "72", "73", "74", "75", "76", "78", "82", "83", "84", "85", "86", "87"]
        },
        kep29: {
            name: "29 có kép",
            list: ["22", "23", "24", "25", "26", "27", "28", "29", "32", "33", "34", "35", "36", "37", "38", "39", "42", "43", "44", "45", "46", "47", "48", "49", "52", "53", "54", "55", "56", "57", "58", "59", "62", "63", "64", "65", "66", "67", "68", "69", "72", "73", "74", "75", "76", "77", "78", "79", "82", "83", "84", "85", "86", "87", "88", "89", "92", "93", "94", "95", "96", "97", "98", "99"]
        },
        kep29_bo: {
            name: "29 bỏ kép",
            list: ["23", "24", "25", "26", "27", "28", "29", "32", "34", "35", "36", "37", "38", "39", "42", "43", "45", "46", "47", "48", "49", "52", "53", "54", "56", "57", "58", "59", "62", "63", "64", "65", "67", "68", "69", "72", "73", "74", "75", "76", "78", "79", "82", "83", "84", "85", "86", "87", "89", "92", "93", "94", "95", "96", "97", "98"]
        },
        kep38: {
            name: "38 có kép",
            list: ["33", "34", "35", "36", "37", "38", "43", "44", "45", "46", "47", "48", "53", "54", "55", "56", "57", "58", "63", "64", "65", "66", "67", "68", "73", "74", "75", "76", "77", "78", "83", "84", "85", "86", "87", "88"]
        },
        kep38_bo: {
            name: "38 bỏ kép",
            list: ["34", "35", "36", "37", "38", "43", "45", "46", "47", "48", "53", "54", "56", "57", "58", "63", "64", "65", "67", "68", "73", "74", "75", "76", "78", "83", "84", "85", "86", "87"]
        },
        kep39: {
            name: "39 có kép",
            list: ["33", "34", "35", "36", "37", "38", "39", "43", "44", "45", "46", "47", "48", "49", "53", "54", "55", "56", "57", "58", "59", "63", "64", "65", "66", "67", "68", "69", "73", "74", "75", "76", "77", "78", "79", "83", "84", "85", "86", "87", "88", "89", "93", "94", "95", "96", "97", "98", "99"]
        },
        kep39_bo: {
            name: "39 bỏ kép",
            list: ["34", "35", "36", "37", "38", "39", "43", "45", "46", "47", "48", "49", "53", "54", "56", "57", "58", "59", "63", "64", "65", "67", "68", "69", "73", "74", "75", "76", "78", "79", "83", "84", "85", "86", "87", "89", "93", "94", "95", "96", "97", "98"]
        },
        kep49: {
            name: "49 có kép",
            list: ["44", "45", "46", "47", "48", "49", "54", "55", "56", "57", "58", "59", "64", "65", "66", "67", "68", "69", "74", "75", "76", "77", "78", "79", "84", "85", "86", "87", "88", "89", "94", "95", "96", "97", "98", "99"]
        },
        kep49_bo: {
            name: "49 bỏ kép",
            list: ["45", "46", "47", "48", "49", "54", "56", "57", "58", "59", "64", "65", "67", "68", "69", "74", "75", "76", "78", "79", "84", "85", "86", "87", "89", "94", "95", "96", "97", "98"]
        },
        cach_3_00: {
            name: "00 cách 3",
            list: ["00", "03", "06", "09", "12", "15", "18", "21", "24", "27", "30", "33", "36", "39", "42", "45", "48", "51", "54", "57", "60", "63", "66", "69", "72", "75", "78", "81", "84", "87", "90", "93", "96", "99"]
        },
        cach_4_00: {
            name: "00 cách 4",
            list: ["00", "04", "08", "12", "16", "20", "24", "28", "32", "36", "40", "44", "48", "52", "56", "60", "64", "68", "72", "76", "80", "84", "88", "92", "96"]
        },
        cach_3_01: {
            name: "01 cách 3",
            list: ["01", "04", "07", "10", "13", "16", "19", "22", "25", "28", "31", "34", "37", "40", "43", "46", "49", "52", "55", "58", "61", "64", "67", "70", "73", "76", "79", "82", "85", "88", "91", "94", "97"]
        },
        cach_3_02: {
            name: "02 cách 3",
            list: ["02", "05", "08", "11", "14", "17", "20", "23", "26", "29", "32", "35", "38", "41", "44", "47", "50", "53", "56", "59", "62", "65", "68", "71", "74", "77", "80", "83", "86", "89", "92", "95", "98"]
        }
    },
    soKep: {
        kepLech: {
            name: "Kép lệch",
            list: ["05", "16", "27", "38", "49", "50", "61", "72", "83", "94"]
        },
        kepThang: {
            name: "Kép thẳng",
            list: ["00", "11", "22", "33", "44", "55", "66", "77", "88", "99"]
        },
        satKepThang: {
            name: "Sát kép thẳng",
            list: ["01", "10", "12", "21", "23", "32", "34", "43", "45", "54", "56", "65", "67", "76", "78", "87", "89", "98"]
        },
        satKepLech: {
            name: "Sát kép lệch",
            list: ["04", "06", "15", "17", "26", "28", "37", "39", "48", "51", "60", "62", "71", "73", "82", "84", "93", "95"]
        },
        satHaiKep: {
            name: "Sát hai kép",
            list: ["01", "04", "06", "10", "12", "15", "17", "21", "23", "26", "28", "32", "34", "37", "39", "43", "45", "48", "51", "54", "56", "60", "62", "65", "67", "71", "73", "76", "78", "82", "84", "87", "89", "93", "95", "98"]
        }
    },
    tong: {
        tongTo: {
            name: "Tổng to",
            list: ["05", "06", "07", "08", "09", "14", "15", "16", "17", "18", "23", "24", "25", "26", "27", "32", "33", "34", "35", "36", "41", "42", "43", "44", "45", "50", "51", "52", "53", "54", "60", "61", "62", "63", "69", "70", "71", "72", "78", "79", "80", "81", "87", "88", "89", "90", "96", "97", "98", "99"]
        },
        tongBe: {
            name: "Tổng bé",
            list: ["00", "01", "02", "03", "04", "10", "11", "12", "13", "19", "20", "21", "22", "28", "29", "30", "31", "37", "38", "39", "40", "46", "47", "48", "49", "55", "56", "57", "58", "59", "64", "65", "66", "67", "68", "73", "74", "75", "76", "77", "82", "83", "84", "85", "86", "91", "92", "93", "94", "95"]
        },
        tongChan: {
            name: "Tổng chẵn",
            list: ["00", "02", "04", "06", "08", "11", "13", "15", "17", "19", "20", "22", "24", "26", "28", "31", "33", "35", "37", "39", "40", "42", "44", "46", "48", "51", "53", "55", "57", "59", "60", "62", "64", "66", "68", "71", "73", "75", "77", "79", "80", "82", "84", "86", "88", "91", "93", "95", "97", "99"]
        },
        tongLe: {
            name: "Tổng lẻ",
            list: ["01", "03", "05", "07", "09", "10", "12", "14", "16", "18", "21", "23", "25", "27", "29", "30", "32", "34", "36", "38", "41", "43", "45", "47", "49", "50", "52", "54", "56", "58", "61", "63", "65", "67", "69", "70", "72", "74", "76", "78", "81", "83", "85", "87", "89", "90", "92", "94", "96", "98"]
        },
        tongTren10: {
            name: "Tổng trên 10",
            list: ["29", "38", "39", "47", "48", "49", "56", "57", "58", "59", "65", "66", "67", "68", "69", "74", "75", "76", "77", "78", "79", "83", "84", "85", "86", "87", "88", "89", "92", "93", "94", "95", "96", "97", "98", "99"]
        },
        tongDuoi10: {
            name: "Tổng dưới 10",
            list: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "20", "21", "22", "23", "24", "25", "26", "27", "30", "31", "32", "33", "34", "35", "36", "40", "41", "42", "43", "44", "45", "50", "51", "52", "53", "54", "60", "61", "62", "63", "70", "71", "72", "80", "81", "90"]
        },
        tong0: {
            name: "Tổng 0",
            list: ["00", "19", "28", "37", "46", "55", "64", "73", "82", "91"]
        },
        tong1: {
            name: "Tổng 1",
            list: ["01", "10", "29", "38", "47", "56", "65", "74", "83", "92"]
        },
        tong2: {
            name: "Tổng 2",
            list: ["02", "11", "20", "39", "48", "57", "66", "75", "84", "93"]
        },
        tong3: {
            name: "Tổng 3",
            list: ["03", "12", "21", "30", "49", "58", "67", "76", "85", "94"]
        },
        tong4: {
            name: "Tổng 4",
            list: ["04", "13", "22", "31", "40", "59", "68", "77", "86", "95"]
        },
        tong5: {
            name: "Tổng 5",
            list: ["05", "14", "23", "32", "41", "50", "69", "78", "87", "96"]
        },
        tong6: {
            name: "Tổng 6",
            list: ["06", "15", "24", "33", "42", "51", "60", "79", "88", "97"]
        },
        tong7: {
            name: "Tổng 7",
            list: ["07", "16", "25", "34", "43", "52", "61", "70", "89", "98"]
        },
        tong8: {
            name: "Tổng 8",
            list: ["08", "17", "26", "35", "44", "53", "62", "71", "80", "99"]
        },
        tong9: {
            name: "Tổng 9",
            list: ["09", "18", "27", "36", "45", "54", "63", "72", "81", "90"]
        },
        tongChia3Du0: {
            name: "Tổng chia 3 dư 0",
            list: ["00", "03", "06", "09", "12", "15", "18", "21", "24", "27", "30", "33", "36", "39", "42", "45", "48", "51", "54", "57", "60", "63", "66", "69", "72", "75", "78", "81", "84", "87", "90", "93", "96", "99"]
        },
        tongChia3Du1: {
            name: "Tổng chia 3 dư 1",
            list: ["01", "04", "07", "10", "13", "16", "19", "22", "25", "28", "31", "34", "37", "40", "43", "46", "49", "52", "55", "58", "61", "64", "67", "70", "73", "76", "79", "82", "85", "88", "91", "94", "97"]
        },
        tongChia3Du2: {
            name: "Tổng chia 3 dư 2",
            list: ["02", "05", "08", "11", "14", "17", "20", "23", "26", "29", "32", "35", "38", "41", "44", "47", "50", "53", "56", "59", "62", "65", "68", "71", "74", "77", "80", "83", "86", "89", "92", "95", "98"]
        }
    },
    dauDuoi: {
        dauBe: {
            name: "Đầu bé",
            list: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49"]
        },
        ditBe: {
            name: "Đít bé",
            list: ["00", "01", "02", "03", "04", "10", "11", "12", "13", "14", "20", "21", "22", "23", "24", "30", "31", "32", "33", "34", "40", "41", "42", "43", "44", "50", "51", "52", "53", "54", "60", "61", "62", "63", "64", "70", "71", "72", "73", "74", "80", "81", "82", "83", "84", "90", "91", "92", "93", "94"]
        },
        dauTo: {
            name: "Đầu to",
            list: ["50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99"]
        },
        ditTo: {
            name: "Đít to",
            list: ["05", "06", "07", "08", "09", "15", "16", "17", "18", "19", "25", "26", "27", "28", "29", "35", "36", "37", "38", "39", "45", "46", "47", "48", "49", "55", "56", "57", "58", "59", "65", "66", "67", "68", "69", "75", "76", "77", "78", "79", "85", "86", "87", "88", "89", "95", "96", "97", "98", "99"]
        },
        ditChan: {
            name: "Đít chẵn",
            list: ["00", "02", "04", "06", "08", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48", "50", "52", "54", "56", "58", "60", "62", "64", "66", "68", "70", "72", "74", "76", "78", "80", "82", "84", "86", "88", "90", "92", "94", "96", "98"]
        },
        ditLe: {
            name: "Đít lẻ",
            list: ["01", "03", "05", "07", "09", "11", "13", "15", "17", "19", "21", "23", "25", "27", "29", "31", "33", "35", "37", "39", "41", "43", "45", "47", "49", "51", "53", "55", "57", "59", "61", "63", "65", "67", "69", "71", "73", "75", "77", "79", "81", "83", "85", "87", "89", "91", "93", "95", "97", "99"]
        },
        dauChan: {
            name: "Đầu chẵn",
            list: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89"]
        },
        dauLe: {
            name: "Đầu lẻ",
            list: ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99"]
        },
        dauToHonDit: {
            name: "Đầu to hơn đít",
            list: ["10", "20", "21", "30", "31", "32", "40", "41", "42", "43", "50", "51", "52", "53", "54", "60", "61", "62", "63", "64", "65", "70", "71", "72", "73", "74", "75", "76", "80", "81", "82", "83", "84", "85", "86", "87", "90", "91", "92", "93", "94", "95", "96", "97", "98"]
        },
        ditToHonDau: {
            name: "Đít to hơn đầu",
            list: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "12", "13", "14", "15", "16", "17", "18", "19", "23", "24", "25", "26", "27", "28", "29", "34", "35", "36", "37", "38", "39", "45", "46", "47", "48", "49", "56", "57", "58", "59", "67", "68", "69", "78", "79", "89"]
        }
    },
    chanLe: {
        chanChan: {
            name: "Chẵn chẵn",
            list: ["00", "02", "04", "06", "08", "20", "22", "24", "26", "28", "40", "42", "44", "46", "48", "60", "62", "64", "66", "68", "80", "82", "84", "86", "88"]
        },
        chanLe: {
            name: "Chẵn lẻ",
            list: ["01", "03", "05", "07", "09", "21", "23", "25", "27", "29", "41", "43", "45", "47", "49", "61", "63", "65", "67", "69", "81", "83", "85", "87", "89"]
        },
        leChan: {
            name: "Lẻ chẵn",
            list: ["10", "12", "14", "16", "18", "30", "32", "34", "36", "38", "50", "52", "54", "56", "58", "70", "72", "74", "76", "78", "90", "92", "94", "96", "98"]
        },
        leLe: {
            name: "Lẻ lẻ",
            list: ["11", "13", "15", "17", "19", "31", "33", "35", "37", "39", "51", "53", "55", "57", "59", "71", "73", "75", "77", "79", "91", "93", "95", "97", "99"]
        },
        dauBeDitChan: {
            name: "Đầu bé đít chẵn",
            list: ["00", "02", "04", "06", "08", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38", "40", "42", "44", "46", "48"]
        },
        dauBeDitLe: {
            name: "Đầu bé đít lẻ",
            list: ["01", "03", "05", "07", "09", "11", "13", "15", "17", "19", "21", "23", "25", "27", "29", "31", "33", "35", "37", "39", "41", "43", "45", "47", "49"]
        },
        dauToDitChan: {
            name: "Đầu to đít chẵn",
            list: ["50", "52", "54", "56", "58", "60", "62", "64", "66", "68", "70", "72", "74", "76", "78", "80", "82", "84", "86", "88", "90", "92", "94", "96", "98"]
        },
        dauToDitLe: {
            name: "Đầu to đít lẻ",
            list: ["51", "53", "55", "57", "59", "61", "63", "65", "67", "69", "71", "73", "75", "77", "79", "81", "83", "85", "87", "89", "91", "93", "95", "97", "99"]
        },
        dauChanTongTo: {
            name: "Đầu chẵn tổng to",
            list: ["05", "06", "07", "08", "09", "23", "24", "25", "26", "27", "41", "42", "43", "44", "45", "60", "61", "62", "63", "69", "80", "81", "87", "88", "89"]
        },
        dauChanTongBe: {
            name: "Đầu chẵn tổng bé",
            list: ["00", "01", "02", "03", "04", "20", "21", "22", "28", "29", "40", "46", "47", "48", "49", "64", "65", "66", "67", "68", "82", "83", "84", "85", "86"]
        },
        dauLeTongTo: {
            name: "Đầu lẻ tổng to",
            list: ["14", "15", "16", "17", "18", "32", "33", "34", "35", "36", "50", "51", "52", "53", "54", "70", "71", "72", "78", "79", "90", "96", "97", "98", "99"]
        },
        dauLeTongBe: {
            name: "Đầu lẻ tổng bé",
            list: ["10", "11", "12", "13", "19", "30", "31", "37", "38", "39", "55", "56", "57", "58", "59", "73", "74", "75", "76", "77", "91", "92", "93", "94", "95"]
        },
        dauLeDitTo: {
            name: "Đầu lẻ đít to",
            list: ["15", "16", "17", "18", "19", "35", "36", "37", "38", "39", "55", "56", "57", "58", "59", "75", "76", "77", "78", "79", "95", "96", "97", "98", "99"]
        },
        dauLeDitBe: {
            name: "Đầu lẻ đít bé",
            list: ["10", "11", "12", "13", "14", "30", "31", "32", "33", "34", "50", "51", "52", "53", "54", "70", "71", "72", "73", "74", "90", "91", "92", "93", "94"]
        },
        dauChanDitTo: {
            name: "Đầu chẵn đít to",
            list: ["05", "06", "07", "08", "09", "25", "26", "27", "28", "29", "45", "46", "47", "48", "49", "65", "66", "67", "68", "69", "85", "86", "87", "88", "89"]
        },
        dauChanDitBe: {
            name: "Đầu chẵn đít bé",
            list: ["00", "01", "02", "03", "04", "20", "21", "22", "23", "24", "40", "41", "42", "43", "44", "60", "61", "62", "63", "64", "80", "81", "82", "83", "84"]
        },
        dauToDitTo: {
            name: "Đầu to đít to",
            list: ["55", "56", "57", "58", "59", "65", "66", "67", "68", "69", "75", "76", "77", "78", "79", "85", "86", "87", "88", "89", "95", "96", "97", "98", "99"]
        },
        dauToDitBe: {
            name: "Đầu to đít bé",
            list: ["50", "51", "52", "53", "54", "60", "61", "62", "63", "64", "70", "71", "72", "73", "74", "80", "81", "82", "83", "84", "90", "91", "92", "93", "94"]
        },
        dauBeDitTo: {
            name: "Đầu bé đít to",
            list: ["05", "06", "07", "08", "09", "15", "16", "17", "18", "19", "25", "26", "27", "28", "29", "35", "36", "37", "38", "39", "45", "46", "47", "48", "49"]
        },
        dauBeDitBe: {
            name: "Đầu bé đít bé",
            list: ["00", "01", "02", "03", "04", "10", "11", "12", "13", "14", "20", "21", "22", "23", "24", "30", "31", "32", "33", "34", "40", "41", "42", "43", "44"]
        },
        dauToTongTo: {
            name: "Đầu to tổng to",
            list: ["50", "51", "52", "53", "54", "60", "61", "62", "63", "69", "70", "71", "72", "78", "79", "80", "81", "87", "88", "89", "90", "96", "97", "98", "99"]
        },
        dauToTongBe: {
            name: "Đầu to tổng bé",
            list: ["55", "56", "57", "58", "59", "64", "65", "66", "67", "68", "73", "74", "75", "76", "77", "82", "83", "84", "85", "86", "91", "92", "93", "94", "95"]
        },
        dauBeTongTo: {
            name: "Đầu bé tổng to",
            list: ["05", "06", "07", "08", "09", "14", "15", "16", "17", "18", "23", "24", "25", "26", "27", "32", "33", "34", "35", "36", "41", "42", "43", "44", "45"]
        },
        dauBeTongBe: {
            name: "Đầu bé tổng bé",
            list: ["00", "01", "02", "03", "04", "10", "11", "12", "13", "19", "20", "21", "22", "28", "29", "30", "31", "37", "38", "39", "40", "46", "47", "48", "49"]
        }
    },
    he: {
        he01: {
            name: "Hệ 01",
            list: ["01", "06", "10", "15", "51", "56", "60", "65"]
        },
        he02: {
            name: "Hệ 02",
            list: ["02", "07", "20", "25", "52", "57", "70", "75"]
        },
        he03: {
            name: "Hệ 03",
            list: ["03", "08", "30", "35", "53", "58", "80", "85"]
        },
        he04: {
            name: "Hệ 04",
            list: ["04", "09", "40", "45", "54", "59", "90", "95"]
        },
        he05: {
            name: "Hệ 05",
            list: ["00", "05", "50", "55"]
        },
        he11: {
            name: "Hệ 11",
            list: ["11", "16", "61", "66"]
        },
        he12: {
            name: "Hệ 12",
            list: ["12", "17", "21", "26", "62", "67", "71", "76"]
        },
        he13: {
            name: "Hệ 13",
            list: ["13", "18", "31", "36", "63", "68", "81", "86"]
        },
        he22: {
            name: "Hệ 22",
            list: ["22", "27", "72", "77"]
        },
        he23: {
            name: "Hệ 23",
            list: ["23", "28", "32", "37", "73", "78", "82", "87"]
        },
        he24: {
            name: "Hệ 24",
            list: ["24", "29", "42", "47", "74", "79", "92", "97"]
        },
        he33: {
            name: "Hệ 33",
            list: ["33", "38", "83", "88"]
        },
        he34: {
            name: "Hệ 34",
            list: ["34", "39", "43", "48", "84", "89", "93", "98"]
        },
        he41: {
            name: "Hệ 41",
            list: ["14", "19", "41", "46", "64", "69", "91", "96"]
        },
        he44: {
            name: "Hệ 44",
            list: ["44", "49", "94", "99"]
        }
    },
    checkBox: {
        cheo: ["00", "11", "22", "33", "44", "55", "66", "77", "88", "99"],
        ngang: {
            ng00: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"],
            ng01: ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
            ng02: ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
            ng03: ["30", "31", "32", "33", "34", "35", "36", "37", "38", "39"],
            ng04: ["40", "41", "42", "43", "44", "45", "46", "47", "48", "49"],
            ng05: ["50", "51", "52", "53", "54", "55", "56", "57", "58", "59"],
            ng06: ["60", "61", "62", "63", "64", "65", "66", "67", "68", "69"],
            ng07: ["70", "71", "72", "73", "74", "75", "76", "77", "78", "79"],
            ng08: ["80", "81", "82", "83", "84", "85", "86", "87", "88", "89"],
            ng09: ["90", "91", "92", "93", "94", "95", "96", "97", "98", "99"]
        },
        doc: {
            doc00: ["00", "10", "20", "30", "40", "50", "60", "70", "80", "90"],
            doc01: ["01", "11", "21", "31", "41", "51", "61", "71", "81", "91"],
            doc02: ["02", "12", "22", "32", "42", "52", "62", "72", "82", "92"],
            doc03: ["03", "13", "23", "33", "43", "53", "63", "73", "83", "93"],
            doc04: ["04", "14", "24", "34", "44", "54", "64", "74", "84", "94"],
            doc05: ["05", "15", "25", "35", "45", "55", "65", "75", "85", "95"],
            doc06: ["06", "16", "26", "36", "46", "56", "66", "76", "86", "96"],
            doc07: ["07", "17", "27", "37", "47", "57", "67", "77", "87", "97"],
            doc08: ["08", "18", "28", "38", "48", "58", "68", "78", "88", "98"],
            doc09: ["09", "19", "29", "39", "49", "59", "69", "79", "89", "99"]
        }
    }
};

export const settingsContract = Object.freeze({
    BASE_TOKEN_PLATFORM: BASE_TOKEN_PLATFORM,
    ABI_TOKEN: ABI_TOKEN,
    ABI_PRESALE_1: ABI_PRESALE_1,
    ABI_PRESALE_2: ABI_PRESALE_2,
    ABI_PRESALE_3: ABI_PRESALE_3,
    ABI_SALE_1: ABI_SALE_1,
    ABI_SALE_2: ABI_SALE_2,
    ABI_POOL_1: ABI_POOL_1,
    ABI_PANCAKE: ABI_PANCAKE,
    ABI_POOL_GENERATOR: ABI_POOL_GENERATOR,
    ABI_PRESALE_GENERATOR: ABI_PRESALE_GENERATOR,
    ABI_SALE_GENERATOR: ABI_SALE_GENERATOR,
    ABI_PRESALE_SETTING: ABI_PRESALE_SETTING,
    ABI_PRESALE_FACTORY: ABI_PRESALE_FACTORY,
    ABI_MINT_TOKEN_FACTORY: ABI_MINT_TOKEN_FACTORY,
    ABI_MINT_TOKEN_SETTING: ABI_MINT_TOKEN_SETTING,
    ABI_MINT_TOKEN_GENERATOR: ABI_MINT_TOKEN_GENERATOR,
    ABI_AIRDROP_SETTING: ABI_AIRDROP_SETTING,
    ABI_AIRDROP_CONTRACT: ABI_AIRDROP_CONTRACT,
    PRESALE_GENERATOR_ADDRESS: PRESALE_GENERATOR_ADDRESS,
    MINT_TOKEN_GENERATOR_ADDRESS: MINT_TOKEN_GENERATOR_ADDRESS,
    AIRDROP_ADDRESS: AIRDROP_ADDRESS,
    AIRDROP_SETTING: AIRDROP_SETTING,
    ETH_CHAIN_ID: ETH_CHAIN_ID,
    BSC_CHAIN_ID: BSC_CHAIN_ID,
    ABI_LOCK: ABI_LOCK,
    ABI_LOTTERY: ABI_LOTTERY,
    ABI_STAKING: ABI_STAKING,
    LOTTERY_ADDRESS: LOTTERY_ADDRESS,
    LOCK_ADDRESS: LOCK_ADDRESS,
    BASE_TOKEN_NAME: BASE_TOKEN_NAME,
    PANCAKE_ADDRESS: PANCAKE_ADDRESS,
    LD: LD
})