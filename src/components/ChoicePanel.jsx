import { motion, AnimatePresence } from 'framer-motion';

export default function ChoicePanel({ options, onChoice, visible }) {
    if (!visible || !options || options.length === 0) return null;

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="space-y-3 mt-4"
                >
                    {options.map((option, index) => (
                        <motion.button
                            key={`${option.next}-${index}`}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: 0.15 * index,
                                duration: 0.4,
                                ease: 'easeOut',
                            }}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => onChoice(option.next, option.impact)}
                            className="choice-btn w-full text-sm md:text-base"
                            id={`choice-${index}`}
                        >
                            <span className="font-body-vn">{option.text}</span>
                        </motion.button>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
