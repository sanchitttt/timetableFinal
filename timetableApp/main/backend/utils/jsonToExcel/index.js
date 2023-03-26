const ExcelJs = require("exceljs");

function jsonToExcel(data, rowSpanLength) {
    const workBook = new ExcelJs.Workbook();
    const workSheet = workBook.addWorksheet("Timetable");
    const rowSpan = rowSpanLength;

    

    workSheet.columns = [
        { header: "Day", key: "Day", width: "35" },
        { header: "Branch", key: "Branch", width: "35" },
        { header: "1st Period", key: "Period1", width: "35" },
        { header: "2nd Period", key: "Period2", width: "35" },
        { header: "3rd Period", key: "Period3", width: "35" },
        { header: "4th Period", key: "Period4", width: "35" },
        { header: "5th Period", key: "Period5", width: "35" },
        { header: "6th Period", key: "Period6", width: "35" },
        { header: "7th Period", key: "Period7", width: "35" },
        { header: "8th Period", key: "Period8", width: "35" },
    ];

    data = JSON.parse(JSON.stringify(data));
    data.forEach((item, idx) => {
        workSheet.addRow({ id: idx + 1, ...item })
    })

    let startingIndex = 2;
    for (let i = 0; i < 5; i++) {
        let endingIndex = startingIndex + rowSpan - 1;
        workSheet.mergeCells(`A${startingIndex}:A${endingIndex}`);
        startingIndex = endingIndex + 1;
    }


    return workBook;
}


module.exports = jsonToExcel;