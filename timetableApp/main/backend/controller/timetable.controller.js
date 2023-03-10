const jsonToExcel = require("../utils/jsonToExcel")
const TimetableExcelClass = require('../service/timetableExcel.service');
const TimetableExcelClassInstance = new TimetableExcelClass();
const mime = require('mime');

const getGenerateTimetableInExcelFormat = async (req, res) => {
    try {
        const { rowspan } = req.query;
        const data = await TimetableExcelClassInstance.getAll();
        const workBook = jsonToExcel(data, parseInt(rowspan));
        res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        res.setHeader("Content-Disposition", "attachment; filename=" + "users.xslx");
        workBook.xlsx.writeFile("./users.xlsx").then(() => {
            console.log('file is written');
            res.sendFile('C://Users/Sanchit/Desktop/Timetable/backend/users.xlsx', (err) => {
                console.log(err);
                console.log('error downloading');
            })
        })
        // res.download('./users.xlsx');
        // clearTimeout(id);
        // res.end();
        // const fileName = 'users.xlsl';
        // const mimeType = mime.getType('../users.xlsl');
        // res.setHeader("Content-Disposition", "attachment;file=" + fileName);
        // res.setHeader("Content-Type", mimeType)
    } catch (error) {
        console.log(error)
        res.status(500).end();
    }
}

const postGenerateTimetableInExcelFormat = async (req, res) => {
    try {
        const { data } = req.body;
        await TimetableExcelClassInstance.postNew(data);
        res.end();
    } catch (error) {

    }
}



module.exports = { getGenerateTimetableInExcelFormat, postGenerateTimetableInExcelFormat }