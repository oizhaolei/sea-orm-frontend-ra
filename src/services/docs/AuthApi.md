# AuthApi

All URIs are relative to *http://localhost:8086*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**login**](#login) | **POST** /api/auth/login | Login with email and password|

# **login**
> AuthBody login(userAuth)

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

let userAuth: UserAuth; //login

const { status, data } = await apiInstance.login(
    userAuth
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userAuth** | **UserAuth**| login | |


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

