import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import {
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

 function SuperbCitizenAnalyticsDashboard() {
  const navigate = useNavigate();
  const userData = {
    name: "John Doe",
    id: "CTZN-001245",
    walletBalance: "0.006 BTC",
    miningIncome: "$200",
    withdrawal: "$100",
    levelIncome: "$50",
    directIncome: "$150",
    teamBalance: "$300",
    totalIncome: "$1,200",
    referralLink: "http://www.crypto-citizen.io",
    status: "ACTIVE",
    joiningDate: "01-10-2025",
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log me out!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Logged Out!", "You have been logged out.", "success").then(() => {
          navigate("/");
        });
      }
    });
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen p-8 text-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-5xl font-extrabold text-blue-400">Citizen Analytics Dashboard</h1>
          <p className="text-gray-400 mt-2">Get insights and manage your assets with ease</p>
        </div>
        <Button
          className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-xl hover:bg-red-600 transition-all duration-300"
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </div>

      {/* Main Dashboard */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* User Info Card */}
        <Card className="col-span-1 xl:col-span-2 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
          <CardHeader>
            <CardTitle className="text-blue-400 text-3xl font-bold">User Information</CardTitle>
            <CardDescription className="text-gray-400">Personal details and status overview</CardDescription>
          </CardHeader>
          <CardContent className="p-10 space-y-8">
            <div className="flex flex-col xl:flex-row items-center xl:items-start space-y-8 xl:space-y-0 xl:space-x-10">
              <motion.img
                src="/avatar-placeholder.png"
                alt="Citizen Avatar"
                className="w-32 h-32 rounded-full border-4 border-blue-400 shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div>
                <h2 className="text-3xl font-bold text-blue-400">{userData.name}</h2>
                <p className="text-gray-400">Citizen ID: <span className="text-gray-200">{userData.id}</span></p>
                <Badge className="bg-green-500 text-white">{userData.status}</Badge>
                <p className="text-gray-400">Joining Date: {userData.joiningDate}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Wallet Stats */}
        <Card className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
          <CardHeader>
            <CardTitle className="text-blue-400 text-2xl font-semibold">Wallet Summary</CardTitle>
          </CardHeader>
          <CardContent className="p-10 space-y-6">
            <div className="space-y-4">
              <p className="text-gray-300">Wallet Balance: <span className="text-green-400">{userData.walletBalance}</span></p>
              <p className="text-gray-300">Mining Income: <span className="text-green-400">{userData.miningIncome}</span></p>
              <p className="text-gray-300">Withdrawal: <span className="text-red-400">{userData.withdrawal}</span></p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Section */}
      <div className="mt-12 grid grid-cols-1 xl:grid-cols-3 gap-8">
        <Card className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
          <CardHeader>
            <CardTitle className="text-blue-400 text-3xl font-bold">Income Analytics</CardTitle>
            <CardDescription className="text-gray-400">Detailed breakdown of your earnings</CardDescription>
          </CardHeader>
          <CardContent className="p-10 space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center bg-gray-800 rounded-xl p-6 shadow-md hover:bg-gray-700 transition-colors">
                <p className="text-gray-400 font-medium">Level Income</p>
                <p className="text-green-400 text-2xl font-bold">{userData.levelIncome}</p>
                <Progress value={25} className="mt-4" />
              </div>
              <div className="text-center bg-gray-800 rounded-xl p-6 shadow-md hover:bg-gray-700 transition-colors">
                <p className="text-gray-400 font-medium">Direct Income</p>
                <p className="text-green-400 text-2xl font-bold">{userData.directIncome}</p>
                <Progress value={50} className="mt-4" />
              </div>
              <div className="text-center bg-gray-800 rounded-xl p-6 shadow-md hover:bg-gray-700 transition-colors">
                <p className="text-gray-400 font-medium">Team Balance</p>
                <p className="text-green-400 text-2xl font-bold">{userData.teamBalance}</p>
                <Progress value={75} className="mt-4" />
              </div>
              <div className="text-center bg-gray-800 rounded-xl p-6 shadow-md hover:bg-gray-700 transition-colors">
                <p className="text-gray-400 font-medium">Total Income</p>
                <p className="text-green-400 text-2xl font-bold">{userData.totalIncome}</p>
                <Progress value={100} className="mt-4" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Referral Section */}
        <Card className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
          <CardHeader>
            <CardTitle className="text-blue-400 text-2xl font-semibold">Referral Link</CardTitle>
            <CardDescription className="text-gray-400">Share and earn rewards</CardDescription>
          </CardHeader>
          <CardContent className="p-10 space-y-8">
            <div className="flex items-center space-x-6">
              <input
                type="text"
                value={userData.referralLink}
                readOnly
                className="w-full bg-gray-700 p-4 rounded-lg text-gray-300 focus:ring-2 focus:ring-blue-400"
              />
              <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Copy
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notification Section */}
        <Card className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
          <CardHeader>
            <CardTitle className="text-blue-400 text-2xl font-semibold">Notifications</CardTitle>
            <CardDescription className="text-gray-400">Stay updated</CardDescription>
          </CardHeader>
          <CardContent className="p-10 space-y-4">
            <p className="text-gray-300">No new notifications at the moment.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default SuperbCitizenAnalyticsDashboard;
