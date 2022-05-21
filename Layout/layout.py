#!/usr/bin/env python3
import csv

# This only lists nodes that are special, by default nodes are added with the
# default type
with open("Nodes.csv") as f:
    nodes = list(csv.reader(f,delimiter=','))
    nodes = [n for n in nodes if n]
    nodes = [[t.strip() for t in row] for row in nodes]
    for row in nodes:
        row[0] = row[0].upper()

# Adjacency list -> list of (u,v) edges
edg = set()
with open("Edges.csv") as f:
    rows = list(csv.reader(f,delimiter=','))
    rows = [row for row in rows if row]
    rows = [[t.upper().strip() for t in row] for row in rows]
    for row in rows:
        print(row)
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

with open("constants.js", "w") as f:
    f.write('var nodes = [\n')
    # (name, type)
    for i, (name, ntype) in enumerate(nodes):
        c = "green"
        if ntype.startswith("topic") or ntype.startswith("given"):
            c = "orange"
        elif ntype.startswith("hidden"):
            c = "red"
        elif ntype.startswith("answer"):
            c = "pink"
        f.write('{{ id: "{}", group: {}, label: "{}", level: 1, color: "{}" }},\n'.format(name, i, name, c))
    f.write(']\n\nvar links = [\n')
    # All edges are undirected
    for u, v in edg:
        f.write('{{ target: "{}", source: "{}", color: "rgb(50,50,50,0.5)", strength: 0.3 }},\n'.format(v, u))
    f.write(']\n')

# Report some vertex info
degrees = {}
for v in verts:
    degrees[v] = len([e for e in edg if e[0] == v or e[1] == v])
print('Num vertices: %d' % len(verts))
print('Num edges: %d' % len(edg))
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
