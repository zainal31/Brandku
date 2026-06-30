// src/component/LoginDemo.jsx
import { useLogin } from "../hooks/useLogin";
const LoginDemo = () => {
	const { user, loading, login } = useLogin();
	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const credentials = {
			email: formData.get("email"),
			password: formData.get("password"),
		};
		login(credentials);
	};
	return (
		<div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-sm border border-slate-100 mt-12">
			<h2 className="text-xl font-bold text-slate-800 mb-6 text-center">Demo Login</h2>
			{!user ? (
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
							Email
						</label>
						<input
							id="email"
							name="email"
							type="email"
							required
							className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
							placeholder="contoh@brandku.com"
						/>
					</div>
					<div>
						<label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
							Password
						</label>
						<input
							id="password"
							name="password"
							type="password"
							required
							className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
							placeholder="••••••••"
						/>
					</div>
					<button
						type="submit"
						disabled={loading}
						className={`w-full py-2.5 px-4 rounded-lg font-semibold text-white transition ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}>
						{loading ? "Memproses..." : "Masuk"}
					</button>
				</form>
			) : (
				<div className="text-center py-6">
					<div className="w-16 h-16 bg-gradient-to-tr from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
						<span className="text-white font-bold text-lg">{user.name.charAt(0)}</span>
					</div>
					<h3 className="text-lg font-bold text-slate-800 mb-1">Halo, {user.name}!</h3>
					<p className="text-slate-600 text-sm mb-4">{user.email}</p>
					<p className="text-xs text-slate-500">
						✅ Login berhasil — ini contoh response dari <code className="bg-slate-100 px-1 rounded">/login</code>
					</p>
				</div>
			)}
		</div>
	);
};
export default LoginDemo;
