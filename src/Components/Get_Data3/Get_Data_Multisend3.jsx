import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { loadWeb3 } from '../apis/api';
import { airdrop, airdrop_ABI, token_adress, token_abi } from '../utilies/Contract';
import './GetData_style3.css'
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
    const fileType2 = ['text/csv']
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
                let Amount= items.Amounts/1000000000000000000
                let AmountforFuction= items.Amounts

                // console.log("items",Amount);
                let num = Amount;
                sum = (sum) + (num);
                let amounts=(AmountforFuction).toLocaleString('fullwide', {useGrouping:false});
                let amounts1=parseInt(amounts)
                let amounts2=(amounts1).toLocaleString('fullwide', {useGrouping:false});
                // amounts2= web3.utils.toWei(amounts2.toString())



                AddresArray = [...AddresArray, items.Address]
                AmountArray = [...AmountArray, amounts2]

            });
            // // alert(sum)
            // console.log(sum,"totalbnb");

            // sum = web3.utils.fromWei((sum).toString())
            // // alert(sum)
            setTotalApprovedAmount(sum)
            console.log("pathArray", AddresArray, AmountArray);

            
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

                // let pathArray = addressesValue.split(',');
                // let Number_Array = AmountsValue.split(',')
                if (addressesValue.length == AmountsValue.length) {
                    console.log(totalApprovedAmount,"totalbnb");
                    

             

                    const web3 = window.web3;
                    let contractOf = new web3.eth.Contract(airdrop_ABI, airdrop);
                    let ownerAdress = await contractOf.methods.owner().call()
                    if (ownerAdress == acc) {
                        await contractOf.methods.sendMultiARC(addressesValue, AmountsValue).send({
                            from: acc,
                            value: web3.utils.toWei(totalApprovedAmount.toString())
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
                                {/* <label for="exampleFormControlInput1" class="form-label">Token address</label> */}
                                {/* <input type="text" class="form-control" placeholder="Token address" onChange={(e) => settokenValue(e.target.value)} /> */}
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


// ["0xe9a6e9c3fbcbaaf419d6b085a33afc09ea4cdb04","0x000000000000000000000000000000000000dead","0xaa3d85ad9d128dfecb55424085754f6dfa643eb1","0xcbb4390483306e2b5394c820ba3d139338fe53d3","0x0d9b1e53cbb251572d982d9f96520e8d40d22bb0","0xb3829af1ad774e9fbe212bd697fcebf2fd5e1983","0x5d01277d6465ed48311dfa6c57cb2c464116b93d","0x2fa95a3331f8b71608549ca84855575eb5ccabc3","0xf3997b8bc7655d40de06131d10c4af659112e8b3","0x3dcbb93469d7a4e339a511897a40c9a637c45b2c","0x6be8adddfaaf0064bd28bb29fa0ebd4b94bf1dc9","0x459e0e3031a9502eb8fd22cb64fd7918f6b53a73","0x9d6a36580d485d492d3afde6be6ab8a3331e0b9c","0x5d9d78c9316731dcf61860f10a21bdfd1371567d,"0x6d6f1bed36b423d39ead7f8e4295fea2bb0aaf18"]
// ["100000000000000000000","100000000000000000000","100000000000000000000","100000000000000000000","100000000000000000000","100000000000000000000","100000000000000000000","100000000000000000000","100000000000000000000","100000000000000000000","100000000000000000000","100000000000000000000","100000000000000000000,100000000000000000000,100000000000000000000"]