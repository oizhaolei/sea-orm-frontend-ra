# UsersApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**_delete**](#_delete) | **DELETE** /api/users/delete/{username} | Delete existing User|
|[**create**](#create) | **POST** /api/users/create | Create new User|
|[**list**](#list) | **GET** /api/users/list | List Users|
|[**update**](#update) | **POST** /api/users/update | Update existing User|
|[**view**](#view) | **GET** /api/users/{username} | Get single User by username|

# **_delete**
> string _delete()

Tries to delete a User from the database.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let username: string; //User Id (default to undefined)

const { status, data } = await apiInstance._delete(
    username
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **username** | [**string**] | User Id | defaults to undefined|


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
|**200** | User item deleted successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create**
> User create(userAuth)

Tries to create a new User in the database.

### Example

```typescript
import {
    UsersApi,
    Configuration,
    UserAuth
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userAuth: UserAuth; //New User Information

const { status, data } = await apiInstance.create(
    userAuth
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userAuth** | **UserAuth**| New User Information | |


### Return type

**User**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | User item created successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list**
> UserList list()

Tries to all Users from the database.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let name: string; //User Name (optional) (default to undefined)
let ids: string; //ids (optional) (default to undefined)
let page: number; //Page (optional) (default to undefined)
let perPage: number; //PerPage (optional) (default to undefined)
let field: string; //Field (optional) (default to undefined)
let order: string; //Order (optional) (default to undefined)

const { status, data } = await apiInstance.list(
    name,
    ids,
    page,
    perPage,
    field,
    order
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | User Name | (optional) defaults to undefined|
| **ids** | [**string**] | ids | (optional) defaults to undefined|
| **page** | [**number**] | Page | (optional) defaults to undefined|
| **perPage** | [**number**] | PerPage | (optional) defaults to undefined|
| **field** | [**string**] | Field | (optional) defaults to undefined|
| **order** | [**string**] | Order | (optional) defaults to undefined|


### Return type

**UserList**

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
> User update(user)

Tries to update a User in the database.

### Example

```typescript
import {
    UsersApi,
    Configuration,
    User
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let user: User; //User To Update

const { status, data } = await apiInstance.update(
    user
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **user** | **User**| User To Update | |


### Return type

**User**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | User item updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **view**
> User view()

Tries to get single user by username from the database

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let username: string; //User Id (default to undefined)

const { status, data } = await apiInstance.view(
    username
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **username** | [**string**] | User Id | defaults to undefined|


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

