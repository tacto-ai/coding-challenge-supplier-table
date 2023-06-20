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
 * @interface User
 */
export interface User {
    /**
     *
     * @type {number}
     * @memberof User
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof User
     */
    firstName: string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    lastName: string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    email: string;
    /**
     *
     * @type {number}
     * @memberof User
     */
    organizationId: number;
    /**
     *
     * @type {Array<number>}
     * @memberof User
     */
    departmentIds: Array<number>;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {

        'id': json['id'],
        'firstName': json['first_name'],
        'lastName': json['last_name'],
        'email': json['email'],
        'organizationId': json['organization_id'],
        'departmentIds': json['department_ids'],
    };
}

export function UserToJSON(value?: User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {

        'id': value.id,
        'first_name': value.firstName,
        'last_name': value.lastName,
        'email': value.email,
        'organization_id': value.organizationId,
        'department_ids': value.departmentIds,
    };
}
