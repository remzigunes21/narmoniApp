import NrmApi from './nrmApi';
import CustomHttpService from '../../Services/CustomHttpService';
import Config from '../../config/env-config';

const nrmApi = new NrmApi();
const customHttpService = new CustomHttpService();

customHttpService.setConfig({
  API_PATH: Config.API_PATH, // "http://localhost:2222" // 'https://www.biryudumkitap.com' //
});

nrmApi.setHttpService(customHttpService);

export default nrmApi;
