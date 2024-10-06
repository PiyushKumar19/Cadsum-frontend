"use client"

import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Loader2, Mail, MapPin, Phone } from "lucide-react"
import { getUserProfile } from "./APIs/getProfile"
import { getOrders } from "./APIs/getOrders"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface GetUserProfileResponse {
  id: string;
  name: string;
  email: string;
}

interface OrderProduct {
  id: string
  name: string
  description: string
  version: string
}

interface Order {
  id: string
  userId: string
  remark: string
  orderProducts: OrderProduct[]
  createdOn: string // Adding this as it was in the previous example
  status: string // Adding this as it was in the previous example
}

interface OrderResponse {
  order: Order
}

interface ApiResponse {
  isSuccess: boolean;
  value: GetUserProfileResponse | null;
  error: string;
}

// Custom List component
const List = ({ children }: { children: React.ReactNode }) => (
  <ul className="space-y-1">{children}</ul>
)

// Custom ListItem component
const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="bg-card hover:bg-accent text-sm transition-colors rounded-md hover:border-[1px] hover:border-orange-400">{children}<hr /></li>
)

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("about")
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [profile, setProfile] = useState<GetUserProfileResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: ApiResponse = await getUserProfile();
        if (response.isSuccess && response.value) {
          setProfile(response.value);
        } else {
          console.error("Error:", response.error);
        }
      } catch (error) {
        console.error("Error fetching user profile", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        setOrders(data.value.orders);
      } catch (error) {
        console.error('Error fetching orders', error);
      }
    };

    fetchOrders();
  }, []);

  if (!profile) return <div>Loading...</div>;

  const fetchOrderDetails = async (orderId: string) => {
    setIsLoading(true)
    try {
      // Replace this with your actual API call
      const response = await fetch(`https://localhost:7214/api/Admin/get-order-byId?OrderId=${orderId}`)
      const data: OrderResponse = await response.json()
      setSelectedOrder(data.order)
    } catch (error) {
      console.error("Error fetching order details:", error)
      setSelectedOrder(null)
    } finally {
      setIsLoading(false)
    }
  }

  const handleOrderClick = (order: Order) => {
    fetchOrderDetails(order.id)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Avatar className="w-24 h-24 sm:w-32 sm:h-32">
            <AvatarImage src="/placeholder.svg?height=128&width=128" alt="User avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <CardTitle className="text-2xl sm:text-3xl font-bold">{profile.name}</CardTitle>
            {/* <CardDescription className="text-lg text-muted-foreground">Software Developer</CardDescription> */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-2">
              <Button variant="outline" size="sm">
                <Mail className="mr-2 h-4 w-4" />
                Message
              </Button>
              <Button variant="outline" size="sm">
                Edit Profile
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
            </TabsList>
            <TabsContent value="about">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  {/* <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span> */}
                  <span className="text-black">{profile!.name}</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span className="text-black">{profile!.email}</span>
                </div>
                {/* <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  <span>Joined January 2020</span>
                </div> */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-2">Bio</h3>
                  <p className="text-muted-foreground">
                    Passionate software developer with 5+ years of experience in building web applications.
                    Specializing in React, Node.js, and cloud technologies. Always eager to learn and tackle
                    new challenges in the ever-evolving world of tech.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="orders">
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
          <CardDescription>A list of your recent orders and their status</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[300px]">
            <List>
              {orders.map((order) => (
                <ListItem key={order.id}>
                  <div className="flex justify-between items-center p-4">
                    <div>
                      <h3 className="font-medium">{order.remark}</h3>
                      <p className="text-sm text-muted-foreground">{order.createdOn}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" onClick={() => handleOrderClick(order)}>
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className="font-normal">{selectedOrder?.remark}</DialogTitle>
                            <DialogDescription>
                              Order details for {selectedOrder?.remark}
                            </DialogDescription>
                          </DialogHeader>
                          {isLoading ? (
                            <div className="flex justify-center items-center h-[200px]">
                              <Loader2 className="h-8 w-8 animate-spin" />
                            </div>
                          ) : selectedOrder ? (
                            <div className="mt-4">
                              <h4 className="font-normal">Order ID: {selectedOrder.id}</h4>
                              <p className="text-sm text-muted-foreground">User ID: {selectedOrder.userId}</p>
                              <h5 className="font-normal mt-4">Products:</h5>
                              {selectedOrder.orderProducts.map((product) => (
                                <div key={product.id} className="mt-2">
                                  <h6 className="font-light">{product.name}</h6>
                                  <p className="text-sm">{product.description}</p>
                                  <p className="text-sm text-muted-foreground">Version: {product.version}</p>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-center text-muted-foreground">No order details available</p>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </ListItem>
              ))}
            </List>
          </ScrollArea>
        </CardContent>
      </Card>
    </TabsContent>
            <TabsContent value="projects">
              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Alpha</CardTitle>
                    <CardDescription>A React-based dashboard</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>An intuitive dashboard built with React and D3.js for data visualization.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Project Beta</CardTitle>
                    <CardDescription>Mobile app for task management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>A React Native app for efficient task management and team collaboration.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )


  function getStatusColor(status: string) {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'text-green-600'
      case 'processing':
        return 'text-blue-600'
      case 'shipped':
        return 'text-yellow-600'
      case 'pending':
        return 'text-red-600'
      default:
        return 'text-gray-600'
    }
  }
}