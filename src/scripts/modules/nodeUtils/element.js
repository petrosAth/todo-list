const createNewNode = (element) => document.createElement(element);

const addIdentifier = (node, identifiers) => {
  if (identifiers.classes) {
    node.classList.add(...[].concat(identifiers.classes));
  }
  if (identifiers.id) {
    node.setAttribute('id', identifiers.id);
  }
  if (identifiers.data) {
    node.dataset[identifiers.data[0]] = identifiers.data[1];
  }
};

const addContent = (node, content) => {
  const element = {
    IMG: () => (node.src = content.image || ''),
    A: () => {
      node.href = content.link || '';
      node.textContent = content.text || '';
      node.target = content.newTab || '';
    },
  };

  if (node.nodeName in element) {
    element[node.nodeName]();
  } else {
    node.textContent = content.text;
  }
};

const createNewElement = (element, identifiers, content) => {
  const newNode = createNewNode(element);

  if (identifiers) addIdentifier(newNode, identifiers);
  if (content) addContent(newNode, content);

  return newNode;
};

const appendChildren = (elementPairs) => {
  elementPairs.forEach((pair) => {
    if (pair[1]) {
      if (Array.isArray(pair[1])) {
        pair[1].forEach((child) => {
          if (child) {
            pair[0].appendChild(child);
          }
        });
      } else {
        pair[0].appendChild(pair[1]);
      }
    }
  });
};

export { createNewElement, appendChildren };
