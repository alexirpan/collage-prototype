#!/usr/bin/env python3
import csv

# This only lists nodes that are special, by default nodes are added with the
# default type
with open("../Layout/Nodes.csv") as f:
    nodes = list(csv.reader(f,delimiter=','))

with open("../Layout/Edges.csv") as f:
    edges = list(csv.reader(f,delimiter=','))

with open('positiondump') as f:
    pos = f.readlines()
    pos = [line.strip() for line in pos if line.strip()]
    pos = [line.rsplit(' ', 2) for line in pos]
    positions = dict()
    for v, x, y in pos:
        positions[v.upper()] = (float(x), float(y))

# input validation and cleanup
verts = []
for row in nodes:
    row[0] = row[0].upper()
    verts.append(row[0])

for row in edges:
    u, v = row[0], row[1]
    row[0] = u.upper()
    row[1] = v.upper()
    if u.upper() not in verts:
        nodes.append((u.upper(), 'regular'))
        verts.append(u.upper())
    if v.upper() not in verts:
        nodes.append((v.upper(), 'regular'))
        verts.append(v.upper())

with open("locations.js", "w") as f:
    f.write('var nodes = [\n')
    # (name, type)
    for i, (name, ntype) in enumerate(nodes):
        c = "green"
        if ntype.startswith("topic"):
            c = "orange"
        elif ntype.startswith("hidden"):
            c = "red"
        f.write('{{ id: "{}", group: {}, label: "{}", level: 1, color: "{}", x: "{}", y: "{}" }},\n'.format(name, i, name, c, positions[name][0], positions[name][1]))
    f.write(']\n\nvar links = [\n')
    # All edges are undirected
    for u, v in edges:
        f.write('{{ target: "{}", source: "{}", source_x: "{}", source_y: "{}", target_x: "{}", target_y: "{}" }},\n'.format(v, u, positions[u][0], positions[u][1], positions[v][0], positions[v][1]))
    f.write(']\n')

# nodes.forEach(function (n) { console.log(n.id, n.fx, n.fy)})
# nodes.forEach(function (n) { console.log(n.id, Math.round(n.fx) - 1950, 2700 - Math.round(n.fy))})
