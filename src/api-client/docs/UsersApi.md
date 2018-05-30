# apiClient.UsersApi

All URIs are relative to *http://localhost:5000/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersGet**](UsersApi.md#usersGet) | **GET** /users | Users


<a name="usersGet"></a>
# **usersGet**
> [User] usersGet()

Users

The Users endpoint returns information about the Users. 

### Example
```javascript
var apiClient = require('apiClient');
var defaultClient = apiClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: weapon
var weapon = defaultClient.authentications['weapon'];
weapon.accessToken = 'YOUR ACCESS TOKEN';

var apiInstance = new apiClient.UsersApi();
apiInstance.usersGet().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
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

