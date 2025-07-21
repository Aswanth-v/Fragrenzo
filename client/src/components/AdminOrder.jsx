import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import AdminOrderDetails from "./AdminOrderDetails";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrdersForAdmin,
  getOrderDetailsForAdmin,
  resetOrderDetails,
} from "../redux/Admin/Order-slice";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent } from "./ui/dialog";

function AdminOrdersView() {
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const dispatch = useDispatch();
  const { orderList, orderDetails } = useSelector((state) => state.adminOrder);

  useEffect(() => {
    dispatch(getAllOrdersForAdmin());
  }, [dispatch]);

  useEffect(() => {
    if (orderDetails) {
      setOpenDetailsDialog(true);
    }
  }, [orderDetails]);

  const handleFetchOrderDetails = (id) => {
    setSelectedOrderId(id);
    dispatch(getOrderDetailsForAdmin(id));
  };

  const handleCloseDialog = () => {
    setOpenDetailsDialog(false);
    dispatch(resetOrderDetails());
  };

  const handleStatusUpdate = () => {
    if (selectedOrderId) {
      dispatch(getOrderDetailsForAdmin(selectedOrderId));
    }
    dispatch(getAllOrdersForAdmin());
  };

  return (
    <>
      <Card className="shadow-lg rounded-2xl p-4">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl font-bold text-gray-800">
            All Orders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table className="min-w-full border rounded-md">
              <TableHeader>
                <TableRow className="bg-gray-100 text-gray-700">
                  <TableHead className="text-sm font-semibold">
                    Order ID
                  </TableHead>
                  <TableHead className="text-sm font-semibold">
                    Order Date
                  </TableHead>
                  <TableHead className="text-sm font-semibold">
                    Order Status
                  </TableHead>
                  <TableHead className="text-sm font-semibold">
                    Total Price
                  </TableHead>
                  <TableHead>
                    <span className="sr-only">Details</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orderList && orderList.length > 0 ? (
                  orderList.map((orderItem) => (
                    <TableRow
                      key={orderItem._id}
                      className="hover:bg-gray-50 transition duration-150"
                    >
                      <TableCell className="text-sm">{orderItem._id}</TableCell>
                      <TableCell className="text-sm">
                        {orderItem.orderDate?.split("T")[0]}
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={`text-xs py-1 px-3 rounded-full ${
                            orderItem.orderStatus === "confirmed"
                              ? "bg-green-500 text-white"
                              : orderItem.orderStatus === "rejected"
                              ? "bg-red-500 text-white"
                              : "bg-gray-700 text-white"
                          }`}
                        >
                          {orderItem.orderStatus}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm font-medium">
                        ₹{orderItem.totalAmount}
                      </TableCell>
                      <TableCell>
                        <Button
                          onClick={() => handleFetchOrderDetails(orderItem._id)}
                          className="text-sm px-3"
                        >
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="text-center text-gray-500 py-4"
                    >
                      No orders found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={openDetailsDialog} onOpenChange={handleCloseDialog}>
        <DialogContent className="max-w-3xl w-full">
          {orderDetails && (
            <AdminOrderDetails
              orderDetails={orderDetails}
              onStatusUpdated={handleStatusUpdate}
              onClose={handleCloseDialog}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AdminOrdersView;
