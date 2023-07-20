import React from 'react'

import { read, utils, writeFileXLSX } from 'xlsx';

function ExportExcel({ task }) {

    const exportFile = () => {
        // genrate worksheet using utils 
        const workskeet = utils.json_to_sheet(task);
        // create new workbook
        const workbook = utils.book_new();
        // append worksheets in workbook
        utils.book_append_sheet(workbook, workskeet, "TO-DO List");
        // download workbook
        writeFileXLSX(workbook, "TO-DO List.xlsx");
    }

    return (
        <div style={{display:'flex', alignItems:'center', justifyContent:'flex-end'}}>
            <button style={{margin:'0.5rem 1rem', padding:'0.5rem', border: '1px solid grey',
    borderRadius: '0.5rem',height: '2.6rem', width: '10rem', cursor: 'pointer', background:'#057DF5', fontSize:'1rem'}}onClick={exportFile}>Export To-Do's</button>
        </div>
    )
}

export default ExportExcel
