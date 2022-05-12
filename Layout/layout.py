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
edg = set()
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
    edg.add((u.upper(), v.upper()))

with open("constants.js", "w") as f:
    f.write('var nodes = [\n')
    # (name, type)
    for i, (name, ntype) in enumerate(nodes):
        c = "green"
        if ntype.startswith("topic") or ntype.startswith("given"):
            c = "orange"
        elif ntype.startswith("hidden"):
            c = "red"
        f.write('{{ id: "{}", group: {}, label: "{}", level: 1, color: "{}" }},\n'.format(name, i, name, c))
    f.write(']\n\nvar links = [\n')
    # All edges are undirected
    for u, v in edges:
        f.write('{{ target: "{}", source: "{}", strength: 0.5 }},\n'.format(v, u))
    f.write(']\n')

# Report some vertex info
degrees = {}
for v in verts:
    degrees[v] = len([e for e in edg if e[0] == v or e[1] == v])
print('Average degree: ', sum(degrees.values()) / len(degrees.values()))

print('Degree <= 1:')
for v in verts:
    if degrees[v] <= 1:
        print(v)

# nodes.forEach(function (n) { console.log(n.id, n.x, n.y)})
