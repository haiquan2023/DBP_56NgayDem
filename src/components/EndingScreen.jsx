import { motion } from 'framer-motion';
import { useGame } from '../context/GameContext';

const endingConfig = {
    true_ending: {
        title: 'CHIẾN THẮNG VĨ ĐẠI',
        subtitle: '"Lừng lẫy năm châu, chấn động địa cầu"',
        icon: '🇻🇳',
        gradient: 'from-red-600 via-yellow-500 to-red-600',
        borderColor: 'border-yellow-400',
        glowColor: 'shadow-yellow-500/30',
        textColor: 'text-yellow-300',
    },
    bad_ending_early: {
        title: 'CƠ HỘI BỊ BỎ LỠ',
        subtitle: 'Lịch sử đã không diễn ra như vậy',
        icon: '💔',
        gradient: 'from-gray-800 via-gray-700 to-gray-900',
        borderColor: 'border-gray-500',
        glowColor: 'shadow-gray-500/20',
        textColor: 'text-gray-400',
    },
    bad_ending_military: {
        title: 'THẤT BẠI QUÂN SỰ',
        subtitle: 'Chiến thuật thiếu đồng bộ',
        icon: '⚠️',
        gradient: 'from-red-900 via-red-800 to-gray-900',
        borderColor: 'border-red-500',
        glowColor: 'shadow-red-500/20',
        textColor: 'text-red-400',
    },
    bad_ending_logistics: {
        title: 'HẬU CẦN SỤP ĐỔ',
        subtitle: 'Kiệt quệ về hậu cần',
        icon: '📦',
        gradient: 'from-stone-800 via-stone-700 to-gray-900',
        borderColor: 'border-stone-500',
        glowColor: 'shadow-stone-500/20',
        textColor: 'text-stone-400',
    },
};

export default function EndingScreen() {
    const { currentScenario, currentNode, restart } = useGame();
    const config = endingConfig[currentNode] || endingConfig.bad_ending_early;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className={`fixed inset-0 bg-gradient-to-br ${config.gradient} flex flex-col items-center justify-center p-6 z-50`}
        >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M40 0l40 40-40 40L0 40z' fill-opacity='0.1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            {/* Content */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className={`relative max-w-2xl w-full bg-black/50 backdrop-blur-md rounded-2xl border-2 ${config.borderColor} p-8 md:p-10 shadow-2xl ${config.glowColor} ending-glow`}
            >
                {/* Icon */}
                <motion.div
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="text-center mb-6"
                >
                    <span className="text-6xl md:text-7xl">{config.icon}</span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="text-3xl md:text-4xl font-serif-vn font-bold text-center title-text mb-2"
                >
                    {config.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className={`text-center ${config.textColor} font-serif-vn text-lg mb-6`}
                >
                    {config.subtitle}
                </motion.p>

                {/* Divider */}
                <div className="flex items-center justify-center mb-6">
                    <div className="h-px w-16 bg-brass-400/30" />
                    <span className="mx-3 text-brass-400 text-sm">★</span>
                    <div className="h-px w-16 bg-brass-400/30" />
                </div>

                {/* Story text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="mb-8 max-h-48 overflow-y-auto"
                >
                    <p className="text-gray-300 font-body-vn text-sm md:text-base leading-relaxed whitespace-pre-line">
                        {currentScenario?.text}
                    </p>
                </motion.div>



                {/* Restart button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2, duration: 0.5 }}
                    className="text-center"
                >
                    <button
                        onClick={restart}
                        className="px-8 py-3 bg-gradient-to-r from-brass-400/20 to-brass-500/20 border border-brass-400 rounded-lg text-brass-200 font-body-vn font-medium hover:from-brass-400/30 hover:to-brass-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-brass-400/20"
                        id="restart-button"
                    >
                        🔄 Chơi lại từ đầu
                    </button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
