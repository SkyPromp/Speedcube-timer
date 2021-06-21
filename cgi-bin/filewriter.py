import datetime


# Append the current date/time, scramble and solving time to the text file
def write(scramble, time):
    file = open("times.txt", "a")
    file.write(f"{datetime.datetime.now()},{scramble},{time}\n")
    file.close()


# Removes the last used line of the file (so removes the empty line, and the used line and then adds another newline)
def remove():
    file = open("times.txt", "r")
    r = file.read()
    file.close()
    m = r.split("\n")
    s = "\n".join(m[:-2])  # remove last 2 lines (last line is \n)
    s += "\n"
    file = open("times.txt", "w+")
    for i in range(len(s)):
        file.write(s[i])
    file.close()
