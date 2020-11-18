import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endpoint: string, query?: object) {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));

  const result = await fetch(uri).then((response) => response.json());

  return result;
}

export default req;
