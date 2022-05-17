#!/usr/bin/env python3
import csv

# This only lists nodes that are special, by default nodes are added with the
# default type
with open("Nodes.csv") as f:
    nodes = list(csv.reader(f,delimiter=','))
    nodes = [n for n in nodes if n]

with open("Edges.csv") as f:
    edges = list(csv.reader(f,delimiter=','))
    edges = [e for e in edges if e]

# input validation and cleanup
verts = set()
edg = set()
for row in nodes:
    row[0] = row[0].upper()
    verts.add(row[0])

for row in edges:
    u, v = row[0], row[1]
    if len(row) == 2:
        # default color
        row.append('rgba(50, 50, 50, 0.5)')
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
    for u, v, color in edges:
        f.write('{{ target: "{}", source: "{}", color: "{}", strength: 0.3 }},\n'.format(v, u, color))
    f.write(']\n')

# Report some vertex info
degrees = {}
for v in verts:
    degrees[v] = len([e for e in edg if e[0] == v or e[1] == v])
print('Num vertices: %d' % len(verts))
print('Num edges: %d' % len(edges))
print('Average degree: ', sum(degrees.values()) / len(degrees.values()))

if min(degrees.values()) == 0:
    print('Degree 0:')
    for v in verts:
        if degrees[v] == 0:
            print(v)

print('Degree <= 1:')
for v in verts:
    if degrees[v] <= 1:
        print(v)

# nodes.forEach(function (n) { console.log(n.id, n.x, n.y)})
