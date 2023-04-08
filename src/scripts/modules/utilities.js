import format from 'date-fns/format';
import parse from 'date-fns/parse';

const dateFormat = () => {
  const dateFormat = "yyyy-MM-dd'T'H:mm";

  const toString = (dateArray) => {
    if (Array.isArray(dateArray)) {
      return format(new Date(...dateArray), dateFormat);
    }
    return;
  };

  const toDate = (dateString) => {
    return parse(dateString, dateFormat, new Date());
  };

  return {
    toString,
    toDate,
  };
};

const createNewNode = (element) => document.createElement(element);

const addClassesAndId = (node, classesAndId) => {
  if (classesAndId.classes) {
    node.classList.add(...[].concat(classesAndId.classes));
  }
  if (classesAndId.id) {
    node.setAttribute('id', classesAndId.id);
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

const createNewElement = (element, classesAndId, content) => {
  const newNode = createNewNode(element);

  if (classesAndId) addClassesAndId(newNode, classesAndId);
  if (content) addContent(newNode, content);

  return newNode;
};

const appendChildren = (elementPairs) => {
  elementPairs.forEach((pair) => {
    if (Array.isArray(pair[1])) {
      pair[1].forEach((child) => {
        pair[0].appendChild(child);
      });
    } else {
      pair[0].appendChild(pair[1]);
    }
  });
};

export { createNewElement, appendChildren, dateFormat };
