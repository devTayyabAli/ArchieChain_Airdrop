import React, { useEffect, useState } from 'react'
import { loadWeb3 } from '../apis/api';
import logo from '../Assests/ARC.png'

import "./Header.css"

function Header() {
  const [BtTxt, setBtTxt] = useState("Connect")

  const getaccount = async () => {
    let acc = await loadWeb3();
    if (acc == "No Wallet") {
      // toast.error('please install metamask')
      setBtTxt("please install metamask")

    }
    else if (acc == "Wrong Network") {
      // toast.error('Wrong Network')
      setBtTxt("Wrong Network")
    } else {

      let myAcc = acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);

      setBtTxt(myAcc);


    }
  }


  useEffect(() => {
    getaccount()
  })


  return (
    <div className='Header_main'>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center  ">
          <div className="logo">
            <img src={logo} style={{ width: '100px' }} alt="" />
          </div>
          <div className="logo">
            <button className='Header_btn'>{BtTxt}</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header