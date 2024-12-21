import '../index.css';
import { useState, useEffect } from 'react';
import Gift from './Gift';
import gift from '../images/gift.png';
import opengift from '../images/opengift.png';

function Countdown() {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const [distance, setDistance] = useState(0);
    const [isChristmas, setIsChristmas] = useState(false);
    const [giftImage, setGiftImage] = useState(gift);
    const [showGift, setShowGift] = useState(false);

    useEffect(() => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0");
        const yyyy = today.getFullYear();
        const nextYear = yyyy + 1;
        const dayMonth = "12/21/";
        let christmas = dayMonth + yyyy;

        const todayString = `${mm}/${dd}/${yyyy}`;
        if (todayString > christmas) {
            christmas = dayMonth + nextYear;
        }

        const countDown = new Date(christmas).getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDown - now;

            setDistance(distance);

            if (distance < 0) {
                setIsChristmas(true);
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);

    function monTimer(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        alert("Et le compteur il sert à quoi?? Revenez quand il sera l'heure d'être sage! PS: Pour passez le temps cliquez sur 'A propos'");
    }

    function openGift(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        if (isChristmas) {
            setGiftImage(opengift);
            setShowGift(true);
        }
    }

    return (
        <div>
            {isChristmas ? (
                <div className="countdown-container">
                    <h1>It's Christmas Time!</h1>
                    <div className="container">
                    {showGift && <Gift />}
                        <button type="button" className="button" onClick={openGift}>
                            <img src={giftImage} alt="gift" className="gift-opened" id="gift" />
                        </button>

                    </div>
                </div>
            ) : (
                <div className="countdown-container">
                    <div className="gift-container">
                        <button type="button" className="button" onClick={monTimer}>
                            <img src={gift} alt="gift" className="gift" id="gift" />
                        </button>
                    </div>
                    <div className="countdown">
                        <div id="days">{days} jours</div>
                        <div id="hours">{hours} heures</div>
                        <div id="minutes">{minutes} minutes</div>
                        <div id="seconds">{seconds} secondes</div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Countdown;