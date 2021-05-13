import { useState } from 'react';
import data from '../data/xpValues.json';
import Button from '@material-ui/core/Button';

const Calculator = () => {
    const [totalXp, setTotalXp] = useState(0);
    const [neededXp, setNeededXp] = useState(0);
    const [nextLevel, setNextLevel] = useState(0);
    const [nextLevelXp, setNextLevelXp] = useState(0);
    const [characterName, setCharacterName] = useState('');
    const [characterLevel, setCharacterLevel] = useState(0);
    const [currentXp, setCurrentXp] = useState(0);
    const [newXp, setNewXp] = useState(0);
    const [xpValues] = useState(data.xpValues);

    const levelXpFinder = () => {
        let levelObject = xpValues.find(obj => obj.level === nextLevel);

        console.log(nextLevel);
        console.log(levelObject);

        let startingXp = levelObject?.startingXP;
        console.log(startingXp);

        setNextLevelXp(startingXp);
        return startingXp;
    }

    const handleCalc = () => {
        setCharacterName(document.getElementById('charName').value);
        setCharacterLevel(parseInt(document.getElementById('charLevel').value));
        setCurrentXp(parseInt(document.getElementById('currXp').value));
        setNewXp(parseInt(document.getElementById('newXp').value));

        // takes the current user's xp + 1 and finds the corresponding xp total
        setNextLevel(characterLevel + 1);
        setTotalXp(currentXp + newXp);

        console.log(nextLevelXp);

        setNeededXp(levelXpFinder() - totalXp);
        totalXp >= nextLevelXp && setNextLevel(nextLevel + 1);

        console.log(nextLevelXp);
        console.log(totalXp);
    };

    return (
        <section>
            <div className="content_wrap">
                <div className="md-block">
                    <label htmlFor="charName">Character Name</label>
                    <input type="text" id="charName" data-inset="true" />
                </div>
                <div className="md-block">
                    <label htmlFor="charLevel">Character Level</label>
                    <input type="number" id="charLevel" data-inset="true" />
                </div>
                <div className="md-block">
                    <label htmlFor="currXp">Current XP</label>
                    <input type="number" id="currXp" data-inset="true" />
                </div>
                <div className="md-block">
                    <label htmlFor="newXp">Newly Earned XP</label>
                    <input type="number" id="newXp" data-inset="true" />
                </div>
                <Button type="submit" id="submit" onClick={() => handleCalc()}>Compute</Button>
                <br />
                <label htmlFor="newTotalXp">New Current XP</label>
                <div id="newTotalXp">
                    { totalXp }
                </div>
                <br />
                <div id="nextLevelCalc">
                    <p>You are&nbsp;{ neededXp }xp from level&nbsp;{ nextLevel }.</p>
                </div>
            </div>
        </section>
    );
}

export default Calculator;
