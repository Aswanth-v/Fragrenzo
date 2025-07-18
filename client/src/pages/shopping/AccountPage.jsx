import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import Banner2 from "../../assets/Banner2.png";
import Address from "../../components/Address";
import ShoppingOrders from "../../components/Orders";

const AccountPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <div className="relative h-[280px] w-full overflow-hidden">
        <img
          src={Banner2}
          alt="Account Banner"
          className="h-full w-full object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-4xl sm:text-5xl font-bold drop-shadow-xl">
            Welcome Back
          </h1>
          <p className="text-zinc-200 mt-2 text-md sm:text-lg drop-shadow-sm">
            Manage your orders & address details easily
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 py-10">
        <div className="rounded-3xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 shadow-xl p-6 sm:p-8">
          <Tabs defaultValue="orders" className="w-full">
            {/* Tab Navigation */}
            <TabsList className="grid grid-cols-2 bg-zinc-100 dark:bg-zinc-800 rounded-xl overflow-hidden mb-6">
              <TabsTrigger
                value="orders"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:text-black dark:data-[state=active]:text-white text-center py-3 font-semibold transition-all"
              >
                🧾 Orders
              </TabsTrigger>
              <TabsTrigger
                value="address"
                className="data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-900 data-[state=active]:text-black dark:data-[state=active]:text-white text-center py-3 font-semibold transition-all"
              >
                🏠 Address
              </TabsTrigger>
            </TabsList>

            {/* Tab Content */}
            <div className="min-h-[200px]">
              <TabsContent value="orders">
                <ShoppingOrders />
              </TabsContent>
              <TabsContent value="address">
                <Address />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
