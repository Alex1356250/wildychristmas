import '../index.css';

function Footer() {

    function rules(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
     alert("Wildy Christmas est un jeu de Noël. Vous devez attendre le 25 décembre pour ouvrir votre cadeau. Si vous avez été vraiment (mais alors vraiment) sage, vous pourrez ouvrir votre cadeau avant. Sinon, vous devrez attendre le 25 décembre. Bonnes fêtes! PS: Pour passez le temps cliquer sur 'A propos'");
    }



    return (
        <div className="footer">
            <button type="button" onClick={rules}>Règles</button>
            <p>© WildCode School 2024</p>
            <button type="button"><a href="https://myportfolio-jade-mu.vercel.app" target="_blank" rel="noopener noreferrer">A propos</a></button>
        </div>
    )
}

export default Footer;
