# UtilsApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**healthcheck**](#healthcheck) | **GET** /api/healthcheck | Healthcheck endpoint|
|[**saveRequestBody**](#saverequestbody) | **POST** /api/upload/{file_name} | Handler that streams the request body to a file.|

# **healthcheck**
> string healthcheck()

Endpoint for k8s healthcheck functionality

### Example

```typescript
import {
    UtilsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UtilsApi(configuration);

const { status, data } = await apiInstance.healthcheck();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **saveRequestBody**
> string saveRequestBody()

POST\'ing to `/upload/foo.txt` will create a file called `foo.txt`. For example: curl -i -X POST http://localhost:3000/api/upload/README.md --data-binary \"@README.md\"

### Example

```typescript
import {
    UtilsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UtilsApi(configuration);

let fileName: string; //file name to uploaded (default to undefined)

const { status, data } = await apiInstance.saveRequestBody(
    fileName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **fileName** | [**string**] | file name to uploaded | defaults to undefined|


### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | pdf upload successfully. |  -  |
|**400** | pdf upload error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

