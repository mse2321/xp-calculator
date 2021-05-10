import { useState } from 'React';
import xpData from '../data/xpValues.json';
import { Button } from 'react-bootstrap';

const Calculator = () => {
    const [totalXp, setTotalXp] = useState(0);
    const [neededXp, setNeededXp] = useState(0);
    const [nextLevel, setNextLevel] = useState(0);
    const [nextLevelXp, setNextLevelXp] = useState(0);
    const [character, setCharacter] = useState({
        name: '',
        level: 0,
        currentXp: 0,
        newXp: 0,
        newTotalXp: 0
    });

    const levelXpFinder = () => {
        // takes the current user's xp + 1 and finds the corresponding xp total
        setNextLevel(character.level + 1);
        
        let levelObjectIndex = xpData.indexOf(nextLevel);
        let startingXp = xpData[levelObjectIndex].startingXP;

        setNextLevelXp(startingXp);
        return startingXp;
    }

    const handleCalc = () => {
        setCharacter({
            name: document.getElementById('charName').value,
            level: document.getElementById('charLevel').value,
            currentXp: document.getElementById('currXp').value,
            newXp: document.getElementById('newXp').value,
            newTotalXp: totalXp
        });

        setTotalXp(character.currentXp + character.newXp);
        levelXpFinder()
        setNeededXp(nextLevelXp - totalXp);
        totalXp >= nextLevelXp && setNextLevel(nextLevel + 1);
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
