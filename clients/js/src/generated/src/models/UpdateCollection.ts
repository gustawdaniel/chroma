/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UpdateCollection
 */
export interface UpdateCollection {
    /**
     * 
     * @type {string}
     * @memberof UpdateCollection
     */
    newName?: string;
    /**
     * 
     * @type {object}
     * @memberof UpdateCollection
     */
    newMetadata?: object;
}

export function UpdateCollectionFromJSON(json: any): UpdateCollection {
    return UpdateCollectionFromJSONTyped(json, false);
}

export function UpdateCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'newName': !exists(json, 'new_name') ? undefined : json['new_name'],
        'newMetadata': !exists(json, 'new_metadata') ? undefined : json['new_metadata'],
    };
}

export function UpdateCollectionToJSON(value?: UpdateCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'new_name': value.newName,
        'new_metadata': value.newMetadata,
    };
}

