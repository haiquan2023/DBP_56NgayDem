import { motion } from 'framer-motion';

export default function TitleScreen({ onStart }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 flex flex-col items-center justify-center p-6 z-50 bg-cover bg-center"
                style={{
                backgroundImage: 'url("/094801-10.webp")',
            }}
        >
            {/* Dark overlay + vignette để dễ đọc chữ trên ảnh */}
            <div className="absolute inset-0 bg-black/55 pointer-events-none" />
            <div className="absolute inset-0 vignette pointer-events-none" />

            {/* Nội dung chính đặt trên overlay */}
            <div className="relative z-10 flex flex-col items-center justify-start pt-14 md:pt-20">
            {/* Title */}
            <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-4xl md:text-6xl font-serif-vn font-extrabold text-center title-text mb-3 tracking-wider"
            >
                56 NGÀY ĐÊM
            </motion.h1>

            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="w-48 h-0.5 bg-gradient-to-r from-transparent via-brass-400 to-transparent mb-4"
            />

            <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-xl md:text-2xl font-serif-vn text-brass-300/80 text-center mb-2"
            >
                ĐIỆN BIÊN PHỦ 1954
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                    className="text-sm md:text-base text-gray-300 font-body-vn text-center max-w-sm md:max-w-md mb-12 leading-relaxed"
            >
                Trải nghiệm những quyết định lịch sử dẫn đến chiến thắng
                <br />
                <span className="text-brass-400/60 italic">"Lừng lẫy năm châu, chấn động địa cầu"</span>
            </motion.p>

            {/* Start button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.5 }}
            >
                <motion.button
                        whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onStart}
                        className="px-10 py-3.5 bg-gradient-to-r from-brass-500/30 via-brass-400/40 to-brass-500/30 border border-brass-300 rounded-xl text-brass-200 font-serif-vn text-lg font-bold tracking-widest transition-all duration-400 shadow-[0_0_18px_rgba(212,163,50,0.45)] hover:shadow-[0_0_26px_rgba(243,216,136,0.7)] hover:from-brass-500/50 hover:to-brass-500/50"
                    id="start-button"
                >
                    BẮT ĐẦU
                </motion.button>
            </motion.div>

            {/* Bottom decoration */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.8 }}
                    className="mt-10 text-center"
            >
                    <p className="text-xs text-gray-300 font-body-vn footer-soft-shadow">
                        Một sản phẩm phục vụ môn học VNR202
                </p>
            </motion.div>
            </div>
        </motion.div>
    );
}
