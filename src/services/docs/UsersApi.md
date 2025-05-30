# UsersApi

All URIs are relative to *http://localhost:8086*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**profile**](#profile) | **GET** /api/user/current | Get single User by username|

# **profile**
> CurrentResponse profile()

Tries to get single user by username from the database

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.profile();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CurrentResponse**

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

