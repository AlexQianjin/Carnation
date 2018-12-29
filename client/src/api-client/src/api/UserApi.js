/**
 * Weapon API
 * Move your app forward with the Weapon API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Error from '../model/Error';
import User from '../model/User';

/**
* User service.
* @module api/UserApi
* @version 1.0.0
*/
export default class UserApi {

    /**
    * Constructs a new UserApi. 
    * @alias module:api/UserApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Users
     * The Users endpoint returns information about the Users. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/User>} and HTTP response
     */
    getUsersWithHttpInfo() {
      let postBody = null;


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['weapon'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [User];

      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Users
     * The Users endpoint returns information about the Users. 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/User>}
     */
    getUsers() {
      return this.getUsersWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
