#!/usr/bin/env python3
import csv

# This only lists nodes that are special, by default nodes are added with the
# default type
with open("Nodes.csv") as f:
    nodes = list(csv.reader(f,delimiter=','))

with open("Edges.csv") as f:
    edges = list(csv.reader(f,delimiter=','))

# input validation and cleanup
verts = set()
for row in nodes:
    row[0] = row[0].upper()
    verts.add(row[0])

for row in edges:
    u, v = row[0], row[1]
    row[0] = u.upper()
    row[1] = v.upper()
    if u.upper() not in verts:
        nodes.append((u.upper(), 'regular'))
        verts.add(u.upper())
    if v.upper() not in verts:
        nodes.append((v.upper(), 'regular'))
        verts.add(v.upper())

with open("constants.js", "w") as f:
    f.write('var nodes = [\n')
    # (name, type)
    for i, (name, ntype) in enumerate(nodes):
        c = "green"
        if ntype.startswith("topic"):
            c = "orange"
        elif ntype.startswith("hidden"):
            c = "red"
        f.write('{{ id: "{}", group: {}, label: "{}", level: 1, color: "{}" }},\n'.format(name, i, name, c))
    f.write(']\n\nvar links = [\n')
    # All edges are undirected
    for u, v in edges:
        f.write('{{ target: "{}", source: "{}", strength: 0.1 }},\n'.format(v, u))
    f.write(']\n')

# nodes.forEach(function (n) { console.log(n.id, n.fx, n.fy)})
# nodes.forEach(function (n) { console.log(n.id, Math.round(n.fx) - 1950, 2700 - Math.round(n.fy))})
