#!/usr/bin/env python3
import csv
import read_data

nodes, edg, verts = read_data.nodes, read_data.edg, read_data.verts

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
        f.write('{{ target: "{}", source: "{}", color: "rgba(50,50,50,0.5)", strength: 0.3 }},\n'.format(v, u))
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
