var execution = {"machines":[{"type":"machine","plannedTests":1,"name":"fv-az168-783","status":"failure","children":[{"type":"scenario","scenarioProperties":{"Station":"10.1.68.0","User":"runner","Version":"unknown","sutFile":"default.xml","testDir":"/home/runner/work/MetaAuto/MetaAuto/target/classes","Date":"Thu Jul 06 08:27:31 UTC 2023","Scenario":"RunTests/supportEmployerData"},"name":"RunTests/supportEmployerData","status":"failure","children":[{"type":"test","index":0,"uid":"9311688632048-1","description":"Check if the employer email and phone number appears as expected","duration":8285,"date":"2023/07/06","timestamp":"08:27:32","className":"Test.APITest","parameters":{"EmployerID":"${employerId}","SupportEmail":"${email}","SupportPhone":"${phone}"},"properties":{"Test Documentation":"Check if the employer email and phone number appears as expected","Class":"Test.APITest","Breadcrumb":"supportEmployerData-->Verify support data"},"name":"Verify support data","status":"failure","hideInHtml":false}]}]}]};