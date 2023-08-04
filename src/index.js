import { findMoves } from "./findMoves";
import { Node } from "./Node";

//a helper function to determine if an array of coordinates(in the form [1,1]) has in it a certain coordinate
function arrayIncludes(array1, array2){
    for (let i=0; i<array1.length; i++){
        if (array1[i][0]===array2[0]&&array1[i][1] === array2[1]) return true
    }
    return false
}

//builds a tree with the possible paths a knight can move, till it reaches the desired coordinate
//uses the breadth first algorithm to go through the tree
//the link between the nodes is provided through the "previousNode" value
function knightMoves(start=root, finish, queue=[]){
    let nextMoves=findMoves(start.coord);

    if (arrayIncludes(nextMoves, finish)) return start
        else {
            let i=0;
            let length=nextMoves.length;
                
            while (i<length)
                {
                    let node=new Node(nextMoves[i], start);
                    queue.push(node);
                    i++;
                }
    }
    return knightMoves(queue.shift(), finish, queue)
}

//start and end coordinates
let startingPoint=[1,1];
let end=[8,8];

//root of the tree
let root=new Node(startingPoint);

//displays the path provided by the algorithm in the form of a string
let finalNode=knightMoves(root, end);
let path=`[${end}] `;
let steps=0;

while (finalNode != null){
    path=`[${finalNode.coord}]-> `+ path;
    finalNode=finalNode.previousNode;
    steps++;
}

console.log(`You will need a minimum of ${steps} steps:`, path);
