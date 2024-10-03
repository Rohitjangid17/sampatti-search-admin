import { useEffect } from "react";
import Loader from "../../../components/Loader";

const Dashboard = () => {
    useEffect(() => {
        document.title = "Sampatti Search | Real Estate Admin Dashboard";
    }, []);

    // Static data
    const metrics = [
        { label: "Total Properties", value: 120 },
        { label: "Total Inquiries", value: 45 },
        { label: "Registered Users", value: 200 },
        { label: "Properties Sold", value: 30 },
        { label: "Total Revenue", value: "$1,200,000" },
    ];

    const recentActivities = [
        { activity: "New Property Added", date: "2024-09-27", user: "John Doe" },
        { activity: "Inquiry Received", date: "2024-09-26", user: "Jane Smith" },
        { activity: "User Registration", date: "2024-09-25", user: "Mike Johnson" },
        { activity: "Property Sold", date: "2024-09-24", user: "Sarah Wilson" },
        { activity: "Price Updated", date: "2024-09-23", user: "James Brown" },
    ];

    const topCustomers = [
        { name: "Alice Johnson", purchases: 5 },
        { name: "Robert Smith", purchases: 3 },
        { name: "Emily Davis", purchases: 2 },
    ];

    const recentPurchasedProperties = [
        { name: "Luxury Apartment", date: "2024-09-26", price: "$450,000" },
        { name: "Family Home", date: "2024-09-25", price: "$320,000" },
    ];

    const propertyInvestors = [
        { name: "David Brown", investment: "$500,000" },
        { name: "Sophia Wilson", investment: "$300,000" },
    ];

    const weeklySales = [
        { week: "Week 1", sales: 10 },
        { week: "Week 2", sales: 8 },
        { week: "Week 3", sales: 12 },
        { week: "Week 4", sales: 15 },
    ];

    const latestTransactions = [
        { id: 1, property: "Ocean View Villa", date: "2024-09-27", amount: "$700,000" },
        { id: 2, property: "Downtown Condo", date: "2024-09-26", amount: "$350,000" },
    ];

    const recentJoinAgents = [
        { name: "Mark Taylor", date: "2024-09-24" },
        { name: "Lucy Green", date: "2024-09-23" },
    ];

    return (
        <>
            <div className="p-6 min-h-screen">
                {/* Welcome Section */}
                <div className="mb-6">
                    <h1 className="text-4xl font-bold text-gray-800">Welcome Back, Admin!</h1>
                    <p className="text-gray-600">Here’s a quick overview of your activity.</p>
                </div>

                {/* Metrics Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    {metrics.map((metric, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                            <h2 className="text-xl font-semibold text-gray-700">{metric.label}</h2>
                            <p className="text-3xl text-blue-600 font-bold">{metric.value}</p>
                        </div>
                    ))}
                </div>

                {/* Recent Activity Section */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
                    <table className="min-w-full text-left">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 text-gray-700">Activity</th>
                                <th className="px-4 py-2 text-gray-700">Date</th>
                                <th className="px-4 py-2 text-gray-700">User</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentActivities.map((activity, index) => (
                                <tr key={index} className="border-b">
                                    <td className="px-4 py-2">{activity.activity}</td>
                                    <td className="px-4 py-2">{activity.date}</td>
                                    <td className="px-4 py-2">{activity.user}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Top Customers Section */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Top Customers</h2>
                    <ul>
                        {topCustomers.map((customer, index) => (
                            <li key={index} className="flex justify-between border-b py-2">
                                <span>{customer.name}</span>
                                <span className="text-gray-600">{customer.purchases} Purchases</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Recent Purchased Properties Section */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Purchased Properties</h2>
                    <ul>
                        {recentPurchasedProperties.map((property, index) => (
                            <li key={index} className="flex justify-between border-b py-2">
                                <span>{property.name}</span>
                                <span className="text-gray-600">{property.date} - {property.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Property Investors Section */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Investors</h2>
                    <ul>
                        {propertyInvestors.map((investor, index) => (
                            <li key={index} className="flex justify-between border-b py-2">
                                <span>{investor.name}</span>
                                <span className="text-gray-600">{investor.investment}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Weekly Sales Section */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Weekly Sales</h2>
                    <ul>
                        {weeklySales.map((sale, index) => (
                            <li key={index} className="flex justify-between border-b py-2">
                                <span>{sale.week}</span>
                                <span className="text-gray-600">{sale.sales} Sales</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Latest Transactions Section */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Latest Transactions</h2>
                    <table className="min-w-full text-left">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2 text-gray-700">Property</th>
                                <th className="px-4 py-2 text-gray-700">Date</th>
                                <th className="px-4 py-2 text-gray-700">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {latestTransactions.map((transaction) => (
                                <tr key={transaction.id} className="border-b">
                                    <td className="px-4 py-2">{transaction.property}</td>
                                    <td className="px-4 py-2">{transaction.date}</td>
                                    <td className="px-4 py-2">{transaction.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Recent Join Agents Section */}
                <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Join Agents</h2>
                    <ul>
                        {recentJoinAgents.map((agent, index) => (
                            <li key={index} className="flex justify-between border-b py-2">
                                <span>{agent.name}</span>
                                <span className="text-gray-600">{agent.date}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* <Loader isVisible={} /> */}
        </>
    );
};

export default Dashboard;
