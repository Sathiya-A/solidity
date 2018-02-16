pragma solidity ^0.4.0;
contract a{
    //uint256 _isbn;
    address owner;
    uint256 total=0;
    function a()
    {
       owner= msg.sender;
    }
     modifier onlyowner(){
         if(msg.sender!=owner)
         {
             revert();
             
         }
         _;
     }
    
    struct lib  {
        string bname;
        string aname;
        uint256 availability;
    }
    mapping(uint256=>lib)u;
    function books(uint256 _isbn,string _bname,string _aname) public onlyowner
    {
      u[_isbn].bname=_bname;
      u[_isbn].aname=_aname;
      u[_isbn].availability=u[_isbn].availability+1;
      total=total+1;
     }
      function ret(uint256 _isbn) public onlyowner view returns(string ,string,uint256)
      {
          return(u[_isbn].bname,u[_isbn].aname,u[_isbn].availability);
      }
      function tot() public onlyowner view returns(uint256)
      {
          return(total);
      }
      
}
