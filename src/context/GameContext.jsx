import { createContext, useContext, useReducer, useCallback } from 'react';
import { scenario } from '../data/scenario';

const GameContext = createContext(null);

const initialState = {
    currentNode: 'start',
    vp: 0,
    lp: 0,
    choices: [],
    isGameOver: false,
};

function gameReducer(state, action) {
    switch (action.type) {
        case 'MAKE_CHOICE': {
            const { next, impact } = action.payload;
            const newVp = state.vp + (impact?.vp || 0);
            const newLp = state.lp + (impact?.lp || 0);
            const newChoices = [...state.choices, next];

            // Kiểm tra node tiếp theo
            const targetNode = scenario[next];

            if (!targetNode) {
                return {
                    ...state,
                    vp: newVp,
                    lp: newLp,
                    choices: newChoices,
                };
            }

            // Kiểm tra nếu node là final_gate (có next là function)
            if (typeof targetNode.next === 'function') {
                const stats = { vp: newVp, lp: newLp };
                const endingKey = targetNode.next(stats);
                return {
                    ...state,
                    currentNode: endingKey,
                    vp: newVp,
                    lp: newLp,
                    choices: newChoices,
                    isGameOver: true,
                };
            }

            // Kiểm tra ending (isEnd = true)
            if (targetNode.isEnd) {
                return {
                    ...state,
                    currentNode: next,
                    vp: newVp,
                    lp: newLp,
                    choices: newChoices,
                    isGameOver: true,
                };
            }

            return {
                ...state,
                currentNode: next,
                vp: newVp,
                lp: newLp,
                choices: newChoices,
            };
        }

        case 'RESTART':
            return { ...initialState };

        default:
            return state;
    }
}

export function GameProvider({ children }) {
    const [state, dispatch] = useReducer(gameReducer, initialState);

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
