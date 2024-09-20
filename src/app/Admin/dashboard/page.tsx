'use client'

import { useEffect, useState } from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import axios from "axios"

interface ApiResponse {
  isSuccess: boolean;
  value: {
    orders: MonthlyOrderData[];
  };
  error: string;
}

interface MonthlyOrderData {
  month: string;
  products: { [productName: string]: number };
}

interface ChartDataPoint {
  month: string;
  [productName: string]: number | string;
}

const Dashboard: React.FC = () => {
  const [chartData, setChartData] = useState<ChartDataPoint[]>([])
  const [productNames, setProductNames] = useState<string[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>("https://localhost:7214/api/Dashboard/get-order-by-month");
        console.log(response.data);
        const data: MonthlyOrderData[] = response.data.value.orders;

        const allProductNames = new Set<string>();
        data.forEach(order => {
          Object.keys(order.products).forEach(productName => {
            allProductNames.add(productName);
          });
        });
        const uniqueProductNames = Array.from(allProductNames);

        setProductNames(uniqueProductNames);

        // Ensure all months have entries for all products
        const formattedChartData: ChartDataPoint[] = data.map(({ month, products }) => {
          const monthData: ChartDataPoint = { month };
          uniqueProductNames.forEach(productName => {
            monthData[productName] = products[productName] || 0;
          });
          return monthData;
        });

        setChartData(formattedChartData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const chartConfig = {
    ...productNames.reduce((acc, productName, index) => {
      acc[productName] = {
        label: productName,
        color: `hsl(${index * 360 / productNames.length}, 70%, 50%)`,
      };
      return acc;
    }, {} as Record<string, { label: string; color: string }>),
  };

  // Custom ticks for y-axis
  const customYAxisTicks = [0, 1, 2, 4, 6, 8, 10];

  // Function to format y-axis ticks
  const formatYAxis = (value: number) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value.toString();
  };

  return (
    <div className="">
      <Card className="size-96">
        <CardHeader>
          <CardTitle>Product Sales - Stacked</CardTitle>
          <CardDescription>
            Showing product sales for the last 6 months
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[400px]">
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis 
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  ticks={customYAxisTicks}
                  domain={[0, 'dataMax']}
                  tickFormatter={formatYAxis}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" />}
                />
                {productNames.map((productName, index) => (
                  <Area
                    key={productName}
                    dataKey={productName}
                    type="natural"
                    fill={`hsl(${index * 360 / productNames.length}, 70%, 50%)}`}
                    fillOpacity={0.4}
                    stroke={`hsl(${index * 360 / productNames.length}, 70%, 50%)}`}
                    stackId="a"
                  />
                ))}
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                Trending up by 5.2% this month
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                January - June 2024
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Dashboard