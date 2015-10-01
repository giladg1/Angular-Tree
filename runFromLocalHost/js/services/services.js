/**
 * Created by Gilad on 9/8/2015.
 */

myApp.factory("firstFolders", function () {

    var folderPackage1 = [
        {
            "folderName": "MainVFS"
        },
        {
            "folderName": "Finance"
        },
        {
            "folderName": "MyWeb"
        },
        {
            "folderName": "MyExchange"
        }

    ];

    return folderPackage1;
});

myApp.factory("secondFolders", function () {

    var folderPackage2 = [
        {
            "folderName": "quarterA"
        },
        {
            "folderName": "quarterB"
        }


    ];

    return folderPackage2;
});







