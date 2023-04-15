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
 * @interface UpdateEmbedding
 */
export interface UpdateEmbedding {
    /**
     *
     * @type {Array<any>}
     * @memberof UpdateEmbedding
     */
    embeddings?: Array<any>;
    /**
     *
     * @type {Array<any> | object}
     * @memberof UpdateEmbedding
     */
    metadatas?: Array<any> | object | null;
    /**
     *
     * @type {string | Array<any>}
     * @memberof UpdateEmbedding
     */
    documents?: string | Array<any> | null;
    /**
     *
     * @type {string | Array<any>}
     * @memberof UpdateEmbedding
     */
    ids?: string | Array<any> | null;
    /**
     *
     * @type {boolean}
     * @memberof UpdateEmbedding
     */
    incrementIndex?: boolean;
}

export function UpdateEmbeddingFromJSON(json: any): UpdateEmbedding {
    return UpdateEmbeddingFromJSONTyped(json, false);
}

export function UpdateEmbeddingFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateEmbedding {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'embeddings': !exists(json, 'embeddings') ? undefined : json['embeddings'],
        'metadatas': !exists(json, 'metadatas') ? undefined : json['metadatas'],
        'documents': !exists(json, 'documents') ? undefined : json['documents'],
        'ids': !exists(json, 'ids') ? undefined : json['ids'],
        'incrementIndex': !exists(json, 'increment_index') ? undefined : json['increment_index'],
    };
}

export function UpdateEmbeddingToJSON(value?: UpdateEmbedding | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'embeddings': value.embeddings,
        'metadatas': value.metadatas,
        'documents': value.documents,
        'ids': value.ids,
        'increment_index': value.incrementIndex,
    };
}

