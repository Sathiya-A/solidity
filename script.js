
    web3.eth.defaultAccount = web3.eth.accounts[0];
        var sybexcon = web3.eth.contract([
      {
        "constant": true,
        "inputs": [
          {
            "name": "pid",
            "type": "uint256"
          }
        ],
        "name": "returndetails",
        "outputs": [
          {
            "name": "",
            "type": "bytes32"
          },
          {
            "name": "",
            "type": "uint256"
          },
          {
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
        "name": "totalproducts",
        "outputs": [
          {
            "name": "",
            "type": "bytes32[]"
          },
          {
            "name": "",
            "type": "uint256[]"
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
        "name": "symbol",
        "outputs": [
          {
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
            "name": "pid",
            "type": "uint256"
          }
        ],
        "name": "search",
        "outputs": [
          {
            "name": "",
            "type": "bool"
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
            "name": "_add_",
            "type": "address"
          }
        ],
        "name": "balanceOf",
        "outputs": [
          {
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
        "name": "name",
        "outputs": [
          {
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
        "inputs": [
          {
            "name": "cid",
            "type": "uint256"
          },
          {
            "name": "_name",
            "type": "string"
          }
        ],
        "name": "addcustomer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [],
        "name": "transferether",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "pid",
            "type": "uint256"
          },
          {
            "name": "_prtname",
            "type": "bytes32"
          },
          {
            "name": "_count",
            "type": "uint256"
          },
          {
            "name": "_price",
            "type": "uint256"
          }
        ],
        "name": "addproducts",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "customer",
            "type": "address"
          },
          {
            "name": "_amo_",
            "type": "uint256"
          }
        ],
        "name": "transfer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "cid",
            "type": "uint256"
          },
          {
            "name": "pid",
            "type": "uint256"
          },
          {
            "name": "number",
            "type": "uint256"
          },
          {
            "name": "sttime",
            "type": "uint256"
          }
        ],
        "name": "getproducts",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "cid",
            "type": "uint256"
          },
          {
            "name": "pid",
            "type": "uint256"
          },
          {
            "name": "etime",
            "type": "uint256"
          },
          {
            "name": "customer",
            "type": "address"
          }
        ],
        "name": "retproducts",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ]);
   var sybex = sybexcon.at('0xd2ccbc83cee67365969cb774b34e26bc89e43c69');
         if(!web3.isConnected()) {
  
        console.log("Ok");
        
      } else {
        console.log("no");
      }
      web3.version.getNetwork((err, netId) => {
            switch (netId) {
              case "1":
                console.log('This is mainnet')
                break
              case "2":
                console.log('This is the deprecated Morden test network.')
                break
              case "3":
                console.log('This is the ropsten test network.')
                break
              case "4":
                console.log('This is the Rinkeby test network.')
                break
              case "42":
                console.log('This is the Kovan test network.')
                break
              default:
                console.log('This is an unknown network.')
            }
        })
     function list()
       {
         sybex.totalproducts(function(error,result){
                if(!error){
			alert(result); 
                        }
                else{
                     alert(error);
                   }
             });
           
             }
        
     function addingproducts()
        {
       var a=document.getElementById("value1").value;
       var b=document.getElementById("value2").value;
       var c=document.getElementById("value3").value;
       var d=document.getElementById("value4").value;
       sybex.addproducts(a,b,c,d,function(error,result){
                if(!error){
			alert(result); 
                        }
                else{
                     alert(error);
                   }
             });
           
             }
   function ret()
    {
       var e=document.getElementById("value5").value;
       sybex.returndetails(e,function(error,result){
                if(!error){
			alert(result); 
                        }
                else{
                     alert(error);
                   }
             });
           
             }
   function getproducts()
    {
      var f=document.getElementById("value6").value;
      var g=document.getElementById("value7").value;
       sybex.getproducts(f,g,function(error,result){
                if(!error){
			alert(result); 
                        }
                else{
                     alert(error);
                   }
             });
           
             }
  function balance(){
      var h=document.getElementById("value10").value;
      sybex.balanceOf(h,function(error,result){
                if(!error){
			alert(result); 
                        }
                else{
                     alert(error);
                   }
             });
           
             }
 function search(){
      var i=document.getElementById("value8").value;
       sybex.search(i,function(error,result){
                if(!error){
			alert(result); 
                        }
                else{
                     alert(error);
                   }
             });
           
             }

   
