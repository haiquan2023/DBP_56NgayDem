import { createContext, useContext, useReducer, useCallback } from 'react';
import { scenario } from '../data/scenario';

const GameContext = createContext(null);
const STORAGE_KEY = 'dbp_game_state';

const initialState = {
    currentNode: 'start',
    vp: 0,
    lp: 0,
    choices: [],
    isGameOver: false,
};

function loadSavedState() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            // Kiểm tra scene có tồn tại trong scenario không
            if (parsed.currentNode && scenario[parsed.currentNode]) {
                return parsed;
            }
        }
    } catch (e) {
        // Nếu lỗi parse thì bỏ qua, dùng initialState
    }
    return null;
}

function saveState(state) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
        // Bỏ qua lỗi localStorage
    }
}

export function clearSavedGame() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
        // Bỏ qua
    }
}

export function hasSavedGame() {
    return loadSavedState() !== null;
}

function gameReducer(state, action) {
    let newState;
    switch (action.type) {
        case 'MAKE_CHOICE': {
            const { next, impact } = action.payload;
            const newVp = state.vp + (impact?.vp || 0);
            const newLp = state.lp + (impact?.lp || 0);
            const newChoices = [...state.choices, next];

            // Kiểm tra node tiếp theo
            const targetNode = scenario[next];

            if (!targetNode) {
                newState = {
                    ...state,
                    vp: newVp,
                    lp: newLp,
                    choices: newChoices,
                };
                saveState(newState);
                return newState;
            }

            // Kiểm tra nếu node là final_gate (có next là function)
            if (typeof targetNode.next === 'function') {
                const stats = { vp: newVp, lp: newLp };
                const endingKey = targetNode.next(stats);
                newState = {
                    ...state,
                    currentNode: endingKey,
                    vp: newVp,
                    lp: newLp,
                    choices: newChoices,
                    isGameOver: true,
                };
                saveState(newState);
                return newState;
            }

            // Kiểm tra ending (isEnd = true)
            if (targetNode.isEnd) {
                newState = {
                    ...state,
                    currentNode: next,
                    vp: newVp,
                    lp: newLp,
                    choices: newChoices,
                    isGameOver: true,
                };
                saveState(newState);
                return newState;
            }

            newState = {
                ...state,
                currentNode: next,
                vp: newVp,
                lp: newLp,
                choices: newChoices,
            };
            saveState(newState);
            return newState;
        }

        case 'RESTART':
            clearSavedGame();
            return { ...initialState };

        default:
            return state;
    }
}

export function GameProvider({ children }) {
    const [state, dispatch] = useReducer(gameReducer, initialState, () => loadSavedState() || initialState);

    const makeChoice = useCallback((next, impact) => {
        dispatch({
            type: 'MAKE_CHOICE',
            payload: { next, impact },
        });
    }, []);

    const restart = useCallback(() => {
        dispatch({ type: 'RESTART' });
    }, []);

    const currentScenario = scenario[state.currentNode];

    const value = {
        ...state,
        currentScenario,
        makeChoice,
        restart,
    };

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
}

export function useGame() {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error('useGame must be used within a GameProvider');
    }
    return context;
}
