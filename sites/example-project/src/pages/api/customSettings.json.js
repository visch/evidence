import fs from 'fs';
import path from 'path';
import { dev } from '$app/env';

const CUSTOM_SETTINGS_FILE = '.custom-settings.json';

function getCustomSettings() {
    //TODO need to figure out where this actually ends up and needs to be packaged, currently in sites/example-project/.custom-settings.json
    let customSettingsPath = path.join(path.resolve('./'), CUSTOM_SETTINGS_FILE);
    if (fs.existsSync(customSettingsPath)) {
        return JSON.parse(fs.readFileSync(customSettingsPath, 'utf8'));
    }
}

function saveCustomSettings(customSettings) {
    let customSettingsPath = path.join(path.resolve('./'), CUSTOM_SETTINGS_FILE);
    fs.writeFileSync(customSettingsPath, JSON.stringify(customSettings, null, 2));
}

export async function get() {
    if (!dev) {
        return {
            status: 404
        }
    } else { 
        let customSettings = { value: "not-set-from-custom-settings.json.js" };
        try{
            customSettings = getCustomSettings() || customSettings;
        } catch {
            //TODO logError
        }
        let result = { customSettings };
        console.log(`DEBUG result => ${JSON.stringify(result, null, 2)}`); //TODO DEBUG

        return {
            header: "accept: application/json",
            status: 200,
            body: result
        }
    }
}

export function post(request) {
    let body = JSON.parse(request.body);
    console.log(`DEBUG customSettings POST body = ${JSON.stringify(body, null, 2)}`); //TODO DEBUG
    const { newCustomFormat } = JSON.parse(request.body);

    console.log(`DEBUG post newCustomFormat => ${JSON.stringify(newCustomFormat)}`);  //TODO DEBUG

    let customSettings = getCustomSettings() || {};

    if (newCustomFormat) {
        if (!customSettings.customFormats) {
            customSettings.customFormats = [];
        }
        if (newCustomFormat.formatName && newCustomFormat.formatValue) {
            customSettings.customFormats.push(newCustomFormat);
        }
        saveCustomSettings(customSettings);
        console.log(`DEBUG wrote to customSettings => ${JSON.stringify(customSettings,  null, 2)}`); //TODO DEBUG
    }
    return {  body: customSettings };

}