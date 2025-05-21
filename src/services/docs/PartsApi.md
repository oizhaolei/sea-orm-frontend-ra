# PartsApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**_delete**](#_delete) | **DELETE** /api/parts/delete/{part_id} | Delete existing Part|
|[**create**](#create) | **POST** /api/parts/create | Create new Part|
|[**list**](#list) | **GET** /api/parts/list | List all available Parts|
|[**search**](#search) | **GET** /api/parts/search | Search all parts|
|[**update**](#update) | **POST** /api/parts/update | Update existing Part|
|[**view**](#view) | **GET** /api/parts/{part_id} | Get single Part by id|

# **_delete**
> string _delete()

Tries to delete a Part from the database.

### Example

```typescript
import {
    PartsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PartsApi(configuration);

let partId: number; //Part Id (default to undefined)

const { status, data } = await apiInstance._delete(
    partId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **partId** | [**number**] | Part Id | defaults to undefined|


### Return type

**string**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Part item deleted successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create**
> Part create(newPart)

Tries to create a new Part in the database.

### Example

```typescript
import {
    PartsApi,
    Configuration,
    NewPart
} from './api';

const configuration = new Configuration();
const apiInstance = new PartsApi(configuration);

let newPart: NewPart; //New Part Information

const { status, data } = await apiInstance.create(
    newPart
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newPart** | **NewPart**| New Part Information | |


### Return type

**Part**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Part item created successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list**
> Array<Part> list()

Tries to all Parts from the database.

### Example

```typescript
import {
    PartsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PartsApi(configuration);

const { status, data } = await apiInstance.list();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Part>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search**
> Array<Part> search()

Tries to get list of parts by query from the database

### Example

```typescript
import {
    PartsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PartsApi(configuration);

let name: string; //Part Name (default to undefined)

const { status, data } = await apiInstance.search(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Part Name | defaults to undefined|


### Return type

**Array<Part>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update**
> Part update(part)

Tries to update a Part in the database.

### Example

```typescript
import {
    PartsApi,
    Configuration,
    Part
} from './api';

const configuration = new Configuration();
const apiInstance = new PartsApi(configuration);

let part: Part; //Part To Update

const { status, data } = await apiInstance.update(
    part
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **part** | **Part**| Part To Update | |


### Return type

**Part**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Part item updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **view**
> Array<Part> view()

Tries to get single part by id from the database

### Example

```typescript
import {
    PartsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new PartsApi(configuration);

let partId: number; //Part Id (default to undefined)

const { status, data } = await apiInstance.view(
    partId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **partId** | [**number**] | Part Id | defaults to undefined|


### Return type

**Array<Part>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

