import csv
# This only lists nodes that are special, by default nodes are added with the
# default type
with open("../Nodes.csv") as f:
    nodes = list(csv.reader(f,delimiter=','))
    # Drop header
    nodes = nodes[1:]
    nodes = [n for n in nodes if n]
    # drop empty cells
    nodes = [[t.strip() for t in row if t.strip()] for row in nodes]
    # uppercase answers but not node type
    for row in nodes:
        row[0] = row[0].upper()

# Adjacency list -> list of (u,v) edges
edg = set()
with open("../Edges.csv") as f:
    rows = list(csv.reader(f,delimiter=','))
    # Drop header
    rows = rows[1:]
    # drop empty cells
    rows = [row for row in rows if ''.join(row)]
    rows = [[t.upper().strip() for t in row if t.strip()] for row in rows]
    for row in rows:
        start = row[0]
        for end in row[1:]:
            edg.add(tuple(sorted([start, end])))


# input validation and cleanup
verts = set()
for row in nodes:
    verts.add(row[0])

for u, v in edg:
    if u not in verts:
        nodes.append((u, 'regular'))
        verts.add(u)
    if v not in verts:
        nodes.append((v, 'regular'))
        verts.add(v)

print('Read date')
