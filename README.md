# Collage Prototype

This is the prototype version of [Collage](https://puzzles.mit.edu/2023/interestingthings.museum/puzzles/collage) from MIT Mystery Hunt 2023. It may be useful for prototyping other [Funny Farm](https://devjoe.appspot.com/huntindex/keyword/funnyfarm) puzzles.

This is presented "as-is", meaning the code is a mess, and includes some Collage-specific features.


# Requirements

* Python

# Usage Guide

## For testsolvers

Ask them to open `Puzzle/fixed-web.html`

## For constructors

1. `Nodes.csv` and `Edges.csv` contain vertex and edge data. Files here were exported from Google Sheets.

2. Run `Layout/layout.py` whenever the CSVs change (to update the `constants.js` file).

3. Open `Layout/full-draggable-web.html` to get a drag-and-drop interface. The web is based on a D3 force graph to generate the initial layout. Dragging a node will lock it into the place it's been dropped to.

4. Once satisfied with the web layout, open browser dev console and run `copyPositions()`. This will copy node positioning info to clipboard after a 3 second delay. You'll need to focus the main window within those 3 seconds, if you don't the copy to clipboard will fail. An existing file is in `positionsdump`.

5. Run `Puzzle/locations.py` to convert position dump into `locations.js` file.

6. Now 'Puzzle/fixed-web.html` will be updated and ready for testing.

# Known Issues

The unlock logic in this prototype does an inefficient `O(N^2)` check to determine what nodes to unlock, due to looping over every node whenever 1 node is solved. This can and should be fixed to do the correct `O(N)` algorithm that only iterates over neighbors of the most recently guessed / revealed node.
