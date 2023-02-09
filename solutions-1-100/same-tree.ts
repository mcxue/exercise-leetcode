// 100. 相同的树 https://leetcode.cn/problems/same-tree/

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

/**
 * 递归求解，代码简洁优雅
 * @param p
 * @param q
 */
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null || q === null) { // 当有一个节点为 null，可以直接判断出结果
    return p === null && q === null;
  }
  if (p.val !== q.val) return false; // 当两个节点的值不同时，可以判断结果为 false
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

/**
 * 预期结果 true
 */
// const tree1 = new TreeNode(1);
// tree1.left = new TreeNode(2);
// tree1.right = new TreeNode(3);
// const tree2 = new TreeNode(1);
// tree2.left = new TreeNode(2);
// tree2.right = new TreeNode(3);
// console.log(isSameTree(tree1, tree2));

/**
 * 稍微高级一点的，用循环改写，按层遍历树，然后判断两棵树是否相同
 * @param p
 * @param q
 */
function isSameTree2(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null || q === null) { // 当有一个节点为 null，可以直接判断出结果
    return p === null && q === null;
  }
  const queue1: TreeNode[] = [];
  const queue2: TreeNode[] = [];
  queue1.push(p);
  queue2.push(q);
  while (queue1.length >= 1 && queue2.length >= 1) {
    const node1 = queue1.shift() as TreeNode;
    const node2 = queue2.shift() as TreeNode;
    if (node1.val !== node2.val) return false;
    if (node1.left && node2.left) {
      queue1.unshift(node1.left);
      queue2.unshift(node2.left);
    } else if (!(node1.left === null && node2.left === null)) { // 一个节点有 left，一个节点无 left，可以判断为 false
      return false;
    }
    if (node1.right && node2.right) {
      queue1.unshift(node1.right);
      queue2.unshift(node2.right);
    } else if (!(node1.right === null && node2.right === null)) { // 一个节点有 right，一个节点无 right，可以判断为 false
      return false;
    }
  }
  return queue1.length === queue2.length;
}

/**
 * 预期结果 true
 */
// const tree1 = new TreeNode(1);
// tree1.left = new TreeNode(2);
// tree1.right = new TreeNode(3);
// const tree2 = new TreeNode(1);
// tree2.left = new TreeNode(2);
// tree2.right = new TreeNode(3);
// console.log(isSameTree2(tree1, tree2));
