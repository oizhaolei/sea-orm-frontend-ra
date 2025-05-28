# AdminsApi

All URIs are relative to *http://localhost:8086*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**dashboard**](#dashboard) | **POST** /api/admin/dashboard | Graph data for dashboard|

# **dashboard**
> Array<DashboardDatum> dashboard(dashboardBody)

Graph data for dashboard

### Example

```typescript
import {
    AdminsApi,
    Configuration,
    DashboardBody
} from './api';

const configuration = new Configuration();
const apiInstance = new AdminsApi(configuration);

let dashboardBody: DashboardBody; //dashboard

const { status, data } = await apiInstance.dashboard(
    dashboardBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dashboardBody** | **DashboardBody**| dashboard | |


### Return type

**Array<DashboardDatum>**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Retrieve graph data successfully |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

