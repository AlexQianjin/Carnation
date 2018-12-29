# apiClient.ProjectApi

All URIs are relative to *http://localhost:5000/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProject**](ProjectApi.md#getProject) | **GET** /project | Project


<a name="getProject"></a>
# **getProject**
> Object getProject()

Project

The Project endpoint returns information about the Project. 

### Example
```javascript
import apiClient from 'apiClient';
let defaultClient = apiClient.ApiClient.instance;

// Configure OAuth2 access token for authorization: weapon
let weapon = defaultClient.authentications['weapon'];
weapon.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new apiClient.ProjectApi();
apiInstance.getProject().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[weapon](../README.md#weapon)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

