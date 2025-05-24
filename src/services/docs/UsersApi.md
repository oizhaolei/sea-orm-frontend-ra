# UsersApi

All URIs are relative to *http://localhost:8086*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**view**](#view) | **GET** /api/users/current | Get single User by username|

# **view**
> Array<UserBody> view()

Tries to get single user by username from the database

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.view();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<UserBody>**

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

