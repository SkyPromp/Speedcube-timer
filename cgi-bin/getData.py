import math


def getLimits():
    file = open("times.csv", "r")
    w = file.read()
    file.close()
    w = w.split("\n")

    worst = 0
    total = 0
    try:
        best = int(w[0].split(",")[2])
    except IndexError:
        return "no best time"

    w.pop()
    for i in w:
        time = int(i.split(",")[2])
        total += time
        if time < best:
            best = time
        if time > worst:
            worst = time

    average = total/len(w)

    mu = 0
    for i in w:
        mu += (int(i.split(",")[2]) - average)**2

    # best time, worst time, average time, total time, total solve count, standard deviation
    return best, worst, average, total, len(w), math.sqrt(mu/len(w))


def getAverageOf(number):
    file = open("times.csv", "r")
    w = file.read()
    file.close()
    w = w.split("\n")

    if len(w) > 1 and number > 0:
        w.pop()
    else:
        return 0

    w = w[len(w) - number:len(w)]
    total = 0
    for i in w:
        total += int(i.split(",")[2])

    return total/len(w)
