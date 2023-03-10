# Timetable App

## Steps for executing

- Download and install the following MongoDB stuff : 
 [MongoDB Database Tools]  [https://fastdl.mongodb.org/tools/db/mongodb-database-tools-windows-x86_64-100.7.0.zip]
 [MongoDB Compass]  [https://downloads.mongodb.com/compass/mongodb-compass-1.35.0-win32-x64.exe]
 [MongoDB Community Server]  [https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-6.0.4-signed.msi]
- If you want to load static data execute the setup file in [reset-database]('./timetableApp/reset-database/setup.sh')
- Execute the shell scripts  (One time only) : 
    1) [installServerDependencies]('./installServerDependencies')
    2) Execute the shell scripts [installClientDependencies]('./installClientDependencies')
- Run your app by executing the scripts [launchServer]('./launchApp.sh') and [launchClient]('./launchClient.sh')
