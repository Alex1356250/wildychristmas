import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Services () {
	return (
        <div className="text-center m-10">
            <h3 className="text-3xl font-bold text-gray-900 ">SERVICES</h3>
        <p className="text-3xl font-bold text-gray-900 ">Contactez moi pour parler de votre projet:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10">
                <div className="p-6 bg-white rounded-xl hover:shadow-md transition-shadow m-10">
                1 site vitrine
                1 page web
                à partir de 350€
                </div>
                <div className="p-6 bg-white rounded-xl hover:shadow-md transition-shadow m-10">
                1 Hebergement
                à partir de 8.33€/par mois (soit 100€/par an) 
                </div>
                <div className="p-6 bg-white rounded-xl hover:shadow-md transition-shadow m-10">
                1 site
                4 pages
                à partir de 750€
                </div>
            </div>
            <div className="p-6 bg-white rounded-xl hover:shadow-md transition-shadow m-10">
                Pour toute demande de devis, contactez moi par email ou par téléphone
            </div>
        </div>
	);
};

export default Services;
