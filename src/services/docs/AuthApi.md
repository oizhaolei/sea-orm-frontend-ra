# AuthApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authorize**](#authorize) | **POST** /api/auth/authorize | Authorize with username and password|
|[**profile**](#profile) | **POST** /api/auth/profile | Account profile|

# **authorize**
> AuthBody authorize(userAuth)

Tries to login via a User in the database.

### Example

```typescript
import {
    AuthApi,
    Configuration,
    UserAuth
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let userAuth: UserAuth; //authorize

const { status, data } = await apiInstance.authorize(
    userAuth
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userAuth** | **UserAuth**| authorize | |


### Return type

**AuthBody**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User login successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profile**
> User profile()

Current user profile

### Example

```typescript
import {
    AuthApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.profile();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**User**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

