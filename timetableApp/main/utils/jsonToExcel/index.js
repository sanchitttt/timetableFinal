const ExcelJs = require("exceljs");
const sampleData = require('./sampleData.json');

function jsonToExcel(data, rowSpanLength) {
    const workBook = new ExcelJs.Workbook();
    const workSheet = workBook.addWorksheet("Timetable");
    const rowSpan = rowSpanLength;

    workSheet.columns = [
        { header: "Day", key: "Day", width: "13" },
        { header: "Branch", key: "Branch", width: "13" },
        { header: "1st Period", key: "Period1", width: "13" },
        { header: "2nd Period", key: "Period2", width: "13" },
        { header: "3rd Period", key: "Period3", width: "13" },
        { header: "4th Period", key: "Period4", width: "13" },
        { header: "5th Period", key: "Period5", width: "13" },
        { header: "6th Period", key: "Period6", width: "13" },
        { header: "7th Period", key: "Period7", width: "13" },
        { header: "8th Period", key: "Period8", width: "13" },
    ];


    data.forEach((item, idx) => {
        workSheet.addRow({ id: idx + 1, ...item })

    })

    let startingIndex = 2;
    for (let i = 0; i < 5; i++) {
        let endingIndex = startingIndex + rowSpan - 1;
        workSheet.mergeCells(`A${startingIndex}:A${endingIndex}`);
        startingIndex = endingIndex + 1;
    }

    return workBook.xlsx.writeFile("./users.xlsx");
}

jsonToExcel(sampleData,5);

module.exports = jsonToExcel;