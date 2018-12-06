var BtczValue = 0;
var LtcValue = 0;
var EthValue = 0;
var ZecValue = 0;

var startDate = new Date("2018-01-03T19:00:00Z");

var BtczBalance1 = 0;
var BtcBalance1 = 0;
var LtcBalance1 = 0;
var ZecBalance1 = 0;
var EthBalance1 = 0;


function updatePage(){
    var currentDate = new Date().getTime();
    var hours = Number(Math.round((currentDate-startDate)/3600000));
    var totalDonations = Number(Math.round(BtczBalance1));
    var hourlyAverage = Number(Math.round(totalDonations/hours));


    document.getElementById('statsTxt').innerHTML = "<b>" + totalDonations + " BTCZ</b> raised in <b>" + hours + " hours</b>, average: <b>" + hourlyAverage + " BTCZ/h</b>";

	
	var BtczBalance1_toBtc = (BtczBalance1*BtczValue);
	document.getElementById('btczBalance1').innerHTML = BtczBalance1.toFixed(0) + " BTCZ";
	document.getElementById('btczBalance1_toBtc').innerHTML = "<b>" + BtczBalance1_toBtc.toFixed(6) + " BTC</b>";
	
	document.getElementById('btcBalance1').innerHTML = BtcBalance1.toFixed(6) + " BTC";
    document.getElementById('btcBalance1_toBtc').innerHTML = "<b>" + BtcBalance1.toFixed(6) + " BTC</b>";

    var LtcBalance1_toBtc = (LtcBalance1*LtcValue);	
    document.getElementById('ltcBalance1').innerHTML = LtcBalance1.toFixed(6) + " LTC";
    document.getElementById('ltcBalance1_toBtc').innerHTML = "<b>" + LtcBalance1_toBtc.toFixed(6) + " BTC</b>";

    var EthBalance1_toBtc = (EthBalance1*EthValue);	
    document.getElementById('ethBalance1').innerHTML = EthBalance1.toFixed(6) + " ETH";
    document.getElementById('ethBalance1_toBtc').innerHTML = "<b>" + EthBalance1_toBtc.toFixed(6) + " BTC</b>";			
	
    var ZecBalance1_toBtc = (ZecBalance1*ZecValue);	
    document.getElementById('zecBalance1').innerHTML = ZecBalance1.toFixed(6) + " ZEC";
    document.getElementById('zecBalance1_toBtc').innerHTML = "<b>" + ZecBalance1_toBtc.toFixed(6) + " BTC</b>";	

	var TotalBalance1 = BtczBalance1_toBtc + BtcBalance1 + LtcBalance1_toBtc + EthBalance1_toBtc + ZecBalance1_toBtc;
	document.getElementById('totalBalance1').innerHTML = "<b>" + TotalBalance1.toFixed(6) + " BTC</b>";
	
	document.getElementById('progressBar1').style.width = (TotalBalance1/0.0025).toFixed(2) + "%";
    document.getElementById('progressPercent1').innerHTML = (TotalBalance1/0.0025).toFixed(1) + "%";

}

function getBalances(){
    var xhr1 = new XMLHttpRequest();
    xhr1.open("GET", "https://bitcoinz.ph/api/addr/t1M3fZ2aZ5U8pRdAoKH2rwLH2evnXmz3B3A/balance", true);
    xhr1.onload = function(){
        if(this.status == 200){
            var result = xhr1.responseText;
            BtczBalance1 = Number(result/100000000);
            updatePage();
        }
    }
    xhr1.send();
    var xhr3 = new XMLHttpRequest();
    xhr3.open("GET", "https://api.coinmarketcap.com/v1/ticker/bitcoinz/", true);
    xhr3.onload = function(){
        if(this.status == 200){
            var result = JSON.parse(xhr3.responseText);
            BtczValue = Number(result[0].price_btc);
            updatePage();
        }
    }
    xhr3.send();
    var xhr4 = new XMLHttpRequest();
    xhr4.open("GET", "https://chain.so/api/v2/get_address_balance/BTC/1MgWGe3Mka1tJhF1YF1e8iTy4qonVY7Sxe", true);
    xhr4.onload = function(){
    	if(this.status == 200){
    		var result = JSON.parse(xhr4.responseText);
    		BtcBalance1 = Number(result.data.confirmed_balance);
            updatePage();
		}
	}
	xhr4.send();
	var xhr5 = new XMLHttpRequest();
    xhr5.open("GET", "https://chain.so/api/v2/get_address_balance/LTC/Lc6Bk7Kd5afM2YicqjgBh5rF4cDrQVdCBR", true);
    xhr5.onload = function(){
    	if(this.status == 200){
    		var result = JSON.parse(xhr5.responseText);
    		LtcBalance1 = Number(result.data.confirmed_balance);
            updatePage();
        }
    }
    xhr5.send();
	var xhr6 = new XMLHttpRequest();
    xhr6.open("GET", "https://api.coinmarketcap.com/v1/ticker/litecoin/", true);
    xhr6.onload = function(){
    	if(this.status == 200){
    		var result = JSON.parse(xhr6.responseText);
    		LtcValue = Number(result[0].price_btc);
            updatePage();
        }
    }	
    xhr6.send();
	var xhr7 = new XMLHttpRequest();
    xhr7.open("GET", "https://api.zcha.in/v2/mainnet/accounts/t1Y2kF4KeS5VEM5EGfZcVZQiUQCH4p6EVBy", true);
    xhr7.onload = function(){
    	if(this.status == 200){
    		var result = JSON.parse(xhr7.responseText);
    		ZecBalance1 = Number(result.balance);
            updatePage();
        }
    }
	xhr7.send();
	var xhr8 = new XMLHttpRequest();
    xhr8.open("GET", "https://api.coinmarketcap.com/v1/ticker/zcash/", true);
    xhr8.onload = function(){
    	if(this.status == 200){
    		var result = JSON.parse(xhr8.responseText);
    		ZecValue = Number(result[0].price_btc);
            updatePage();
        }
    }
	xhr8.send();
	var xhr9 = new XMLHttpRequest();
    xhr9.open("GET", "https://api.blockcypher.com/v1/eth/main/addrs/0xCe50915723A2C8Fe81b78148f706e9e3e0eA71FE/balance", true);
    xhr9.onload = function(){
    	if(this.status == 200){
    		var result = JSON.parse(xhr9.responseText);
    		EthBalance1 = Number(result.balance/1000000000000000000);
            updatePage();
        }
    } 
    xhr9.send();
	var xhr10 = new XMLHttpRequest();
    xhr10.open("GET", "https://api.coinmarketcap.com/v1/ticker/ethereum/", true);
    xhr10.onload = function(){
    	if(this.status == 200){
    		var result = JSON.parse(xhr10.responseText);
    		EthValue = Number(result[0].price_btc);
            updatePage();
        }
    }   
	xhr10.send();

}

function start(){
    getBalances();
    setInterval(function(){getBalances();}, 300000);
}