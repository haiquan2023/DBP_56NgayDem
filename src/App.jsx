import { useState, useCallback } from 'react';
import { GameProvider, useGame } from './context/GameContext';
import SceneImage from './components/SceneImage';
import DialogBox from './components/DialogBox';
import ChoicePanel from './components/ChoicePanel';
import EndingScreen from './components/EndingScreen';
import TitleScreen from './components/TitleScreen';

function GameScreen() {
    const { currentScenario, makeChoice, isGameOver } = useGame();
    const [showChoices, setShowChoices] = useState(false);

    const handleTextComplete = useCallback(() => {
        setShowChoices(true);
    }, []);

    const handleChoice = useCallback((next, impact) => {
        setShowChoices(false);
        makeChoice(next, impact);
    }, [makeChoice]);

    if (!currentScenario) return null;

    // Hiển thị ending screen nếu game over
    if (isGameOver && currentScenario?.isEnd) {
        return <EndingScreen />;
    }

    return (
        <div className="relative w-full h-full bg-black overflow-hidden">
            {/* Background & nhân vật: chiếm toàn bộ không gian phía trên hộp thoại */}
            <div className="absolute inset-0">
                <SceneImage imageKey={currentScenario.image} />
            </div>

            {/* Choice list: overlay giữa màn hình, trên hộp thoại */}
            {currentScenario.options && currentScenario.options.length > 0 && (
                <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                    {showChoices && (
                        <div className="w-full max-w-4xl px-4 md:px-6 pointer-events-auto">
                <ChoicePanel
                    options={currentScenario.options}
                    onChoice={handleChoice}
                    visible={showChoices}
                />
                        </div>
                    )}
                </div>
            )}

            {/* Dialog box: cố định ở đáy, rộng 90%, max-width 1200px, z-index thấp hơn Choice */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 w-[90%] max-w-[1200px] px-2 md:px-0 pointer-events-none">
                <div className="flex justify-center pointer-events-auto">
                    <DialogBox
                        dialogues={currentScenario.dialogues || [
                            {
                                speaker: currentScenario.speaker,
                                text: currentScenario.text,
                            },
                        ]}
                        onTextComplete={handleTextComplete}
                    />
                </div>
            </div>
        </div>
    );
}

function App() {
    const [gameStarted, setGameStarted] = useState(false);

    if (!gameStarted) {
        return <TitleScreen onStart={() => setGameStarted(true)} />;
    }

    return (
        <GameProvider>
            <GameScreen />
        </GameProvider>
    );
}

export default App;
