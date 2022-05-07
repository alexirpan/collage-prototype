#!/usr/bin/env python3

with open("Nodes.csv") as f:
    nodes = list(csv.reader(f))[1:]

with open("Edges.csv") as f:
    edges  = list(csv.reader(f))[1:]

for i, (name, ntype, fillno, ftype) in enumerate(nodes):
    c = "orange" if ntype.startswith("target") and len(ntype) == 7 else "green"
    print('{{ id: "{}", group: {}, label: "{}-{}", level: 1, color: "{}" }},'.format(name, i, name, ntype[-1], c))
for u, v, etype in edges:
    print('{{ target: "{}", source: "{}", strength: 0.1 }},'.format(v, u))

# nodes.forEach(function (n) { console.log(n.id, n.fx, n.fy)})
# nodes.forEach(function (n) { console.log(n.id, Math.round(n.fx) - 1950, 2700 - Math.round(n.fy))})
