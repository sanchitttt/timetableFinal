import json
import os
import re

validKeywords = {
    'Course code',
    'Course title',
    'Credits',
    'Class schedule per week',
    'Class',
    'Semester / Level',
    'Semester/Level',
    'Semester /Level',
    'Semester/ Level',
    'Level',
    'Branch',
    'Course Code',
    'Course Title'
}

totalFileLength = 0
rewrittenFileLength = 0


print('Enter the file name you want the data of which to be extracted (ex file1.txt)')
filePath = input().strip()
print('Enter the output\'s file name (ex output.json)')
jsonPath = input().strip()
retwrittenPath = f"{'rewritten.txt'}"


mcaFile = open(f"{filePath}", 'r', encoding='utf-8')
totalFileLength = len(mcaFile.readlines())
mcaFile.close()


mcaFile = open(f"{filePath}", 'r', encoding='utf-8')
mcaFile2 = open(retwrittenPath, 'w', encoding='utf-8')

prevResult = 0

for i in range(0, totalFileLength):
    line = mcaFile.readline().strip()
    for word in validKeywords:
        result = line.find(word)
        if result != -1:
            mcaFile2.write(line + '\n')
            break


mcaFile.close()
mcaFile2.close()


mcaFile3 = open(retwrittenPath, 'r', encoding='utf-8')
rewrittenFileLength = len(mcaFile3.readlines())
mcaFile3.close()

mcaFile3 = open(retwrittenPath, 'r', encoding='utf-8')
finalResultJson = open(jsonPath, 'w', encoding='utf-8')

resultArr = []
temp = []

for i in range(0, rewrittenFileLength):
    line = mcaFile3.readline().strip().rstrip('\n')
    if (re.search(r'\bCourse code\b', line) != None or re.search(r'\bCourse Code\b', line) != None):
        if len(temp) > 0:
            resultArr.append(temp)
        temp = [line]
    else:
        if i == rewrittenFileLength-1 and len(temp) > 0 :
            resultArr.append(temp)
        temp.append(line)

newArr = []

for ele in resultArr:
    obj = dict()
    for item in ele:
        arr = item.split(':')
        key = arr[0].strip()
        if key == 'Course code' or key == 'Course title' or key == 'Credits' or key == 'Class' or key == 'Class schedule per week' or key == 'Semester / Level' or key == 'Level' or key == 'Semester/Level' or key == 'Semester/ Level' or key == 'Semester /Level' or key == 'Branch' or key == 'Course Code' or key == 'Course Title':
            val = arr[1].strip()
            if key == 'Course code':
                obj['courseCode'] = val
            elif key == 'Course Code':
                obj['courseCode'] = val
            elif key == 'Course Title':
                obj['courseTitle'] = val
            elif key == 'Course title':
                obj['courseTitle'] = val
            elif key == 'Credits':
                obj['credits'] = val
            elif key == 'Class':
                obj['class'] = val
            elif key == 'Class schedule per week':
                obj['classSchedulePerWeek'] = val
            elif key == 'Semester / Level':
                obj['semesterLevel'] = val
            elif key == 'Semester/ Level':
                obj['semesterLevel'] = val
            elif key == 'Semester /Level':
                obj['semesterLevel'] = val
            elif key == 'Semester/Level':
                obj['semesterLevel'] = val
            elif key == 'Level':
                obj['semesterLevel'] = val
            elif key == 'Branch':
                obj['branch'] = val

    newArr.append(obj)

jsonArr = []
for i in range(0, len(newArr)):
    jsonArr.append(json.dumps(newArr[i]))


json.dump(jsonArr, finalResultJson, indent=6)

finalResultJson.close()
mcaFile3.close()

os.remove(retwrittenPath)
