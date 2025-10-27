import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Card, CardContent, Typography, Button, Grid } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const router = useRouter();
  const [servers, setServers] = useState([]);
  const [uptimeData, setUptimeData] = useState([]);

  const randomStatus = () => {
    const statuses = ["Online", "Offline", "Maintenance"];
    return statuses[Math.floor(Math.random() * statuses.length)];
  };

  const fetchServerStatus = () => {
    const mockData = [
      { id: 1, name: "Auth Server", status: randomStatus() },
      { id: 2, name: "Database Server", status: randomStatus() },
      { id: 3, name: "Frontend Server", status: randomStatus() },
      { id: 4, name: "API Gateway", status: randomStatus() },
    ];
    setServers(mockData);

    // mock uptime stats for charts
    const mockUptime = Array.from({ length: 10 }, (_, i) => ({
      time: `T${i + 1}`,
      uptime: Math.floor(90 + Math.random() * 10), // 90–100%
    }));
    setUptimeData(mockUptime);
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (!isLoggedIn) router.push("/login");

    fetchServerStatus();
    const interval = setInterval(fetchServerStatus, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    router.push("/login");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Online":
        return "bg-green-100 text-green-700 border-green-400";
      case "Offline":
        return "bg-red-100 text-red-700 border-red-400";
      case "Maintenance":
        return "bg-yellow-100 text-yellow-700 border-yellow-400";
      default:
        return "bg-gray-100 text-gray-700 border-gray-400";
    }
  };

  return (
    <div className="min-h-screen p-10 bg-gray-50">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">🚀 Server Status Dashboard</h1>
        <Button variant="contained" color="error" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      {/* Server Cards */}
      <Grid container spacing={3}>
        {servers.map((server) => (
          <Grid item xs={12} sm={6} md={3} key={server.id}>
            <Card className={`border-l-8 ${getStatusColor(server.status)} shadow-md`}>
              <CardContent>
                <Typography variant="h6" className="font-semibold">
                  {server.name}
                </Typography>
                <Typography variant="body1" className="mt-2 font-medium">
                  Status: {server.status}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Analytics Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          📊 Uptime Analytics
        </h2>
        <Card className="shadow-lg p-4">
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={uptimeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis domain={[80, 100]} />
                <Tooltip />
                <Line type="monotone" dataKey="uptime" stroke="#3b82f6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}