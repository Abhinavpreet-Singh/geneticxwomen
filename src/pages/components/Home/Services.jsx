import { motion } from "framer-motion";

export default function Services() {
	return (
		<motion.div 
			className="bg-black text-white py-16 px-8"
			initial={{ opacity: 0, y: 50 }} 
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
			<div className="text-center">
				<h2 className="text-3xl font-bold">Our Services</h2>
				<p className="text-gray-400 mt-2">
					Unlock the full potential of GeneticX with exceptional features and unmatched performance.
				</p>
			</div>
			<div className="mt-14 max-w-5xl mx-auto bg-gradient-to-r from-[#FF00CD] to-[#734EFF] p-1 rounded-lg">
				<div className="bg-black p-8 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-10">
					{services.map((service, index) => (
						<motion.div 
							key={index} 
							className="text-center"
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
						>
							<div className={`text-3xl ${service.color}`}>{service.icon}</div>
							<h3 className="text-xl font-bold mt-4">{service.title}</h3>
							<p className="text-gray-400 mt-2">{service.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	);
}

const services = [
	{ icon: "✨", title: "DNA Analysis", description: "In-depth examination of your genetic sequences.", color: "text-[#FF00CD]" },
	{ icon: "🛡️", title: "Risk Assessment", description: "Evaluate your susceptibility to various diseases.", color: "text-[#734EFF]" },
	{ icon: "✔️", title: "Mutation Detection", description: "AI-powered mutation detection to assess its impact.", color: "text-[#FF00CD]" },
	{ icon: "📄", title: "Personalized Reports", description: "Receive detailed insights into your DNA and health risks.", color: "text-[#734EFF]" }
];
