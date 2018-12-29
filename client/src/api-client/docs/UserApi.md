# apiClient.UserApi

All URIs are relative to *http://localhost:5000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUsers**](UserApi.md#getUsers) | **GET** /users | Users


<a name="getUsers"></a>
# **getUsers**
> [User] getUsers()

Users

The Users endpoint returns information about the Users. 

### Example
```javascript
import apiClient from 'apiClient';
let defaultClient = apiClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: weapon
let weapon = defaultClient.authentications['weapon'];
weapon.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new apiClient.UserApi();
apiInstance.getUsers().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[User]**](User.md)

### Authorization

[weapon](../README.md#weapon)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

