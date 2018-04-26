function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = parseInt(list[i].innerHTML) + n
  }
}

  function deepestChild() {
    let node = document.getElementById('grand-node')
    let childnode = node.children[0]

    while (childnode) {
      node = childnode
      childnode = node.children[0]
    }

    return node
  }
