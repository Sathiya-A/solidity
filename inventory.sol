pragma solidity ^0.4.0;
import "./Token.sol";
contract product is Token{
    uint256 pid;
    uint256 cid;
    struct prt{
        bytes32 prtname;
        uint256 count;
        uint256 price;
        }
    struct cust{
        string name;
        uint256 ccount;
        uint256 pid;
    }
    struct time{
        uint256 starttime;
        uint256 endtime;
    }
    mapping(uint256=>mapping(uint256=>time))time1;
    mapping(uint256=>prt) p;
    mapping(uint256=>cust)c;
    bytes32[] products;
    uint256[] ids;
    uint256[] x;
    function addproducts(uint256 pid,bytes32 _prtname,uint256 _count,uint256 _price)public onlyowner
    {
        p[pid].prtname=_prtname;
        p[pid].count=_count;
        p[pid].price=_price;
        products.push(p[pid].prtname);
        ids.push(pid);
      
    }
    function addcustomer(uint256 cid,string  _name) public onlyowner
    {
     c[cid].name=_name;
     }
    function returndetails(uint256 pid) public view returns(bytes32,uint256,uint256)
    {
        return( p[pid].prtname,p[pid].count,p[pid].price);
    }
    
    function search(uint256 pid) public view returns(bool)
    {
        if( p[pid].count>0)
        {
            return(true);
        }
        else
        {
            return(false);
        }
    }
    function totalproducts()public view returns(bytes32[] memory,uint256[])
    {
        return (products,ids);
        
    }
   function getproducts(uint256 cid,uint256 pid,uint256 number,uint256 sttime)
   {
       require(p[pid].count>0);
       
             time1[cid][pid].starttime=sttime;
            p[pid].count=p[pid].count-1;
            if(p[pid].count<=5)
            {
                x.push(pid);
            }
            
            c[cid].ccount=c[cid].ccount+1;
            c[cid].pid=pid;
            transfer(owner,(p[pid].price*number));
            
    }
    function a() public view returns(uint256[])
    {
        return x;
    }
    function retproducts(uint256 cid,uint256 pid,uint256 etime,address customer)
    {
        time1[cid][pid].endtime=etime;
        uint256 r=time1[cid][pid].endtime-time1[cid][pid].starttime;
        uint256 rt=r/(60*60*24);
        require(rt<=7);
        transfer(msg.sender,(p[pid].price));
        
        
    }
    uint256 tprice=1 ether;
    function transferether() public payable{
        uint256 tokens=msg.value/tprice;
        require((msg.value==(tprice*tokens)&&tokens<=_balance_[owner]));
        _balance_[msg.sender]=_balance_[msg.sender]+tokens;
        _balance_[owner]=_balance_[owner]-tokens;
        transfer(owner,msg.value);
        if(_balance_[owner]==0)
        {
            selfdestruct(owner);
        }
        
    }
    
}

    
    
    







