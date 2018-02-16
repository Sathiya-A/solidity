pragma solidity ^0.4.0;
import "./library.sol";


contract student is a
{
    address public owner;
    uint256 fineamount;
    uint256 starttime;
    uint256 endtime;
    uint256 _rollno;
    uint256 fine1;
    uint256 stubooks=0;
    
    struct stu{
        string name;
        string dept;
        uint256 stubooks;
    }
    mapping(uint256=>stu)h;
    function addstudents(uint256 _rollno,string _name,string _dept) 
    {
        h[_rollno].name=_name;
        h[_rollno].dept=_dept;
    }
    function showstudents(uint256 _rollno) public view returns(string,string,uint256)
    {
        return( h[_rollno].name, h[_rollno].dept,h[_rollno].stubooks);
    }
    function search(uint256 _isbn) public onlyowner view returns(bool)
      {
          if(u[_isbn].availability >0)
          {
          return true;
          }
          else{
              return false;
          }
          
      }
      function getbooks(uint256 _rollno,uint256 _isbn)public onlyowner{
          require(u[_isbn].availability>0);
              starttime=now;
              endtime=now+1* 1 minutes;
              //endtime=now+(5*86400);
              u[_isbn].availability=u[_isbn].availability-1;
              h[_rollno].stubooks=h[_rollno].stubooks+1;
               total=total-1;
          }
      
      function returnbooks(uint256 _rollno,uint256 _isbn) public returns(uint256) 
      {
          uint256 fine=1;
        
          if(now>endtime)
          {
              //uint256 diff=(now-endtime)/(60*60*24);
              uint256 diff=(now-endtime)/60;
              fine1=diff*fine;
              
            }
         u[_isbn].availability=u[_isbn].availability+1;
         h[_rollno].stubooks=h[_rollno].stubooks-1;
          total=total+1;
         
         return fine1;
          
        }
        function returnfines() public view returns(uint256)
        {
            return fine1;
        }
}
   

