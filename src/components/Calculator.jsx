import React, { useState, useRef, useEffect } from 'react';
import data from '../data/xpValues.json';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Calculator = () => {
    const [totalXp, setTotalXp] = useState(0);
    const [neededXp, setNeededXp] = useState(0);
    const [nextLevel, setNextLevel] = useState(1);
    const [nextLevelXp, setNextLevelXp] = useState(0);
    const [characterName, setCharacterName] = useState('');
    const [characterLevel, setCharacterLevel] = useState(1);
    const [currentXp, setCurrentXp] = useState(0);
    const [newXp, setNewXp] = useState(0);
    const [xpValues] = useState(data.xpValues);

    const currentXpValues = useRef(currentXp);

    useEffect(() => {
        if(currentXpValues.current !== 0) {
            setTotalXp(currentXp + newXp);
            setNextLevel(characterLevel + 1);

            // takes the current user's xp + 1 and finds the corresponding xp total
            let levelObject = xpValues.find(obj => obj.level === characterLevel + 1);
            let startingXp = levelObject.startingXP;

            setNextLevelXp(startingXp);
            setNeededXp(startingXp - totalXp);
    
            totalXp >= nextLevelXp && setNextLevel(nextLevel + 1);
        } else {
            console.log('something went wrong')
        }
    }, [
        setNextLevel,
        setTotalXp,
        setNeededXp,
        xpValues,
        totalXp,
        newXp,
        currentXp,
        nextLevelXp,
        nextLevel,
        characterLevel,
    ]);

    const handleCalc = () => {
        setCharacterName(document.getElementById('charName').value);
        setCharacterLevel(parseInt(document.getElementById('charLevel').value));
        setCurrentXp(parseInt(document.getElementById('currXp').value));
        setNewXp(parseInt(document.getElementById('newXp').value));
    };

    return (
        <section>
            <div className="content_wrap">
                <form action="#" noValidate autoComplete="off">
                    <TextField id="charName" className="inputs" fullWidth={true} label="Character Name" required />
                    <TextField id="charLevel" className="inputs" fullWidth={true} label="Character Level" required />
                    <TextField id="currXp" className="inputs" fullWidth={true} label="Current XP" required />
                    <TextField id="newXp" className="inputs" fullWidth={true} label="Newly Earned XP" required />
                    <Button type="submit" id="submit" onClick={() => handleCalc()}>Compute</Button>
                </form>
                {
                    neededXp !== 0 && <React.Fragment>
                        <div id="newTotalXp">{ totalXp }</div><br />
                    </React.Fragment>
                }
                {
                   neededXp !== 0 && <div id="nextLevelCalc">
                        <p>You are&nbsp;{ neededXp }xp from level&nbsp;{ nextLevel }.</p>
                    </div>
                }
            </div>
        </section>
    );
}

export default Calculator;
