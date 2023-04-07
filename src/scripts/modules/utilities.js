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

export { dateFormat };
