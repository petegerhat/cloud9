import json, ast
def func():
    jsonString = \
        """{
                "aoColumns" : [
                    [ "sTitle" : "DT_RowId" ],
                    [ "sTitle" : "supplier" ],
                    [ "sTitle" : "color" ],
                ],
                "aaData" : [
                    [ "row_3", "ikeasss", "red" ],
                    [ "row_3", "scontosss", "blue" ],
                    [ "row_3", "sconto", "blue" ],
                    [ "row_4", "sconto", "blue" ],
                    [ "row_5", "sconto", "blue" ],
                    [ "row_6", "sconto", "blue" ],
                    [ "row_7", "sconto", "blue" ],
                    [ "row_8", "sconto", "blue" ],
                    [ "row_9", "sconto", "blue" ],
                    [ "row_10", "sconto", "blue" ],
                    [ "row_11", "sconto", "blue" ],
                ]
        }"""
    
    print(jsonString), #end="", flush=True)
func()