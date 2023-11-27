// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IARC20 {
    function transfer(address to, uint256 value) external returns (bool);

    function approve(address spender, uint256 value) external returns (bool);

    function transferFrom(address from, address to, uint256 value) external returns (bool);

    function totalSupply() external view returns (uint256);

    function balanceOf(address who) external view returns (uint256);

    function allowance(address owner, address spender) external view returns (uint256);

    event Transfer(address indexed from, address indexed to, uint256 value);

    event Approval(address indexed owner, address indexed spender, uint256 value);
}

/**
 * @dev Contract module which provides a basic access control mechanism, where
 * there is an account (an owner) that can be granted exclusive access to
 * specific functions.
 *
 * By default, the owner account will be the one that deploys the contract. This
 * can later be changed with {transferOwnership}.
 *
 * This module is used through inheritance. It will make available the modifier
 * `onlyOwner`, which can be applied to your functions to restrict their use to
 * the owner.
 */
 contract Ownable  {
    address private _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * @dev Initializes the contract setting the deployer as the initial owner.
     */
    constructor() {
        _transferOwnership(msg.sender);
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        _checkOwner();
        _;
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view virtual returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if the sender is not the owner.
     */
    function _checkOwner() internal view virtual {
        require(owner() == msg.sender, "Ownable: caller is not the owner");
    }

    /**
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions anymore. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby removing any functionality that is only available to the owner.
     */
    function renounceOwnership() public virtual onlyOwner {
        _transferOwnership(address(0));
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        _transferOwnership(newOwner);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Internal function without access restriction.
     */
    function _transferOwnership(address newOwner) internal virtual {
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}


contract airdrop is Ownable{

    event Multisended(uint256 total, address tokenAddress);


   function multisendToken(IARC20 _token, address[] memory _contributors, uint256[] memory _balances) public onlyOwner   
        {   
            require(_contributors.length==_balances.length,"the arrays length are not same!");
            IARC20 tokentoSend=IARC20(_token);
           uint256  totalVal=AirdropAmount(_balances);
            require(tokentoSend.balanceOf(address(this))>=totalVal,"Contract is Ran Out of funds!");

            for (uint256 i=0; i < _contributors.length; i++) {
            tokentoSend.transfer(_contributors[i], _balances[i]);
            }
        }

        
    function sendMultiARC(address payable[]  memory  _contributors, uint256[] memory _balances) public  payable  
    {
        uint256 total = msg.value;
        uint256 i = 0;
        for (i; i < _contributors.length; i++) {
            require(total >= _balances[i],"Invalid Amount");
            total = total - _balances[i];
            _contributors[i].transfer(_balances[i]);
        }
        emit Multisended(  msg.value , msg.sender);
    }

          function multisendTokenwithApprove(IARC20 _token, address[] memory _contributors, uint256[] memory _balances) public   
        {   
            require(_contributors.length==_balances.length,"the arrays length are not same!");
            IARC20 tokentoSend=IARC20(_token);
           uint256  totalVal=AirdropAmount(_balances);
            require(tokentoSend.allowance(msg.sender,address(this))>=totalVal,"Contract is not approved!");
            
            for (uint256 i=0; i < _contributors.length; i++) {
            tokentoSend.transferFrom(msg.sender,_contributors[i], _balances[i]);
            }
        }

        function AirdropAmount(uint256[] memory _amounts) public  view returns(uint256){
          
            uint256 totalAirdrop;
           for ( uint256 i=0; i < _amounts.length; i++){
               totalAirdrop+=_amounts[i];
           }
           return totalAirdrop;
        
        }

           function multisendTokenSigle(IARC20 _token, address[] memory _contributors, uint256 _balances) public onlyOwner  
        {   
            
            IARC20 tokentoSend=IARC20(_token);
            require(tokentoSend.balanceOf(address(this))>=_balances,"Contract is Ran Out of funds!");
            for (uint256 i=0; i < _contributors.length; i++) {
            tokentoSend.transfer(_contributors[i], _balances);
            }
        }
		
    
  function emergencyWithdraw(IARC20 _token,uint256 _tokenAmount) public onlyOwner {
         IARC20(_token).transfer(msg.sender, _tokenAmount);
    }
    function emergencyWithdrawARC(uint256 Amount) public onlyOwner {
        payable(msg.sender).transfer(Amount);
    }

}