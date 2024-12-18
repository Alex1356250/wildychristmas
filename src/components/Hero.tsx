import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
	return (
		<section
			id="about"
			className="min-h-screen pt-16 flex items-center bg-gradient-to-br from-gray-50 to-gray-100"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid md:grid-cols-2 gap-8 items-center">
					<div className="space-y-6">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900">
							Alexandre CLASQUIN Développeur Full Stack
						</h1>
						<p className="text-xl text-gray-600">
							Passionné par le développement web et les nouvelles technologies.
							Je crée des applications modernes et performantes.
						</p>
						<div className="flex space-x-4">
							<a
								href="https://github.com/Alex1356250"
								target="blank"
								alt="Access to GitHub account"
								className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
							>
								<Github size={24} />
							</a>
							<a
								href="https://linkedin.com/in/alexandre-clasquin"
								target="blank"
								alt="Access ti LinkedIn account"
								className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
							>
								<Linkedin size={24} />
							</a>
							<a
								href="mailto:alexandre.clasquin@icloud.com"
								className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
							>
								<Mail size={24} />
							</a>
						</div>
						<div className="pt-4 flex space-x-4">
							<a
								href="https://www.linkedin.com/in/alexandre-clasquin-38a02a20/#:~:text=Enregistrer,-au%20format%20PDF"
								className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
							>
								Télécharger CV
							</a>
							<a
								href="mailto:alexandre.clasquin@gmail.com"
								className="inline-flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-lg border-2 border-gray-900 hover:bg-gray-50 transition-colors"
							>
								<Mail size={20} />
								<span>Me contacter</span>
							</a>
						</div>
					</div>
					<div className="relative">
						<img
							src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800"
							alt="Developer workspace"
							className="rounded-lg shadow-xl"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
