#!/usr/bin/env python3
import csv
import read_data

nodes, edg, verts = read_data.nodes, read_data.edg, read_data.verts

with open('positiondump') as f:
    pos = f.read().split(',')
    pos = [line.strip() for line in pos if line.strip()]
    pos = [line.rsplit(' ', 2) for line in pos]
    positions = dict()
    for v, x, y in pos:
        positions[v.upper()] = (float(x), float(y))
    # Translate to have x,y start at (100,100)
    min_x = min(v[0] for v in positions.values())
    min_y = min(v[1] for v in positions.values())
    tx = min_x - 100
    ty = min_y - 100
    for v in positions:
        x,y = positions[v]
        positions[v] = (x - tx, y - ty)

with open("locations.js", "w") as f:
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

        f.write('{{ id: "{}", group: {}, label: "{}", level: 1, color: "{}", x: "{}", y: "{}", ntype: "{}" }},\n'.format(name, i, name, c, positions[name][0], positions[name][1], ntype))
    f.write(']\n\nvar links = [\n')
    # All edges are undirected
    for u, v, color in edges:
        f.write('{{ target: "{}", source: "{}", color: "rgba(50,50,50,0.5)", source_x: "{}", source_y: "{}", target_x: "{}", target_y: "{}" }},\n'.format(v, u, positions[u][0], positions[u][1], positions[v][0], positions[v][1]))
    f.write(']\n')

# nodes.forEach(function (n) { console.log(n.id, n.fx, n.fy)})
# nodes.forEach(function (n) { console.log(n.id, Math.round(n.fx) - 1950, 2700 - Math.round(n.fy))})
