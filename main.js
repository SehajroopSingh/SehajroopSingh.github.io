import ForceGraph3D from '3d-force-graph';

const graphData = {
    "nodes": [
        {
          "id": "id1",
          "name": "name1",
          "val": 1
        },
        {
          "id": "id2",
          "name": "name2",
          "val": 10
        },
    ],
    "links": [
        {
            "source": "id1",
            "target": "id2"
        },
    ]
};

const myGraph = ForceGraph3D();
myGraph(document.getElementById('3d-graph'))
  .graphData(graphData);


// Add a "Hello" message
const helloMessage = document.createElement('h1'); // Create a <h1> element
helloMessage.textContent = 'Hello, welcome to my 3D Force-Directed Graph project!'; // Set its text content
document.body.insertBefore(helloMessage, document.getElementById('3d-graph')); // Insert it before the graph container