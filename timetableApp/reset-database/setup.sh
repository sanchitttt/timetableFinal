mongo timetable --eval "db.dropDatabase()"

mongoimport --uri "mongodb://localhost:27017/timetable"  --jsonArray --collection subjects --file "C://Users/Sanchit/Desktop/TimetableApp/timetableApp/raw-data/subjects.json"
mongoimport --uri "mongodb://localhost:27017/timetable"  --jsonArray --collection teachers --file "C://Users/Sanchit/Desktop/TimetableApp/timetableApp/raw-data/teachers.json"
mongoimport --uri "mongodb://localhost:27017/timetable"  --jsonArray --collection rooms --file "C://Users/Sanchit/Desktop/TimetableApp/timetableApp/raw-data/rooms.json"

echo "Press enter key to quit"
read