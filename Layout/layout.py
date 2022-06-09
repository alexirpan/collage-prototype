#!/usr/bin/env python3
import csv
import read_data

nodes, edg, verts = read_data.nodes, read_data.edg, read_data.verts

with open("constants.js", "w") as f:
    f.write('var nodes = [\n')
    # (name, type)
    for i, row in enumerate(nodes):
        name = row[0]
        ntype = row[1]
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
            print('  ' + v)

print('Degree <= 1:')
for v in verts:
    if degrees[v] <= 1:
        print('  ' + v)

print('Disconnected from TRIFORCE')
seen = set()
to_visit = ['TRIFORCE']
while to_visit:
    c = to_visit.pop()
    seen.add(c)
    # O(N^2) instead of O(N)
    for e in edg:
        if e[0] == c and e[1] not in seen:
            to_visit.append(e[1])
            seen.add(e[1])
        if e[1] == c and e[0] not in seen:
            to_visit.append(e[0])
            seen.add(e[0])

for v in verts:
    if v not in seen:
        print('  ' + v)

# nodes.forEach(function (n) { console.log(n.id, n.x, n.y)})
