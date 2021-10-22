/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let current = root;
    let depth = 0;
    function traverse(node, level) {
        if(node === null) return;
    if(node.left) {
        traverse(node.left, level + 1);
    }
     if(node.right) {
         traverse(node.right, level + 1);
     }
        depth = Math.max(depth, level);
    }
    traverse(current, 1);
    return depth;
};