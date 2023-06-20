/* tslint:disable */
/* eslint-disable */
/**
 * Tacto Codechallange API
 * Dummy API
 *
 * The version of the OpenAPI document: 1.0.0
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
 * @interface Article
 */
export interface Article {
    /**
     *
     * @type {number}
     * @memberof Article
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof Article
     */
    name: string;
    /**
     *
     * @type {Array<number>}
     * @memberof Article
     */
    suppliedBy: Array<number>;
}

export function ArticleFromJSON(json: any): Article {
    return ArticleFromJSONTyped(json, false);
}

export function ArticleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Article {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'id': json['id'],
        'name': json['name'],
        'suppliedBy': json['supplied_by'],
    };
}

export function ArticleToJSON(value?: Article | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'id': value.id,
        'name': value.name,
        'supplied_by': value.suppliedBy,
    };
}
