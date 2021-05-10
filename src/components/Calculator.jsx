import { useState } from 'React';
import xpData from '../data/xpValues.json';
import { Button } from 'react-bootstrap';

const Calculator = () => {
    const [totalXp, setTotalXp] = useState(0);
    const [neededXp, setNeededXp] = useState(0);
    const [nextLevel, setNextLevel] = useState(0);
    const [nextLevelXp, setNextLevelXp] = useState(0);

    const handleCalc = () => {
        // takes all fields and calculates the total xp
        setTotalXp(100);
        setNeededXp(nextLevelXp - totalXp);
        totalXp >= nextLevelXp && setNextLevel(1);
    }

    return (
        <section>
            <div class="content_wrap">
                <div class="md-block">
                    <label for="charName">Character Name</label>
                    <input type="text" id="charName" data-inset="true" />
                </div>
                <div class="md-block">
                    <label for="charLevel">Character Level</label>
                    <input type="text" id="charLevel" data-inset="true" />
                </div>
                <div class="md-block">
                    <label for="currXp">Current XP</label>
                    <input type="number" id="currXp" data-inset="true" />
                </div>
                <div class="md-block">
                    <label for="newXp">Newly Earned XP</label>
                    <input type="number" id="newXp" data-inset="true" />
                </div>
                <Button type="submit" id="submit" onClick={() => handleCalc()}>Compute</Button>
                <br />
                <label for="newTotalXp">New Current XP</label>
                <div id="newTotalXp">
                    {{ totalXp }}
                </div>
                <br />
                <div id="nextLevelCalc">
                    <p>You are&nbsp;{{ neededXp }}xp from level&nbsp;{{ nextLevel }}.</p>
                </div>
            </div>
        </section>
    );
}

export default Calculator;
