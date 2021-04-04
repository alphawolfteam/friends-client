import config from '../appConf';

class DocsService {
  static async redirect() {
    window.location.replace(`${config.uri.api_gateway_uri}docs`);
  }
}

export default DocsService;
