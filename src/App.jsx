import { useState, useCallback } from 'react';
import { GameProvider, useGame, hasSavedGame, clearSavedGame } from './context/GameContext';
import SceneImage from './components/SceneImage';
import DialogBox from './components/DialogBox';
import ChoicePanel from './components/ChoicePanel';
import EndingScreen from './components/EndingScreen';
import TitleScreen from './components/TitleScreen';

function GameScreen({ onBackToTitle }) {
    const { currentScenario, makeChoice, isGameOver } = useGame();
    const [showChoices, setShowChoices] = useState(false);

    const handleTextComplete = useCallback(() => {
        setShowChoices(true);
    }, []);

    const handleChoice = useCallback((next, impact) => {
        setShowChoices(false);
        makeChoice(next, impact);
    }, [makeChoice]);

    const handleBackToTitle = useCallback(() => {
        if (window.confirm('Bạn có muốn thoát về màn hình chính? Tiến trình hiện tại sẽ được lưu lại.')) {
            onBackToTitle();
        }
    }, [onBackToTitle]);

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

            {/* Nút về màn hình chính */}
            <button
                onClick={handleBackToTitle}
                className="absolute top-4 left-4 z-50 px-3 py-1.5 rounded-lg
                    bg-black/40 hover:bg-black/70 backdrop-blur-sm
                    border border-white/20 hover:border-amber-400/50
                    text-white/70 hover:text-amber-400
                    text-xs font-medium tracking-wide
                    transition-all duration-300 cursor-pointer
                    flex items-center gap-1.5"
                title="Về màn hình chính"
            >
                <span>◀</span>
                <span>Menu</span>
            </button>

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
    const [gameStarted, setGameStarted] = useState(() => hasSavedGame());

    const handleBackToTitle = useCallback(() => {
        setGameStarted(false);
    }, []);

    if (!gameStarted) {
        return <TitleScreen onStart={() => setGameStarted(true)} />;
    }

    return (
        <GameProvider>
            <GameScreen onBackToTitle={handleBackToTitle} />
        </GameProvider>
    );
}

export default App;
