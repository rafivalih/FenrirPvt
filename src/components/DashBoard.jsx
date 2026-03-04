import {
	Search,
	ChevronRight,
	Plus,
	Filter,
	Columns3,
	RotateCcw,
	AlertOctagon,
	AlertTriangle,
	CheckCircle2,
	Info,
} from "lucide-react";
import SideBar from "./SideBar";

const Dashboard = () => {
	const scans = [
		{
			id: 1,
			name: "Web App Servers",
			type: "Greybox",
			status: "Completed",
			progress: 100,
			vulns: [5, 12, 23, 18],
			time: "4d ago",
		},
		{
			id: 2,
			name: "Web App Servers",
			type: "Greybox",
			status: "Completed",
			progress: 100,
			vulns: [5, 12, 23, 18],
			time: "4d ago",
		},
		{
			id: 3,
			name: "Web App Servers",
			type: "Greybox",
			status: "Scheduled",
			progress: 100,
			vulns: [5, 12],
			time: "4d ago",
		},
		{
			id: 4,
			name: "IoT Devices",
			type: "Blackbox",
			status: "Failed",
			progress: 10,
			vulns: [2, 4, 8, 1],
			time: "3d ago",
		},
	];

	return (
		<div className="flex min-h-screen bg-[#fcfdfe] font-sans text-[#0f172a]">
			<aside className="w-64 border-r border-gray-100 flex flex-col bg-white">
				<div className="p-6 flex items-center gap-2 mb-4">
					<div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#12c4b2]">
						<div className="h-2 w-2 rounded-full bg-white"></div>
					</div>
					<span className="text-xl font-bold lowercase tracking-tighter">
						aps
					</span>
				</div>

				<SideBar />
			</aside>
			<main className="flex-1 flex flex-col min-w-0">
				<header className="h-16 border-b border-gray-100 bg-white flex items-center justify-between px-8">
					<div className="flex items-center gap-2 text-sm text-gray-500">
						<span>Scan</span> <ChevronRight size={14} />
						<span className="hover:text-[#12c4b2] cursor-pointer">
							Private Assets
						</span>{" "}
						<ChevronRight size={14} />
						<span className="text-[#12c4b2] font-medium">New Scan</span>
					</div>
					<div className="flex items-center gap-3">
						<button className="px-4 py-2 text-sm font-semibold border border-gray-200 rounded-lg hover:bg-gray-50 transition-all">
							Export Report
						</button>
						<button className="px-4 py-2 text-sm font-semibold bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition-all">
							Stop Scan
						</button>
					</div>
				</header>

				<div className="p-8 space-y-8 overflow-y-auto">
					{/* Sub-Header info */}
					<div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-50 shadow-sm">
						<StatGroup label="Org :" className="flex" value="Project X" />
						<StatGroup label="Owner" value="Nammagiri" />
						<StatGroup label="Total Scans" value="100" />
						<StatGroup label="Scheduled" value="1000" />
						<StatGroup label="Rescans" value="100" />
						<StatGroup label="Failed Scans" value="100" />
						<div className="flex items-center gap-2 text-xs text-teal-600 font-medium bg-teal-50 px-3 py-1.5 rounded-full">
							<RotateCcw size={14} /> 10 mins ago
						</div>
					</div>

					{/* Severity Grid */}
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
						<SeverityCard
							label="Critical Severity"
							count="86"
							trend="+2%"
							icon={<AlertOctagon className="text-pink-500" />}
							color="pink"
						/>
						<SeverityCard
							label="High Severity"
							count="16"
							trend="+0.9%"
							icon={<AlertTriangle className="text-orange-500" />}
							color="orange"
						/>
						<SeverityCard
							label="Medium Severity"
							count="26"
							trend="-0.9%"
							icon={<Info className="text-yellow-500" />}
							color="yellow"
							isDown
						/>
						<SeverityCard
							label="Low Severity"
							count="16"
							trend="+0.9%"
							icon={<Search className="text-blue-500" />}
							color="blue"
						/>
					</div>

					{/* Table Container */}
					<div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
						<div className="p-4 border-b border-gray-50 flex items-center justify-between">
							<div className="relative w-96">
								<Search
									className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
									size={18}
								/>
								<input
									type="text"
									placeholder="Search scans by name or type..."
									className="w-full pl-10 pr-4 py-2 bg-gray-50 border-transparent rounded-lg text-sm focus:bg-white focus:ring-2 ring-[#12c4b2]/20 transition-all outline-none"
								/>
							</div>
							<div className="flex items-center gap-2">
								<TableAction icon={<Filter size={16} />} label="Filter" />
								<TableAction icon={<Columns3 size={16} />} label="Column" />
								<button className="flex items-center gap-2 bg-[#12c4b2] text-white px-4 py-2 rounded-lg text-sm font-bold hover:brightness-110 transition-all">
									<Plus size={18} /> New scan
								</button>
							</div>
						</div>

						<table className="w-full text-left">
							<thead className="bg-gray-50/50 text-[11px] uppercase tracking-wider text-gray-400 font-bold">
								<tr>
									<th className="px-6 py-4">Scan Name</th>
									<th className="px-6 py-4">Type</th>
									<th className="px-6 py-4">Status</th>
									<th className="px-6 py-4">Progress</th>
									<th className="px-6 py-4">Vulnerability</th>
									<th className="px-6 py-4">Last Scan</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-50">
								{scans.map((scan) => (
									<tr
										key={scan.id}
										className="hover:bg-gray-50/50 transition-colors group"
									>
										<td className="px-6 py-4 font-bold text-sm">{scan.name}</td>
										<td className="px-6 py-4 text-sm text-gray-500">
											{scan.type}
										</td>
										<td className="px-6 py-4">
											<span
												className={`px-3 py-1 rounded-full text-[10px] font-bold border ${getStatusStyles(scan.status)}`}
											>
												{scan.status}
											</span>
										</td>
										<td className="px-6 py-4">
											<div className="flex items-center gap-3">
												<div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden min-w-[100px]">
													<div
														className={`h-full rounded-full ${scan.status === "Failed" ? "bg-red-400" : "bg-[#12c4b2]"}`}
														style={{ width: `${scan.progress}%` }}
													/>
												</div>
												<span className="text-xs font-bold">
													{scan.progress}%
												</span>
											</div>
										</td>
										<td className="px-6 py-4">
											<div className="flex gap-1">
												{scan.vulns.map((v, i) => (
													<span
														key={i}
														className={`w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold text-white ${getVulnColor(i)}`}
													>
														{v}
													</span>
												))}
											</div>
										</td>
										<td className="px-6 py-4 text-xs text-gray-400 font-medium">
											{scan.time}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</main>
		</div>
	);
};

// Helper Components


const StatGroup = ({ label, value }) => (
	<div className="px-4 border-r border-gray-100 last:border-none">
		<p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">
			{label}
		</p>
		<p className="text-sm font-bold">{value}</p>
	</div>
);

const SeverityCard = ({ label, count, trend, icon, color, isDown = false }) => (
	<div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
		<div className="flex items-center justify-between">
			<span className="text-xs font-bold text-gray-500 uppercase tracking-tight">
				{label}
			</span>
			<div className={`p-2 rounded-lg bg-${color}-50`}>{icon}</div>
		</div>
		<div className="flex items-end gap-3">
			<h2 className="text-4xl font-black">{count}</h2>
			<span
				className={`text-[10px] font-bold mb-2 ${isDown ? "text-teal-500" : "text-pink-500"}`}
			>
				{isDown ? "↓" : "↑"} {trend}{" "}
				<span className="text-gray-300 font-normal">
					increase than yesterday
				</span>
			</span>
		</div>
	</div>
);

const TableAction = ({ icon, label }) => (
	<button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-all font-medium">
		{icon} {label}
	</button>
);

const getStatusStyles = (status) => {
	if (status === "Completed")
		return "bg-emerald-50 text-emerald-600 border-emerald-100";
	if (status === "Scheduled") return "bg-blue-50 text-blue-600 border-blue-100";
	if (status === "Failed") return "bg-red-50 text-red-600 border-red-100";
	return "bg-gray-50 text-gray-600 border-gray-100";
};

const getVulnColor = (index) => {
	const colors = [
		"bg-red-500",
		"bg-orange-500",
		"bg-yellow-500",
		"bg-emerald-500",
	];
	return colors[index] || "bg-gray-400";
};

export default Dashboard;
