// in src/Dashboard.tsx
import { Card, CardContent, CardHeader } from "@mui/material";
import { useGetList } from "react-admin";
import { SalesValueByDay } from "./SalesValueByDay";

export const Dashboard = () => {
  const { data: sales_value_by_day } = useGetList("dashboard", {
    filter: {
      graph: "sales_value_by_day",
      from: "2024-12-22T00:00:00",
      to: "2024-12-28T23:59:59",
    },
  });

  return (
    <div>
      <Card>
        <CardHeader title="Welcome to the administration" />
        <CardContent style={{ width: 500, height: 300 }}>
          <SalesValueByDay data={sales_value_by_day} />
        </CardContent>
      </Card>
    </div>
  );
};
