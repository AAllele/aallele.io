import React, {useEffect, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import particlesOptions from "./particles.json";

const App = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <div className="App">
            {init && <Particles 
                options={particlesOptions}
            />}
            <div className="card-style">
                <h1>AAllele Ltd</h1>
                <h2>Coming soon...</h2>

            </div>
        </div>
    );
}

export default App;
