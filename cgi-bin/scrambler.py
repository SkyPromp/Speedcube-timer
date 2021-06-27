import random


def scramble(length):
    moves = ["F", "F2", "F'", "B", "B2", "B'", "R", "R2", "R'", "L", "L2", "L'", "U", "U2", "U'", "D", "D2", "D'"]
    fb_moves = ["F", "F2", "F'", "B", "B2", "B'"]
    rl_moves = ["R", "R2", "R'", "L", "L2", "L'"]
    ud_moves = ["U", "U2", "U'", "D", "D2", "D'"]

    out = [random.choice(moves)]

    for _ in range(length - 1):
        if out[-1] in fb_moves:
            out.append(random.choice(list(set(rl_moves).union(set(ud_moves)))))
        elif out[-1] in rl_moves:
            out.append(random.choice(list(set(fb_moves).union(set(ud_moves)))))
        else:
            out.append(random.choice(list(set(rl_moves).union(set(fb_moves)))))

    for i in range(1, 1 + (len(out) // 15)):
        out.insert(i*15 + i - 1, "\n")

    return " ".join(out).replace("\n ", "\n")


def scrambleToImage(scramble_list):
    # Define default colorscheme
    front = [["G", "G", "G"], ["G", "G", "G"], ["G", "G", "G"]]
    back = [["B", "B", "B"], ["B", "B", "B"], ["B", "B", "B"]]
    right = [["R", "R", "R"], ["R", "R", "R"], ["R", "R", "R"]]
    left = [["O", "O", "O"], ["O", "O", "O"], ["O", "O", "O"]]
    up = [["W", "W", "W"], ["W", "W", "W"], ["W", "W", "W"]]
    down = [["Y", "Y", "Y"], ["Y", "Y", "Y"], ["Y", "Y", "Y"]]

    opposites = {front: back, back: front, right: left, left: right, up: down, down: up}
    all_faces = [front, back, right, left, up, down]

    faceToArray = {"F": front, "B": back, "R": right, "L": left, "U": up, "D": down}

    for i in scramble_list:
        # Get array
        face = faceToArray[i[0]]
        faces = all_faces
        all_faces.remove(face)
        faces.remove(opposites[face])

        # Counter clockwise
        if len(i) == 2 and i[1] == "'":
            # Turn the turned face counter clockwise (e.g. with F, turn the F face)
            out = [[face[0][2], face[1][2], face[2][2]],
                   [face[0][1], face[1][1], face[2][1]],
                   [face[0][0], face[1][0], face[2][0]]]

            # Do this for the 4 other faces

        # Clockwise
        else:
            pass

