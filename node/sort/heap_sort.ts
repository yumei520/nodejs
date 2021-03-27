function completeBinaryTreeParentIndex(index) {
    return index / 2;
}
function completeBinaryTreeLeftIndex(index) {
    return 2 * index;
}
function completeBinaryTreeRightIndex(index) {
    return 2 * index + 1;
}
function maxHeapify(isOrNoLargestArray, parentIndex) {
    let maxHeapifyIndex;
    let maxHeapifyLeftIndex = completeBinaryTreeLeftIndex(parentIndex);
    let maxHeapifyRightIndex = completeBinaryTreeRightIndex(parentIndex);
    if (maxHeapifyLeftIndex <= isOrNoLargestArray.length && isOrNoLargestArray[maxHeapifyLeftIndex] > isOrNoLargestArray[parentIndex]) {
        maxHeapifyIndex = maxHeapifyLeftIndex;
    } else {
        maxHeapifyIndex = parentIndex;
    }
    if (isOrNoLargestArray[maxHeapifyRightIndex] > isOrNoLargestArray[maxHeapifyIndex]) {
        maxHeapifyIndex = maxHeapifyRightIndex;
    }

    if(maxHeapifyIndex != parentIndex){
        let temp = isOrNoLargestArray[parentIndex];
        isOrNoLargestArray[parentIndex] = isOrNoLargestArray[maxHeapifyIndex];
        isOrNoLargestArray[maxHeapifyIndex] = temp;
        maxHeapify(isOrNoLargestArray,maxHeapifyIndex)
    }
}
function heapSort(){
   let numberArray = [12,23,17,6,13,10,1,5,7,14];
   maxHeapify(numberArray,0);
   console.log(numberArray);
}
heapSort();