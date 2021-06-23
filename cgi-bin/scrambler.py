import random


def scramble(length):
    moves = ["F", "F2", "F'", "B", "B2", "B'", "R", "R2", "R'", "L", "L2", "L'", "U", "U2", "U'", "D", "D2", "D'"]
    fb_moves = ["F", "F2", "F'", "B", "B2", "B'"]
    rl_moves = ["R", "R2", "R'", "L", "L2", "L'"]
    ud_moves = ["U", "U2", "U'", "D", "D2", "D'"]

    out = [random.choice(moves)]

    for i in range(length - 1):
        if out[-1] in fb_moves:
            out.append(random.choice(list(set(rl_moves).union(set(ud_moves)))))
        elif out[-1] in rl_moves:
            out.append(random.choice(list(set(fb_moves).union(set(ud_moves)))))
        else:
            out.append(random.choice(list(set(rl_moves).union(set(fb_moves)))))

    for i in range(1, 1 + (len(out) // 15)):
        out.insert(i*15 + i - 1, "\n")

    return " ".join(out).replace("\n ", "\n")


print(scramble(25))
