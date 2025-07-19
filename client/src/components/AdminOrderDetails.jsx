import { useState } from "react";
import Form from "./ui/Form";
import { DialogContent } from "./ui/dialog";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllOrdersForAdmin,
  getOrderDetailsForAdmin,
  updateOrderStatus,
} from "../redux/Admin/Order-slice";
import { useToast } from "../hooks/use-toast";

const initialFormData = {
  status: "",
};

function AdminOrderDetails({ orderDetails, onStatusUpdated }) {
  const [formData, setFormData] = useState(initialFormData);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function handleUpdateStatus(event) {
    event.preventDefault();
    const { status } = formData;

    dispatch(updateOrderStatus({ id: orderDetails?._id, orderStatus: status }))
      .then((data) => {
        if (data?.payload?.success) {
          dispatch(getOrderDetailsForAdmin(orderDetails?._id));
          dispatch(getAllOrdersForAdmin());

          if (onStatusUpdated) {
            onStatusUpdated();
          }

          setFormData(initialFormData);
          toast({ title: data?.payload?.message });
        }
      });
  }

  return (
    <DialogContent className="sm:max-w-[700px] h-[90vh] overflow-hidden rounded-2xl shadow-lg bg-background">
      <div className="h-full overflow-y-auto p-6 space-y-6">
        <div className="space-y-3">
          <div className="text-xl font-semibold text-gray-800">Order Summary</div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Order ID:</span>
              <Label>{orderDetails?._id}</Label>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Order Date:</span>
              <Label>{orderDetails?.orderDate?.split("T")[0]}</Label>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Order Price:</span>
              <Label>₹{orderDetails?.totalAmount}</Label>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Payment Method:</span>
              <Label>{orderDetails?.paymentMethod}</Label>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Payment Status:</span>
              <Label>{orderDetails?.paymentStatus}</Label>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Order Status:</span>
              <Badge
                className={`py-1 px-3 capitalize ${
                  orderDetails?.orderStatus === "confirmed"
                    ? "bg-green-500"
                    : orderDetails?.orderStatus === "rejected"
                    ? "bg-red-600"
                    : "bg-black"
                }`}
              >
                {orderDetails?.orderStatus}
              </Badge>
            </div>
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <div className="text-lg font-medium text-gray-800">Order Items</div>
          <ul className="space-y-2 text-sm">
            {orderDetails?.cartItems?.map((item, index) => (
              <li
                key={index}
                className="flex flex-wrap justify-between bg-gray-100 p-3 rounded-md"
              >
                <span className="font-medium">Title: {item.title}</span>
                <span>Qty: {item.quantity}</span>
                <span>Price: ₹{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        <div className="space-y-3">
          <div className="text-lg font-medium text-gray-800">Shipping Info</div>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>{user?.userName}</p>
            <p>{orderDetails?.addressInfo?.address}</p>
            <p>{orderDetails?.addressInfo?.city}</p>
            <p>{orderDetails?.addressInfo?.pincode}</p>
            <p>{orderDetails?.addressInfo?.phone}</p>
            <p>{orderDetails?.addressInfo?.notes}</p>
          </div>
        </div>

        <Separator />

        <Form
          formControls={[
            {
              label: "Order Status",
              name: "status",
              componentType: "select",
              options: [
                { id: "pending", label: "Pending" },
                { id: "inProcess", label: "In Process" },
                { id: "inShipping", label: "In Shipping" },
                { id: "delivered", label: "Delivered" },
                { id: "rejected", label: "Rejected" },
              ],
            },
          ]}
          formdata={formData}
          setFormdata={setFormData}
          buttonText={"Update Order Status"}
          onSubmit={handleUpdateStatus}
        />
      </div>
    </DialogContent>
  );
}

export default AdminOrderDetails;
