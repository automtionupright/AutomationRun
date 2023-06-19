var execution = {"machines":[{"type":"machine","plannedTests":6,"name":"fv-az339-204","status":"failure","children":[{"type":"scenario","scenarioProperties":{"Station":"10.1.1.41","User":"runner","Version":"unknown","sutFile":"default.xml","testDir":"/home/runner/work/MetaAuto/MetaAuto/target/classes","Date":"Mon Jun 19 15:33:25 UTC 2023","Scenario":"RunTests/SQA-12026"},"name":"RunTests/SQA-12026","status":"failure","children":[{"type":"scenario","scenarioProperties":{"Station":"10.1.1.41","User":"runner","Version":"unknown","sutFile":"default.xml","testDir":"/home/runner/work/MetaAuto/MetaAuto/target/classes","Date":"Mon Jun 19 15:33:25 UTC 2023","Scenario":"RunTests/SQA-12026"},"name":"RunTests/verifyEmployerProducts","status":"failure","children":[{"type":"test","index":0,"uid":"6731687188803-1","description":"Check if the employer products appears as expected","duration":3677,"date":"2023/06/19","timestamp":"15:33:26","className":"Test.APITest","parameters":{"ValidProducts":"${products}","EmployerID":"${employerId}"},"properties":{"Test Documentation":"Check if the employer products appears as expected","Class":"Test.APITest","Breadcrumb":"SQA-12026-->verifyEmployerProducts-->Verify employer products"},"name":"Verify employer products","status":"failure","hideInHtml":false}]},{"type":"scenario","scenarioProperties":{"Station":"10.1.1.41","User":"runner","Version":"unknown","sutFile":"default.xml","testDir":"/home/runner/work/MetaAuto/MetaAuto/target/classes","Date":"Mon Jun 19 15:33:25 UTC 2023","Scenario":"RunTests/SQA-12026"},"name":"RunTests/verifyEmployerName","status":"failure","children":[{"type":"test","index":1,"uid":"6731687188803-2","description":"Verify if employer name appears as expected by params","duration":1286,"date":"2023/06/19","timestamp":"15:33:30","className":"Test.APITest","parameters":{"EmployerID":"${employerId}","EmployerName":"${employerName}"},"properties":{"Test Documentation":"Verify if employer name appears as expected by params","Class":"Test.APITest","Breadcrumb":"SQA-12026-->verifyEmployerName-->Employer name"},"name":"Employer name","status":"failure","hideInHtml":false}]},{"type":"scenario","scenarioProperties":{"Station":"10.1.1.41","User":"runner","Version":"unknown","sutFile":"default.xml","testDir":"/home/runner/work/MetaAuto/MetaAuto/target/classes","Date":"Mon Jun 19 15:33:25 UTC 2023","Scenario":"RunTests/SQA-12026"},"name":"RunTests/verifEmployerID","status":"success","children":[{"type":"test","index":2,"uid":"6731687188803-3","description":"","duration":1293,"date":"2023/06/19","timestamp":"15:33:31","className":"Test.APITest","parameters":{"EmployerID":"${employerId}"},"properties":{"Class":"Test.APITest","Breadcrumb":"SQA-12026-->verifEmployerID-->Verify employer ID"},"name":"Verify employer ID","status":"success","hideInHtml":false}]},{"type":"scenario","scenarioProperties":{"Station":"10.1.1.41","User":"runner","Version":"unknown","sutFile":"default.xml","testDir":"/home/runner/work/MetaAuto/MetaAuto/target/classes","Date":"Mon Jun 19 15:33:25 UTC 2023","Scenario":"RunTests/SQA-12026"},"name":"RunTests/suppportData","status":"failure","children":[{"type":"test","index":3,"uid":"6731687188803-4","description":"Check if the employer email and phone number appears as expected","duration":1462,"date":"2023/06/19","timestamp":"15:33:32","className":"Test.APITest","parameters":{"EmployerID":"${employerId}","SupportEmail":"${email}","SupportPhone":"${phone}"},"properties":{"Test Documentation":"Check if the employer email and phone number appears as expected","Class":"Test.APITest","Breadcrumb":"SQA-12026-->suppportData-->Verify support data"},"name":"Verify support data","status":"failure","hideInHtml":false}]},{"type":"scenario","scenarioProperties":{"Station":"10.1.1.41","User":"runner","Version":"unknown","sutFile":"default.xml","testDir":"/home/runner/work/MetaAuto/MetaAuto/target/classes","Date":"Mon Jun 19 15:33:25 UTC 2023","Scenario":"RunTests/SQA-12026"},"name":"RunTests/verifyWrongEmployerID","status":"success","children":[{"type":"test","index":4,"uid":"6731687188803-5","description":"Verify that the wrong employer id is not exist","duration":1035,"date":"2023/06/19","timestamp":"15:33:34","className":"Test.APITest","parameters":null,"properties":{"Test Documentation":"Verify that the wrong employer id is not exist","Class":"Test.APITest","Breadcrumb":"SQA-12026-->verifyWrongEmployerID-->Verify negative employer ID"},"name":"Verify negative employer ID","status":"success","hideInHtml":false}]},{"type":"scenario","scenarioProperties":{"Station":"10.1.1.41","User":"runner","Version":"unknown","sutFile":"default.xml","testDir":"/home/runner/work/MetaAuto/MetaAuto/target/classes","Date":"Mon Jun 19 15:33:25 UTC 2023","Scenario":"RunTests/SQA-12026"},"name":"RunTests/veridyAlredyExistUser","status":"success","children":[{"type":"test","index":5,"uid":"6731687188803-6","description":"Verify that enrolled user have his products are false","duration":3921,"date":"2023/06/19","timestamp":"15:33:35","className":"Test.APITest","parameters":{"ValidProducts":"${products}","EmployerID":"${employerId}","IsNewEnrollment":"${isNewEnrollment}"},"properties":{"Test Documentation":"Verify that enrolled user have his products are false","Class":"Test.APITest","Breadcrumb":"SQA-12026-->veridyAlredyExistUser-->verify all products are false to user with status+stage= enrolled"},"name":"verify all products are false to user with status+stage= enrolled","status":"success","hideInHtml":false}]}]}]}]};