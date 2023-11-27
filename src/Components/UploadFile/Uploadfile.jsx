import React, { useState } from 'react'
import * as XLSX from 'xlsx';

export default function Uploadfile() {
    const [excelFile, setexcelFile] = useState(null)
    const [excelFileError, setexcelFileError] = useState(null)
    const [exclData, setexclData] = useState(null)


    console.log(excelFile);
    const fileType = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
    const handlefile = async (e) => {

        let selectFile = e.target.files[0]
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
            setexclData(data)

        } else {
            setexclData(null)
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
                                <label htmlFor="">{excelFileError}</label>
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
        </div>
    )
}
