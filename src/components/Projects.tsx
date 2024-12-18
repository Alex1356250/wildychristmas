import React, { useEffect, useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import labs from "../static/images/labs.png";
import diceroller from "../static/images/diceroller.png";
import happylottery from "../static/images/happylottery.png";
import strasdom from "../static/images/strasdom.png";

interface Project {
	id: number;
	title: string;
	description: string;
	image: string;
	technologies: string[];
	github: string;
	demo: string;
}

const Projects = () => {
	const [projects, setProjects] = useState<Project[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProjects = async () => {
			const mockProjects = [
				{
					id: 1,
					title: "Projet LABS",
					description:
						"Application de gestion de tâches et de listes de tâches",
					image: labs,
					technologies: ["JS", "HTML", "CSS"],
					github: "https://github.com",
					demo: "https://demo.com",
				},
				{
					id: 2,
					title: "Projet Stras'Dom",
					description: "Application de services à la personne",
					image: strasdom,
					technologies: ["VITE + REACT", "API", "CSS"],
					github: "https://github.com",
					demo: "https://demo.com",
				},
				{
					id: 3,
					title: "Projet Happy Lottery ",
					description: "Application de lotterie de Noël avec tirage en direct",
					image: happylottery,
					technologies: ["VITE + REACT", "Express", "API", "CSS"],
					github: "https://github.com",
					demo: "https://demo.com",
				},
				{
					id: 4,
					title: "Projet Dice Roller",
					description: "Application de simulation de tirage de dès",
					image: diceroller,
					technologies: ["React", "tailwind", "Vercel"],
					github: "https://github.com",
					demo: "https://dice-roller-oc67vsiks-alex1356250s-projects.vercel.app",
				},
			];

			setProjects(mockProjects);
			setLoading(false);
		};

		fetchProjects();
	}, []);

	if (loading) {
		return (
			<div className="flex justify-center items-center min-h-screen">
				<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
			</div>
		);
	}

	return (
		<section id="projects" className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-gray-900">Projets</h2>
					<p className="mt-4 text-xl text-gray-600">
						Découvrez mes dernières réalisations
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<div
							key={project.id}
							className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
						>
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-48 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-900 mb-2">
									{project.title}
								</h3>
								<p className="text-gray-600 mb-4">{project.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
										>
											{tech}
										</span>
									))}
								</div>
								<div className="flex space-x-4">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
									>
										<Github size={20} />
										<span>Code</span>
									</a>
									<a
										href={project.demo}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
									>
										<ExternalLink size={20} />
										<span>Demo</span>
									</a>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<Link
						to="/projects"
						className="inline-flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
					>
						<span>Voir tous les projets</span>
						<ArrowRight size={20} />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Projects;
