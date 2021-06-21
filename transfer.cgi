#!/usr/bin/env python3
import json
import cgi
from scrambler import getScramble
from filewriter import write

# Read data sent by Javascript
parameters = cgi.FieldStorage(keep_blank_values=1)

time = parameters.getvalue('time')
scramble = parameters.getvalue('scramble')

# Write data to file and get new scramble
write(scramble, time)

new_data = getScramble()

# Return response
print("Content-Type: application/json")
print()
print(json.dumps(new_data))