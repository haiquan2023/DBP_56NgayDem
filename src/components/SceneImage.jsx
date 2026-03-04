import { motion, AnimatePresence } from 'framer-motion';

// Mapping từ key sang mô tả cho ảnh placeholder
const imageDescriptions = {
    parachute_landing: {
        bg: 'from-gray-800 via-gray-700 to-gray-900',
        icon: '🪂',
        label: 'Quân Pháp nhảy dù xuống Điện Biên Phủ',
    },
    politburo_meeting: {
        bg: 'from-amber-900 via-yellow-900 to-amber-950',
        icon: '🏛️',
        label: 'Bộ Chính trị họp bàn quyết định',
    },
    ho_chi_minh: {
        bg: 'from-red-900 via-red-800 to-red-950',
        icon: '⭐',
        label: 'Chủ tịch Hồ Chí Minh',
    },
    war_map: {
        bg: 'from-green-900 via-emerald-900 to-green-950',
        icon: '🗺️',
        label: 'Bản đồ chiến lược Điện Biên Phủ',
    },
    defeat: {
        bg: 'from-gray-900 via-gray-800 to-black',
        icon: '💔',
        label: 'Cơ hội lịch sử bị bỏ lỡ',
    },
    army_march: {
        bg: 'from-green-800 via-emerald-800 to-green-900',
        icon: '🎖️',
        label: 'Đại quân hành quân lên Tây Bắc',
    },
    giap_thinking: {
        bg: 'from-slate-800 via-slate-700 to-slate-900',
        icon: '🎯',
        label: 'Đại tướng Võ Nguyên Giáp suy tính',
    },
    strategy_decision: {
        bg: 'from-amber-800 via-orange-900 to-amber-950',
        icon: '⚔️',
        label: 'Quyết định phương châm tác chiến',
    },
    defeat_battle: {
        bg: 'from-red-950 via-gray-900 to-black',
        icon: '💥',
        label: 'Cuộc tấn công thất bại',
    },
    pulling_cannons: {
        bg: 'from-emerald-900 via-green-800 to-emerald-950',
        icon: '🔫',
        label: 'Kéo pháo vượt đèo',
    },
    supply_route: {
        bg: 'from-yellow-900 via-amber-800 to-yellow-950',
        icon: '🛤️',
        label: 'Tuyến đường tiếp tế',
    },
    bicycle_supply: {
        bg: 'from-lime-900 via-green-800 to-lime-950',
        icon: '🚲',
        label: '260.000 dân công và xe đạp thồ',
    },
    supply_shortage: {
        bg: 'from-stone-800 via-stone-700 to-stone-900',
        icon: '📦',
        label: 'Hậu cần thiếu thốn',
    },
    battle_preparation: {
        bg: 'from-zinc-800 via-neutral-700 to-zinc-900',
        icon: '⚔️',
        label: 'Chuẩn bị chiến dịch',
    },
    him_lam_battle: {
        bg: 'from-orange-900 via-red-900 to-orange-950',
        icon: '🔥',
        label: 'Trận Him Lam - Đêm lửa',
    },
    artillery_battle: {
        bg: 'from-red-800 via-orange-800 to-red-900',
        icon: '💥',
        label: 'Pháo binh khai hỏa',
    },
    him_lam_victory: {
        bg: 'from-green-700 via-emerald-700 to-green-800',
        icon: '🏴',
        label: 'Him Lam thất thủ',
    },
    wave1_victory: {
        bg: 'from-emerald-700 via-green-700 to-emerald-800',
        icon: '🎖️',
        label: 'Đợt 1 thắng lợi',
    },
    wave2_trench: {
        bg: 'from-stone-700 via-zinc-700 to-stone-800',
        icon: '⛏️',
        label: 'Chiến hào bao vây',
    },
    a1_hill_battle: {
        bg: 'from-red-800 via-red-700 to-red-900',
        icon: '⛰️',
        label: 'Trận đồi A1',
    },
    trench_approach: {
        bg: 'from-amber-700 via-yellow-700 to-amber-800',
        icon: '🔄',
        label: 'Vây lấn siết chặt vòng vây',
    },
    fierce_battle: {
        bg: 'from-red-900 via-red-800 to-red-950',
        icon: '⚡',
        label: 'Chiến đấu ác liệt',
    },
    a1_hill: {
        bg: 'from-amber-800 via-orange-700 to-amber-900',
        icon: '⛰️',
        label: 'Đồi A1 - 39 ngày đêm',
    },
    a1_explosion: {
        bg: 'from-yellow-600 via-orange-600 to-red-700',
        icon: '💣',
        label: 'Khối bộc phá phát nổ dưới đồi A1',
    },
    final_preparation: {
        bg: 'from-slate-700 via-gray-700 to-slate-800',
        icon: '📋',
        label: 'Chuẩn bị tổng công kích',
    },
    supply_failure: {
        bg: 'from-gray-900 via-stone-800 to-gray-950',
        icon: '❌',
        label: 'Hậu cần sụp đổ',
    },
    final_assault: {
        bg: 'from-red-700 via-orange-700 to-red-800',
        icon: '🚩',
        label: 'Tổng công kích',
    },
    total_assault: {
        bg: 'from-red-600 via-orange-600 to-red-700',
        icon: '⚔️',
        label: 'Tổng tiến công',
    },
    de_castries_bunker: {
        bg: 'from-yellow-700 via-amber-600 to-yellow-800',
        icon: '🏳️',
        label: 'Hầm De Castries thất thủ',
    },
    victory_flag: {
        bg: 'from-red-600 via-yellow-500 to-red-600',
        icon: '🇻🇳',
        label: 'Chiến thắng Điện Biên Phủ',
    },
    victory_celebration: {
        bg: 'from-green-600 via-yellow-500 to-green-600',
        icon: '🎉',
        label: 'Mừng chiến thắng',
    },
    // Kịch bản mới
    'hop_tin_keo.webp': {
        bg: 'from-amber-900 via-yellow-900 to-amber-950',
        icon: '🏛️',
        label: 'Bộ Chính trị họp tại Tỉn Keo',
    },
    'bac_ho_giao_nhiem_vu.webp': {
        bg: 'from-red-900 via-red-800 to-red-950',
        icon: '⭐',
        label: 'Bác Hồ giao nhiệm vụ',
    },
    'trinh_sat_dia_hinh.webp': {
        bg: 'from-green-800 via-emerald-800 to-green-900',
        icon: '🔍',
        label: 'Trinh sát địa hình',
    },
    'muong_phang_trannho.webp': {
        bg: 'from-amber-800 via-orange-900 to-amber-950',
        icon: '⚔️',
        label: 'Mường Phăng - Quyết định lịch sử',
    },
    'keo_phao_ra.webp': {
        bg: 'from-emerald-900 via-green-800 to-emerald-950',
        icon: '🔫',
        label: 'Kéo pháo ra khỏi trận địa',
    },
    'to_vinh_dien_hy_sinh.webp': {
        bg: 'from-red-800 via-red-700 to-red-900',
        icon: '🛡️',
        label: 'Anh hùng Tô Vĩnh Diện hy sinh',
    },
    'xe_dap_tho.webp': {
        bg: 'from-lime-900 via-green-800 to-lime-950',
        icon: '🚲',
        label: 'Xe đạp thồ tiếp tế',
    },
    'nguy_trang_duong_di.webp': {
        bg: 'from-green-700 via-emerald-700 to-green-800',
        icon: '🌿',
        label: 'Ngụy trang đường đi',
    },
    'bep_hoang_cam.webp': {
        bg: 'from-stone-700 via-zinc-700 to-stone-800',
        icon: '🍲',
        label: 'Bếp Hoàng Cầm không khói',
    },
    'him_lam_fire.webp': {
        bg: 'from-orange-900 via-red-900 to-orange-950',
        icon: '🔥',
        label: 'Trận Him Lam - Đêm lửa',
    },
    'phan_dinh_giot.webp': {
        bg: 'from-red-800 via-orange-800 to-red-900',
        icon: '💥',
        label: 'Anh hùng Phan Đình Giót',
    },
    'phao_binh_vn.webp': {
        bg: 'from-red-700 via-orange-700 to-red-800',
        icon: '💣',
        label: 'Pháo binh Việt Nam',
    },
    'dao_hao_vayan.webp': {
        bg: 'from-stone-700 via-zinc-700 to-stone-800',
        icon: '⛏️',
        label: 'Đào hào vây lấn',
    },
    'be_van_dan.webp': {
        bg: 'from-red-800 via-red-700 to-red-900',
        icon: '🎯',
        label: 'Anh hùng Bế Văn Đàn',
    },
    'ban_tia.webp': {
        bg: 'from-slate-800 via-slate-700 to-slate-900',
        icon: '🎯',
        label: 'Bắn tỉa săn Tây',
    },
    'bun_lay_dien_bien.webp': {
        bg: 'from-blue-900 via-slate-800 to-blue-950',
        icon: '🌧️',
        label: 'Mùa mưa - Bùn lầy Điện Biên',
    },
    'du_tiep_te.webp': {
        bg: 'from-yellow-700 via-amber-600 to-yellow-800',
        icon: '🪂',
        label: 'Dù tiếp tế của địch',
    },
    'khoi_boc_pha_a1.webp': {
        bg: 'from-yellow-600 via-orange-600 to-red-700',
        icon: '💣',
        label: 'Khối bộc phá đồi A1',
    },
    'tan_cong_ham_decast.webp': {
        bg: 'from-red-600 via-orange-600 to-red-700',
        icon: '🚩',
        label: 'Tấn công hầm De Castries',
    },
    'logistics_fail.jpg': {
        bg: 'from-gray-900 via-stone-800 to-gray-950',
        icon: '❌',
        label: 'Hậu cần sụp đổ',
    },
    'defeat.jpg': {
        bg: 'from-gray-900 via-gray-800 to-black',
        icon: '💔',
        label: 'Thất bại tại Điện Biên Phủ',
    },
    'victory_flag.webp': {
        bg: 'from-red-600 via-yellow-500 to-red-600',
        icon: '🇻🇳',
        label: 'Lá cờ chiến thắng trên hầm De Castries',
    },
    'oanhtac.webp': {
        bg: 'from-orange-900 via-red-900 to-orange-950',
        icon: '💥',
        label: 'Máy bay Pháp oanh tạc đèo Pha Đinh',
    },
    'rutluidoia1.jpg': {
        bg: 'from-red-950 via-gray-900 to-black',
        icon: '💥',
        label: 'Rút lui đồi A1 - Tổn thất nặng nề',
    },
    'nhiep-anh-070521-6.jpg': {
        bg: 'from-green-700 via-emerald-700 to-green-800',
        icon: '🏴',
        label: 'Cờ chiến thắng tung bay trên đồi A1',
    },
    'tuong decat.jpg': {
        bg: 'from-yellow-700 via-amber-600 to-yellow-800',
        icon: '🏳️',
        label: 'Tướng De Castries đầu hàng',
    },
    'xungphong2.webp': {
        bg: 'from-orange-900 via-red-900 to-orange-950',
        icon: '⚔️',
        label: 'Xung phong tại Him Lam',
    },
    'cu diem himlam.jpg': {
        bg: 'from-stone-800 via-zinc-700 to-stone-900',
        icon: '🏰',
        label: 'Cứ điểm Him Lam - Chuẩn bị đợt 2',
    },
    'phao.webp': {
        bg: 'from-red-800 via-orange-800 to-red-900',
        icon: '💣',
        label: 'Pháo binh bị oanh tạc',
    },
    'cp43-9d61a.webp': {
        bg: 'from-red-900 via-red-800 to-red-950',
        icon: '⚔️',
        label: 'Đồi E - Bế Văn Đàn bám trụ',
    },
    'dbpbaovay.jpg': {
        bg: 'from-red-950 via-gray-900 to-black',
        icon: '💥',
        label: 'Tấn công thất bại - Tổn thất nặng',
    },
};

export default function SceneImage({ imageKey, isTransitioning }) {
    // Trường hợp đặc biệt: dùng ảnh thật cho một số cảnh
    if (imageKey === 'hop_tin_keo.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/atk-1-1440x913.webp"
                                alt="Bộ Chính trị họp tại Tỉn Keo"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        {/* Vignette + overlay đáy để dễ đọc chữ */}
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'bac_ho_giao_nhiem_vu.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/HCMVNG.webp"
                                alt="Chủ tịch Hồ Chí Minh giao nhiệm vụ cho Đại tướng Võ Nguyên Giáp"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'muong_phang_dem.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/a1-20-21-1.webp"
                                alt="Đêm Mường Phăng - Sở chỉ huy chiến dịch"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'muong_phang_vng.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/Chien_dich_Dong_Xuan_1954-1.webp"
                                alt="Đại tướng Võ Nguyên Giáp trăn trở quyết định"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'him_lam.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/naphao.jpg"
                                alt="Trận Him Lam - Đợt 1 tấn công"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'him_lam_intensity.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/PDG.webp"
                                alt="Trận Him Lam - Hỏa lực ác liệt"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'phan_dinh_giot_action.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/Phan Dinh Giot lay than minh lap lo chau mai.jpg"
                                alt="Phan Đình Giót lấy thân mình lấp lỗ châu mai"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'phan_dinh_giot_loicuoi.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/phan-dinh-giot-110424.jpg"
                                alt="Phan Đình Giót - Quyết hy sinh vì Đảng, vì dân"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'dao_hao.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/dbp-31-3-01.jpg"
                                alt="Đào hào vây lấn đồi A1"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'be_van_dan_hero.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/bevandan.jpeg"
                                alt="Anh hùng Bế Văn Đàn lấy vai làm giá súng"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'be_van_dan_victory.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/bevandan.jpeg"
                                alt="Bế Văn Đàn hy sinh khi đứng làm giá súng"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'boc_pha_a1_no.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/bocphadoia1.webp"
                                alt="Khối bộc phá 1000kg nổ trên đồi A1"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'giap_la_ca_a1.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/db1-800x420.jpg"
                                alt="Chiến đấu giáp lá cà trên đồi A1"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'tan_cong_muong_thanh.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/MuongThanh.jpg"
                                alt="Tấn công qua cầu Mường Thanh"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'san_sang_chien_dau.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/dbp2-13324.jpg"
                                alt="Sẵn sàng chiến đấu - Him Lam"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'dbpbaovay.jpg') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/dbpbaovay.jpg"
                                alt="Tấn công trực diện thất bại - Tổn thất nặng nề"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'cp43-9d61a.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/cp43-9d61a.webp"
                                alt="Đồi E - Tiểu đội Bế Văn Đàn bám trụ trận địa"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'phao.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/phao.webp"
                                alt="Trận địa pháo bị máy bay Pháp oanh tạc"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'cu diem himlam.jpg') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/cu diem himlam.jpg"
                                alt="Cứ điểm Him Lam - Chuẩn bị cho đợt tấn công thứ 2"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'xungphong2.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/xungphong2.webp"
                                alt="Xung phong tại Him Lam - Hỏa lực ác liệt"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'tuong decat.jpg') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/tuong decat.jpg"
                                alt="Tướng De Castries đầu hàng"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'nhiep-anh-070521-6.jpg') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/nhiep-anh-070521-6.jpg"
                                alt="Lá cờ Quyết chiến quyết thắng tung bay trên đồi A1"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'rutluidoia1.jpg') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/rutluidoia1.jpg"
                                alt="Rút lui đồi A1 - Ta buộc phải lùi quân"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'oanhtac.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/oanhtac.webp"
                                alt="Máy bay Pháp oanh tạc đoàn xe tải trên đèo Pha Đinh"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'xe_dap_tho.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/images.jpg"
                                alt="Xe đạp thồ tiếp tế cho mặt trận"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'chuan_bi_hau_can.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/13.webp"
                                alt="Chuẩn bị hậu cần cho chiến dịch"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'nguy_trang.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/nhan dan.webp"
                                alt="Dân công hỏa tuyến ngụy trang vận chuyển"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'to_vinh_dien_loicuoi.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/59265508_111803156700479_1370101168788733952_n.jpg"
                                alt="Lời cuối của Anh hùng Tô Vĩnh Diện"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'to_vinh_dien_hi_sinh.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/unnamed.png"
                                alt="Tô Vĩnh Diện hy sinh chèn pháo"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'canh_hon_loan.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/keophao.webp"
                                alt="Pháo trôi - cảnh hỗn loạn"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'keo_phao_dem.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/keo-phao-1494043894026.webp"
                                alt="Kéo pháo trong đêm qua dốc dựng đứng"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'chien_si_keo_phao.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/keo-phao-1494043894026.webp"
                                alt="Chiến sĩ gồng mình kéo pháo trong đêm"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'keo_phao_ra.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/phao_binh_1.webp"
                                alt="Kéo pháo ra - hành trình gian nan"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'trinh_sat_dia_hinh.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/210821hvt.webp"
                                alt="Thiếu tướng Hoàng Văn Thái chỉ đạo trinh sát địa hình"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    if (imageKey === 'muong_phang_trannho.webp') {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={imageKey}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div className="w-full h-full flex items-center justify-center bg-black">
                            <img
                                src="/a1-20-21-3.webp"
                                alt="Mường Phăng - Quyết định lịch sử"
                                className="h-[80vh] w-auto object-contain"
                            />
                        </div>
                        <div className="absolute inset-0 vignette pointer-events-none" />
                        <div className="absolute inset-0 scene-overlay pointer-events-none" />
                    </motion.div>
                </AnimatePresence>
            </div>
        );
    }

    const scene = imageDescriptions[imageKey] || {
        bg: 'from-gray-800 to-gray-900',
        icon: '🎬',
        label: 'Cảnh',
    };

    return (
        <div className="relative w-full h-full overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={imageKey}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className={`absolute inset-0 bg-gradient-to-br ${scene.bg}`}
                >
                    {/* Pattern overlay */}
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a332' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                    />

                    {/* Centered icon */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <motion.span
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="text-7xl md:text-8xl mb-4 drop-shadow-2xl"
                            style={{ filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.5))' }}
                        >
                            {scene.icon}
                        </motion.span>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="text-sm md:text-base text-white/60 font-body-vn tracking-wide text-center px-4"
                        >
                            {scene.label}
                        </motion.p>
                    </div>

                    {/* Vignette */}
                    <div className="absolute inset-0 vignette" />
                </motion.div>
            </AnimatePresence>

            {/* Bottom gradient overlay */}
            <div className="absolute inset-0 scene-overlay pointer-events-none" />
        </div>
    );
}
