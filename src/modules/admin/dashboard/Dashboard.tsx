import { useEffect, useState } from "react";
import Loader from "../../../components/Loader";
import PageHeader from "../../../components/PageHeader";
import propertySaleIcon from "../../../assets/icons/property_sale_icon.png";
import propertyRentIcon from "../../../assets/icons/property_rent_icon.png";
import totalAgentsIcon from "../../../assets/icons/total_agents_icon.png";
import totalCustomersIcon from "../../../assets/icons/total_customers_icon.png";
import axios from "axios";

const Dashboard = () => {
    const [isLoader, setIsLoader] = useState<boolean>(false);
    const [totalCustomers, setTotalCustomers] = useState<number>(0);
    const [totalAgents, setTotalAgents] = useState<number>(0);
    const [totalSaleProperty, setTotalSaleProperty] = useState<number>(0);
    const [totalRentProperty, setTotalRentProperty] = useState<number>(0);

    useEffect(() => {
        setIsLoader(true);
        setTimeout(() => {
            setIsLoader(false);
        }, 1200);

        document.title = "Sampatti Search | Real Estate Admin Dashboard";

        getTotalCustomers();
        getTotalAgents();
        getTotalPropertiesForSale();
    }, []);

    // get total customers 
    const getTotalCustomers = () => {
        axios.get("https://sampatti-search-api.vercel.app/api/customers")
            .then(response => setTotalCustomers(response.data.total))
            .catch(error => console.error(error.message));
    }

    // get total agents
    const getTotalAgents = () => {
        axios.get("https://sampatti-search-api.vercel.app/api/agents")
            .then(response => setTotalAgents(response.data.total))
            .catch(error => console.error(error.message));
    }

    // get total properties for sale 
    const getTotalPropertiesForSale = () => {
        axios.get("https://sampatti-search-api.vercel.app/api/properties")
            .then(response => {
                console.log(response.data.properties);

                // Count properties for sale and rent
                const totalSale: number = response.data.properties.filter((property: any) => property.propertyFor.includes("Sale")).length;
                const totalRent: number = response.data.properties.filter((property: any) => property.propertyFor.includes("Rent")).length;

                setTotalSaleProperty(totalSale);
                setTotalRentProperty(totalRent);
            })
            .catch(error => console.error(error.message));
    }

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
            <PageHeader pageTitle="Dashoard" />

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3 px-4">
                <div className="bg-white p-4 rounded-lg shadow-md border border-solid">
                    <div className="flex items-center justify-between gap-x-4">
                        <div className="flex flex-col items-start gap-y-2">
                            <p className="text-[#5d7186] font-semibold text-base">Properties for Sale</p>
                            <h1 className="text-[#475be8] font-semibold text-xl">{totalSaleProperty}</h1>
                        </div>
                        <i>
                            <img src={propertySaleIcon} alt="property sale" />
                        </i>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-solid">
                    <div className="flex items-center justify-between gap-x-4">
                        <div className="flex flex-col items-start gap-y-2">
                            <p className="text-[#5d7186] font-semibold text-base">Properties for Rent</p>
                            <h1 className="text-[#fd8539] font-semibold text-xl">{totalRentProperty}</h1>
                        </div>
                        <i>
                            <img src={propertyRentIcon} alt="property rent" />
                        </i>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-solid">
                    <div className="flex items-center justify-between gap-x-4">
                        <div className="flex flex-col items-start gap-y-2">
                            <p className="text-[#5d7186] font-semibold text-base">Total Agents</p>
                            <h1 className="text-[#2ed480] font-semibold text-xl">{totalAgents}</h1>
                        </div>
                        <i>
                            <img src={totalAgentsIcon} alt="total agents" />
                        </i>
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md border border-solid">
                    <div className="flex items-center justify-between gap-x-4">
                        <div className="flex flex-col items-start gap-y-2">
                            <p className="text-[#5d7186] font-semibold text-base">Total Customers</p>
                            <h1 className="text-[#fe6d8e] font-semibold text-xl">{totalCustomers}</h1>
                        </div>
                        <i>
                            <img src={totalCustomersIcon} alt="total customers sale" />
                        </i>
                    </div>
                </div>
            </div>
            <div className="p-4 min-h-screen">

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

            <Loader isVisible={isLoader} />
        </>
    );
};

export default Dashboard;
