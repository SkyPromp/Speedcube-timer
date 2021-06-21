#!/usr/bin/env python3
import json
import cgi
from filewriter import remove

parameters = cgi.FieldStorage(keep_blank_values=1)
# Remove last useful line
remove()

print("Content-Type: application/json")
print()
print(json.dumps(""))
