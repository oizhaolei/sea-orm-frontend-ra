# AuthApi

All URIs are relative to *http://localhost:8086*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**login**](#login) | **POST** /api/auth/login | Login|

# **login**
> LoginResponse login(passwordLoginParams)

Try to login via a User in the database.

### Example

```typescript
import {
    AuthApi,
    Configuration,
    PasswordLoginParams
} from './api';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let passwordLoginParams: PasswordLoginParams; //login

const { status, data } = await apiInstance.login(
    passwordLoginParams
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **passwordLoginParams** | **PasswordLoginParams**| login | |


### Return type

**LoginResponse**

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

