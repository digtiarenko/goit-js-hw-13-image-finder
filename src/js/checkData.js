import alert from './pnotify';

function checkData(data) {
  if (!data) {
    return false;
  }

  if (data.status === 404) {
    alert({
      text: 'Country is not found',
    });
    return false;
  }

  if (data.length > 10) {
    alert({
      text: 'Too many matches found. Please specify your request',
    });
    return false;
  }

  return true;
}

function checkName(name) {
  if (!name) {
    return false;
  }

  if (name === ' ') {
    return false;
  }

  return true;
}

export { checkData, checkName };
