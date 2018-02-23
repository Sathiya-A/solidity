pragma solidity ^0.4.0;
import "./SafeMath.sol";
//import "./inventory.sol";
contract Token 
{ address owner;
  
	string public name;
	string public symbol;
	uint256  _totalSupply_;
	mapping(address => uint256) _balance_;
	function Token() public
	{
    	owner = msg.sender;
    	name = "AAA";
    	symbol ="$";
    	//TokenDecimal = 18;
    	_totalSupply_ = 5000;
    	_balance_[owner] =_totalSupply_;
    }
     modifier onlyowner() {
        if (msg.sender != owner) {
            revert();
        }
        _;
    }

   
 
	/*function Deposit(uint256 _amo_) public
	{
    	if(_totalSupply_ > _amo_ && (_balance_[Owner] + _amo_) <= _totalSupply_ && _amo_ > 0){
    	_balance_[Owner] = SafeMath.add(_balance_[Owner],_amo_);
    	}
	}*/
 	function totalSupply() public view returns (uint256)
 	{
     	return _totalSupply_ = _balance_[owner];
 	}
	 
 	function balanceOf(address _add_) public view returns (uint256)
 	{
    	 
     	return _balance_[_add_];
 	}
	 
	function transfer(address to, uint256 _amo_) public 
	{
    	if(_amo_ > 0 &&_amo_ < _balance_[owner]){
    	_balance_[to] = SafeMath.add(_balance_[owner],_amo_);
    	_balance_[msg.sender] = SafeMath.sub(_balance_[msg.sender],_amo_);
    }
	}
    
}


