import json, ast
def func():
    jsonString = \
        """[
            { "supplier": "ikeasss", "color": "red" },
            { "supplier": "scontosss", "color": "blue" },
            { "DT_RowId": "row_3", "supplier": "sconto", "color": "blue" },
            { "DT_RowId": "row_4", "supplier": "sconto", "color": "blue" },
            { "DT_RowId": "row_5", "supplier": "sconto", "color": "blue" },
            { "DT_RowId": "row_6", "supplier": "sconto", "color": "blue" },
            { "DT_RowId": "row_7", "supplier": "sconto", "color": "blue" },
            { "DT_RowId": "row_8", "supplier": "sconto", "color": "blue" },
            { "DT_RowId": "row_9", "supplier": "sconto", "color": "blue" },
            { "DT_RowId": "row_10", "supplier": "sconto", "color": "blue" },
            { "DT_RowId": "row_11", "supplier": "sconto", "color": "blue" }
        ]"""
    
    print(jsonString), #end="", flush=True)
func()