var command = angular.module('command', []);

function extractChar(string) {
    var returnVal = {};
    var comalph = string.split(/[0-9]+/);
    var comnum = string.split(/[a-zA-Z]+/);
    if (comalph.length == 1) {
        returnVal.string = comalph[0];
        returnVal.type = "stringOnly";
    } else if (comnum.length == 1) {
        returnVal.number = comnum[0];
        returnVal.type = "numberOnly";
    } else if (comnum.length == 2 || comalph.length == 2) {
        returnVal.type = "stringNumber";
        if (comnum[0] === "") {
            returnVal.number = comnum[1];
        } else if (comnum[1] === "") {
            returnVal.number = comnum[0];
        }
        if (comalph[0] === "") {
            returnVal.string = comalph[1];
        } else if (comalph[1] === "") {
            returnVal.string = comalph[0];
        }
    } else {
        returnVal.type = "incorrectType";
    }
    if (returnVal.string) {
        returnVal.string = returnVal.string.toUpperCase();
    }

    if (returnVal.number) {
        returnVal.number = parseInt(returnVal.number);
    }

    return returnVal;
}

command.directive('command', function($document, $http) {
    return {
        restrict: 'E',
        replace: false,
        templateUrl: 'views/directive/command.html',
        link: function(scope, element, attr) {
            scope.command = {
                input: ""
            };
            scope.commandChange = function(key) {
                var returnVal = {};
                if (key.keyCode == 13) {
                    var command = scope.command.input;
                    scope.command.input = "";
                    var commandArr = command.split(" ");
                    var extractedChar = "";
                    var extractedChar2 = "";
                    switch (commandArr.length) {
                        case 0:
                            console.log("Nothing");
                            break;
                        case 1:
                            if (commandArr[0] === "") {
                                console.log("Nothing as well");
                            } else {
                                extractedChar = extractChar(commandArr[0]);
                                console.log(extractedChar);
                                if (extractedChar.type == "incorrectType") {
                                    console.log("IncorrectType");
                                } else if (extractedChar.type == "stringOnly") {
                                    if (extractedChar.string == "W") {
                                        returnVal.incrementWicket = 1;
                                        returnVal.incrementBall = 1;
                                    }
                                    if (extractedChar.string == "SUS" || extractedChar.string == "OPEN") {
                                        returnVal.suspended = 1;
                                    }
                                    if (extractedChar.string == "MW") {
                                        returnVal.incrementWicket = -1;
                                    }
                                    if (extractedChar.string == "MB") {
                                        returnVal.incrementBall = -1;
                                    }

                                    if (extractedChar.string == "CHANGEBAT") {
                                        returnVal.changeBat = true;
                                    }
                                    if (extractedChar.string == "CHANGEFAV") {
                                        $http(adminURL + "session/changeFavourite", {
                                            changeFavourite: true
                                        }).then(function() {
                                            console.log("Favorite Changed ");
                                        });
                                    }

                                } else if (extractedChar.type == "numberOnly") {
                                    returnVal.incrementRun = extractedChar.number;
                                    returnVal.incrementBall = 1;

                                } else if (extractedChar.type == "stringNumber") {
                                    if (extractedChar.string == "S") {
                                        returnVal.run = extractedChar.number;
                                    }
                                    if (extractedChar.string == "N") {
                                        returnVal.incrementRun = extractedChar.number;
                                    }
                                    if (extractedChar.string == "W") {
                                        returnVal.incrementRun = extractedChar.number;
                                        returnVal.incrementWicket = 1;
                                        returnVal.incrementBall = 1;
                                    }
                                    if (extractedChar.string == "WN") {
                                        returnVal.incrementRun = extractedChar.number;
                                        returnVal.incrementWicket = 1;
                                    }
                                    if (extractedChar.string == "NW") {
                                        returnVal.incrementRun = extractedChar.number;
                                        returnVal.incrementWicket = 1;
                                    }
                                    if (extractedChar.string == "M") {
                                        returnVal.incrementRun = -1 * extractedChar.number;
                                    }
                                }

                            }
                            break;
                        case 2:
                            //part1
                            extractedChar = extractChar(commandArr[0]);
                            extractedChar2 = extractChar(commandArr[1]);
                            if (extractedChar.type == "incorrectType") {
                                console.log("IncorrectType");
                            } else if (extractedChar.type == "stringOnly") {
                                if (extractedChar.string == "CREATES" && extractedChar2.type == "numberOnly") {

                                    $http(adminURL + "session/createSession", {
                                        overs: extractedChar2.number
                                    }).then(function() {
                                        console.log("New Session Created for Over " + extractedChar2.number);
                                    });
                                }
                                if (extractedChar.string == "DELS" && extractedChar2.type == "numberOnly") {

                                    $http(adminURL + "session/deleteSession", {
                                        overs: extractedChar2.number
                                    }).then(function() {
                                        console.log("Deleted Session for Over " + extractedChar2.number);
                                    });
                                }
                            } else if (extractedChar.type == "numberOnly") {
                                if (extractedChar2.type == "stringNumber" && extractedChar2.string == "S") {
                                    returnVal.incrementRun = extractedChar.number;
                                    returnVal.run = extractedChar2.number;
                                    returnVal.incrementBall = 1;

                                } else if (extractedChar2.type == "numberOnly") {
                                    returnVal.rate1 = extractedChar.number;
                                    returnVal.rate2 = extractedChar2.number;

                                }
                            } else if (extractedChar.type == "stringNumber") {
                                if (extractedChar.string == "N" && extractedChar2.string == "S" && extractedChar2.type == "stringNumber") {
                                    returnVal.incrementRun = extractedChar.number;
                                    returnVal.run = extractedChar2.number;
                                }
                                if (extractedChar.string == "W" && extractedChar2.string == "S" && extractedChar2.type == "stringNumber") {
                                    returnVal.incrementRun = extractedChar.number;
                                    returnVal.incrementWicket = 1;
                                    returnVal.run = extractedChar2.number;
                                    returnVal.incrementBall = 1;
                                }
                                if (extractedChar.string == "WN" && extractedChar2.string == "S" && extractedChar2.type == "stringNumber") {
                                    returnVal.incrementRun = extractedChar.number;
                                    returnVal.incrementWicket = 1;
                                    returnVal.run = extractedChar2.number;
                                }
                                if (extractedChar.string == "NW" && extractedChar2.string == "S" && extractedChar2.type == "stringNumber") {
                                    returnVal.incrementRun = extractedChar.number;
                                    returnVal.incrementWicket = 1;
                                    returnVal.run = extractedChar2.number;
                                }
                            }

                            break;
                        case 3:

                            extractedChar = extractChar(commandArr[0]);
                            extractedChar2 = extractChar(commandArr[1]);
                            extractedChar3 = extractChar(commandArr[2]);
                            if (extractedChar2.type == "numberOnly" && extractedChar3.type == "numberOnly") {
                                returnVal.rate1 = extractedChar2.number;
                                returnVal.rate2 = extractedChar3.number;
                                if (extractedChar.type == "numberOnly") {
                                    returnVal.incrementRun = extractedChar.number;
                                    returnVal.incrementBall = 1;
                                } else if (extractedChar.type == "stringOnly") {
                                    if (extractedChar.string == "W") {
                                        returnVal.incrementWicket = 1;
                                        returnVal.incrementBall = 1;
                                    }
                                } else if (extractedChar.type == "stringNumber") {
                                    if (extractedChar.string == "W") {
                                        returnVal.incrementWicket = 1;
                                        returnVal.incrementBall = 1;
                                    }
                                    if (extractedChar.string == "NW") {
                                        returnVal.incrementWicket = 1;
                                        delete returnVal.incrementBall;
                                    }
                                    if (extractedChar.string == "WN") {
                                        returnVal.incrementWicket = 1;
                                        delete returnVal.incrementBall;
                                    }
                                    if (extractedChar.string == "N") {
                                        delete returnVal.incrementBall;
                                    }
                                }

                            }

                            break;

                        case 4:

                            extractedChar = extractChar(commandArr[0]);
                            extractedChar2 = extractChar(commandArr[1]);
                            extractedChar3 = extractChar(commandArr[2]);
                            extractedChar4 = extractChar(commandArr[3]);
                            if (extractedChar4.type == "stringNumber" && extractedChar4.string == "S") {
                                returnVal.run = extractedChar4.number;
                            }
                            if (extractedChar2.type == "numberOnly" && extractedChar3.type == "numberOnly") {
                                returnVal.rate1 = extractedChar2.number;
                                returnVal.rate2 = extractedChar3.number;
                                if (extractedChar.type == "numberOnly") {
                                    returnVal.incrementRun = extractedChar.number;
                                    returnVal.incrementBall = 1;
                                } else if (extractedChar.type == "stringOnly") {
                                    if (extractedChar.string == "W") {
                                        returnVal.incrementWicket = 1;
                                        returnVal.incrementBall = 1;
                                    }
                                } else if (extractedChar.type == "stringNumber") {
                                    if (extractedChar.string == "W") {
                                        returnVal.incrementWicket = 1;
                                        returnVal.incrementBall = 1;
                                    }
                                    if (extractedChar.string == "NW") {
                                        returnVal.incrementWicket = 1;
                                        delete returnVal.incrementBall;
                                    }
                                    if (extractedChar.string == "WN") {
                                        returnVal.incrementWicket = 1;
                                        delete returnVal.incrementBall;
                                    }
                                    if (extractedChar.string == "N") {
                                        delete returnVal.incrementBall;
                                    }
                                }

                            }

                            break;
                        default:
                            console.log("Nothing");

                    }
                    if (!_.isEmpty(returnVal)) {
                        if (returnVal.rate1) {
                            returnVal.rate1 = returnVal.rate1 / 100;
                        }
                        if (returnVal.rate2) {
                            returnVal.rate2 = returnVal.rate2 / 100;
                        }
                        console.log(returnVal);
                        returnVal._id = "57238ec6b089c933a122b4be";
                        $http.post(adminURL + "session/change", returnVal).then(function(data) {

                        });
                    } else {
                        console.log("INCORRECT COMMAND");
                    }

                }

            };


        }
    };
});
