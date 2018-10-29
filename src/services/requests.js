import {httpClient, getAuthHeader} from './httpClient';
import * as settings from '../settings';

export const getPlatformInfo = async () => {
    const resp = await httpClient.get(settings.PLATFORM_INFO_URI);
    return resp.data;
};
