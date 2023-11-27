import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { loadWeb3 } from '../apis/api';
import { airdrop, airdrop_ABI, token_adress, token_abi } from '../utilies/Contract';
import './GetData_style.css'
import * as XLSX from 'xlsx';


export default function Get_Data() {
    const [tokenValue, settokenValue] = useState("")
    const [addressesValue, setaddressesValue] = useState([])
    const [AmountsValue, setAmountsValue] = useState([])
    const [excelFile, setexcelFile] = useState(null)
    const [excelFileError, setexcelFileError] = useState(null)
    const [exclData, setexclData] = useState(null)
    const [loader, setloader] = useState(false)
    const [loaderForApprove, setloaderForApprove] = useState(false)

    const [totalApprovedAmount, setTotalApprovedAmount] = useState(0)



    console.log(excelFile);
    const fileType = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
    const fileType2 = ['text/csv/xlsx']
    const handlefile = async (e) => {

        let selectFile = e.target.files[0]
        // console.log("Type", selectFile.type);
        if (selectFile) {
            if (selectFile && fileType.includes(selectFile.type)) {
                let reader = new FileReader()
                reader.readAsArrayBuffer(selectFile)
                reader.onload = (e) => {
                    setexcelFileError(null)
                    setexcelFile(e.target.result)
                }


            } else {
                setexcelFileError("Please Select Only Excel File")
                setexcelFile(null)

            }


        } else {

        }
    }

    const handleSubmit = async () => {

        if (excelFile != null) {
            const workbook = XLSX.read(excelFile, { type: 'buffer' })
            const workSheetName = workbook.SheetNames[0];
            const workSheet = workbook.Sheets[workSheetName]
            const data = XLSX.utils.sheet_to_json(workSheet)
            console.log("DATA", data);
            let AddresArray = []
            let AmountArray = []
            const web3 = window.web3;
            let sum = 0;
            data.forEach(items => {
                let num = items.Amounts;
                sum = sum + num;
                let amounts=(items.Amounts).toLocaleString('fullwide', {useGrouping:false});
                let amounts1=parseInt(amounts)
                let amounts2=(amounts1).toLocaleString('fullwide', {useGrouping:false});

                // let AddressData = web3.utils.toWei((num).toString())

                
                AddresArray = [...AddresArray, items.Address]
                AmountArray = [...AmountArray, amounts2]

            });
            // alert(sum)
            // sum = web3.utils.toWei((sum).toString())
            // alert(sum)
            
            setTotalApprovedAmount(sum)
            setaddressesValue(AddresArray)
            setAmountsValue(AmountArray)
            setexclData(data)
        } else {
            setexclData(null)
            setaddressesValue([])
            setAmountsValue([])
        }

    }


    const Submit_data = async () => {

        let acc = await loadWeb3();
        if (acc == "No Wallet") {

        }
        else if (acc == "Wrong Network") {

        } else {

            try {
                setloader(true)
                // console.log("pathArray", addressesValue, AmountsValue);

                // let pathArray = addressesValue.split(',');
                // let Number_Array = AmountsValue.split(',')
                if (addressesValue.length == AmountsValue.length) {

                    const web3 = window.web3;
                    let contractOf = new web3.eth.Contract(airdrop_ABI, airdrop);
                    let ownerAdress = await contractOf.methods.owner().call()
                   console.log(typeof(AmountsValue),"type");
                    if (ownerAdress == acc) {
                        await contractOf.methods.multisendToken(tokenValue, addressesValue, AmountsValue).send({
                            from: acc
                        });
                        toast.success('Transition Confirm')
                        setloader(false)
                    }
                    else {
                        toast.error("Owner account does not match")
                        setloader(false)
                    }



                } else {
                    toast.error("Array length is not match")
                    setloader(false)


                }

            } catch (e) {
                console.log("Error While data", e);
                setloader(false)

            }
        }
    }


    const multisendTokenwithApprove = async () => {
        alert(typeof (totalApprovedAmount))

        let acc = await loadWeb3();
        if (acc == "No Wallet") {

        }
        else if (acc == "Wrong Network") {

        } else {

            try {
                setloaderForApprove(true)
                // console.log("pathArray", addressesValue, AmountsValue);

                // let pathArray = addressesValue.split(',');
                // let Number_Array = AmountsValue.split(',')

                if (addressesValue.length == AmountsValue.length) {

                    const web3 = window.web3;
                    let tokenOf = new web3.eth.Contract(token_abi, token_adress);
                    await tokenOf.methods.approve(airdrop, totalApprovedAmount).send({
                        from: acc
                    });
                    let contractOf = new web3.eth.Contract(airdrop_ABI, airdrop);
                    await contractOf.methods.multisendTokenwithApprove(token_adress, addressesValue, AmountsValue).send({
                        from: acc
                    });
                    toast.success('Transition Confirm')
                    setloaderForApprove(false)


                } else {
                    toast.error("Array length is not match")
                    setloaderForApprove(false)


                }

            } catch (e) {
                console.log("Error While data", e);
                setloaderForApprove(false)

            }
        }
    }

    return (
        <div>



            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-2">

                    </div>

                    <div className="col-lg-8">

                        <div className="card claim_card">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Upload File</label>
                                <input type="file" class="form-control" onChange={handlefile} />
                                <label htmlFor="" className='text-danger mt-1'>{excelFileError}</label>
                            </div>

                            <div class="col-auto">
                                <button className='claim_btn' onClick={() => handleSubmit()} >Upload File</button>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-2">

                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-2">

                    </div>

                    <div className="col-lg-8">

                        <div className="card claim_card">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Token address</label>
                                <input type="text" class="form-control" placeholder="Token address" onChange={(e) => settokenValue(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Addresses</label>
                                <input type="text" class="form-control" value={addressesValue} placeholder="Addresses Arrays" onChange={(e) => setaddressesValue(e.target.value)} />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Amounts</label>
                                <input type="text" class="form-control" value={AmountsValue} placeholder="Amounts Arrays" onChange={(e) => setAmountsValue(e.target.value)} />
                            </div>
                            <div class="col-auto">
                                <button className='claim_btn' onClick={() => Submit_data()}>
                                    {
                                        loader ? <>
                                            <div class="spinner-border" role="status">
                                                <span class="visually-hidden">Loading...</span>
                                            </div>
                                        </>
                                            : "Send"

                                    }
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-2">

                    </div>
                </div>
            </div>






        </div>
    )
}
