# CarsApi

All URIs are relative to *http://localhost:3000*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**_delete**](#_delete) | **DELETE** /api/cars/delete/{car_id} | Delete existing Car|
|[**create**](#create) | **POST** /api/cars/create | Create new Car|
|[**list**](#list) | **GET** /api/cars/list | List all available Cars|
|[**search**](#search) | **GET** /api/cars/search | Search all cars|
|[**update**](#update) | **POST** /api/cars/update | Update existing Car|
|[**view**](#view) | **GET** /api/cars/{car_id} | Get single Car by id|

# **_delete**
> string _delete()

Tries to delete a Car from the database.

### Example

```typescript
import {
    CarsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarsApi(configuration);

let carId: number; //Car Id (default to undefined)

const { status, data } = await apiInstance._delete(
    carId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **carId** | [**number**] | Car Id | defaults to undefined|


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
|**200** | Car item deleted successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create**
> Car create(newCar)

Tries to create a new Car in the database.

### Example

```typescript
import {
    CarsApi,
    Configuration,
    NewCar
} from './api';

const configuration = new Configuration();
const apiInstance = new CarsApi(configuration);

let newCar: NewCar; //New Car Information

const { status, data } = await apiInstance.create(
    newCar
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **newCar** | **NewCar**| New Car Information | |


### Return type

**Car**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Car item created successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list**
> Array<Car> list()

Tries to all Cars from the database.

### Example

```typescript
import {
    CarsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarsApi(configuration);

const { status, data } = await apiInstance.list();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Car>**

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
> Array<Car> search()

Tries to get list of cars by query from the database

### Example

```typescript
import {
    CarsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarsApi(configuration);

let name: string; //Car Name (default to undefined)

const { status, data } = await apiInstance.search(
    name
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **name** | [**string**] | Car Name | defaults to undefined|


### Return type

**Array<Car>**

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
> Car update(car)

Tries to update a Car in the database.

### Example

```typescript
import {
    CarsApi,
    Configuration,
    Car
} from './api';

const configuration = new Configuration();
const apiInstance = new CarsApi(configuration);

let car: Car; //Car To Update

const { status, data } = await apiInstance.update(
    car
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **car** | **Car**| Car To Update | |


### Return type

**Car**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Car item updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **view**
> Array<Car> view()

Tries to get single car by id from the database

### Example

```typescript
import {
    CarsApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new CarsApi(configuration);

let carId: number; //Car Id (default to undefined)

const { status, data } = await apiInstance.view(
    carId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **carId** | [**number**] | Car Id | defaults to undefined|


### Return type

**Array<Car>**

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

