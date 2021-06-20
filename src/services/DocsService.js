import config from '../appConf';

class DocsService {
  static async open() {
    window.open(`${config.uri.api_gateway_uri}docs`);
  }
}

export default DocsService;
