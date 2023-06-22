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


import * as runtime from '../runtime';
import {
    Department,
    DepartmentFromJSON,
    DepartmentToJSON,
} from '../models';

/**
 * DepartmentsApi - interface
 *
 * @export
 * @interface DepartmentsApiInterface
 */
export interface DepartmentsApiInterface {
    /**
     *
     * @summary fetches all departments in the organization
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DepartmentsApiInterface
     */
    fetchDepartmentsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Department>>>;

    /**
     * fetches all departments in the organization
     */
    fetchDepartments(initOverrides?: RequestInit): Promise<Array<Department>>;

}

/**
 *
 */
export class DepartmentsApi extends runtime.BaseAPI implements DepartmentsApiInterface {

    /**
     * fetches all departments in the organization
     */
    async fetchDepartmentsRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Department>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/departments`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DepartmentFromJSON));
    }

    /**
     * fetches all departments in the organization
     */
    async fetchDepartments(initOverrides?: RequestInit): Promise<Array<Department>> {
        const response = await this.fetchDepartmentsRaw(initOverrides);
        return await response.value();
    }

}
