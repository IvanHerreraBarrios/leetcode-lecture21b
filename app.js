var constructMaximumBinaryTree = function(nums) {
    if(nums.length === 0) return null;
    let maxIndex = maxNumIndex(nums);
    const root = new TreeNode(nums[maxIndex]);

    const left = nums.slice(0, maxIndex)
    const right = nums.slice(maxIndex + 1)

    root.left = constructMaximumBinaryTree(left)
    root.right = constructMaximumBinaryTree(right)

    return root
};

var maxNumIndex = function(arr){
    let maxIndex = 0
    let maxValue = arr[0]
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > maxValue){
            maxIndex = i
            maxValue = arr[i]
        }
    }
    return maxIndex
}


//version 2

var constructRec = function(nums, leftIdx, rightIdx){
    if (leftIdx > rightIdx) return null ;
    let maxIndex = maxNumIndex(nums, leftIdx, rightIdx)
    const root = new TreeNode(nums[maxIndex])

    root.left = constructRec(nums, leftIdx, maxIndex - 1)
    root.right = constructRec(nums, maxIndex + 1, rightIdx)

    return root 
}

var maxNumIndex = function(arr, leftIdx, rightIdx){
    let maxIndex = leftIdx
    let maxValue = arr[leftIdx]
    for(let i = 1; i <= rightIdx; i++){
        if(arr[i] > maxValue){
            maxIndex = i
            maxValue = arr[i]
        }
    }
    return maxIndex
}