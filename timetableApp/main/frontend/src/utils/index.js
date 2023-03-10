import { patchSubject } from "./apiCalls";

export const searchSubjectByQuery = (value, subjects, setViewableData) => {
    console.log(value, subjects, setViewableData)
    if (value.length) {
        const filtered = subjects.filter((item) => {
            const { courseCode, courseTitle, class: className, semesterLevel } = item;
            const regex = new RegExp(value, 'gi');
            if (courseCode && courseCode.match(regex)) {
                return item;
            }
            else if (className && className.match(regex)) {
                return item;
            }
            else if (courseTitle && courseTitle.match(regex)) {
                return item;
            }
            else if (semesterLevel && semesterLevel.match(regex)) {
                return item;
            }
        })
        setViewableData([...filtered]);
    }
    else {
        setViewableData(subjects);
    }
}


export function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

/**
 * @function saveChangesToSubjects
 * @param {Object} details details containing all subject fields
 * @param {Array[{}]} viewableData viewableData
 * @param {Setter} setViewableData 
 * @param {Function} closeModal 
 * @param {HTMLEvent} event
 */

export function saveChangesToSubjects(details, viewableData, setViewableData, closeModal, event) {
    const { _id, courseTitle, courseCode, classSchedulePerWeek, className, semesterLevel, branch, status, taughtBy } = details;
    if (courseTitle.length && courseCode.length && classSchedulePerWeek.length && className.length && semesterLevel.length && branch.length) {
        for (let i = 0; i < viewableData.length; i++) {
            if (viewableData[i]._id === _id) {
                viewableData[i] = details;
                viewableData[i].class = details.className;
            }
        }
    }
    setViewableData([...viewableData])
    patchSubject(details);
    closeModal(event);

}


export function generateInputForTimetable(obj) {
    const result = [];
    if (obj.bca1) result.push(['bca', 'I'])
    if (obj.bca2) result.push(['bca', 'II'])
    if (obj.bca3) result.push(['bca', 'III'])
    if (obj.bca4) result.push(['bca', 'IV'])
    if (obj.bca5) result.push(['bca', 'V'])
    if (obj.bca6) result.push(['bca', 'VI'])
    if (obj.mca1) result.push(['mca', 'I'])
    if (obj.mca2) result.push(['mca', 'II'])
    if (obj.mca3) result.push(['mca', 'III'])
    if (obj.mca4) result.push(['mca', 'IV'])
    if (obj.bba1) result.push(['bba', 'I'])
    if (obj.bba2) result.push(['bba', 'II'])
    if (obj.bba3) result.push(['bba', 'III'])
    if (obj.bba4) result.push(['bba', 'IV'])
    if (obj.bba5) result.push(['bba', 'V'])
    if (obj.bba6) result.push(['bba', 'VI'])
    if (obj.mba1) result.push(['mba', 'I'])
    if (obj.mba2) result.push(['mba', 'II'])
    if (obj.mba3) result.push(['mba', 'III'])
    if (obj.mba4) result.push(['mba', 'IV'])
    if (obj.mba5) result.push(['mba', 'V'])
    if (obj.mba6) result.push(['mba', 'VI'])
    return result;
}