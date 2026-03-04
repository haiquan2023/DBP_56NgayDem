import { useState, useEffect, useRef } from 'react';

/**
 * DialogBox hỗ trợ đa góc nhìn:
 * - Nhận props `dialogues`: mảng { speaker, text }
 * - Tự động đổi tên Speaker và nội dung theo từng đoạn
 * - Gõ chữ kiểu typewriter, click để skip / chuyển đoạn
 */
export default function DialogBox({ dialogues, onTextComplete }) {
    const safeDialogues = dialogues && dialogues.length
        ? dialogues
        : [{ speaker: '', text: '' }];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);

    const intervalRef = useRef(null);
    const textRef = useRef(safeDialogues[0].text || '');

    const currentDialogue = safeDialogues[currentIndex] || safeDialogues[0];
    const currentSpeaker = currentDialogue.speaker;
    const currentText = currentDialogue.text || '';

    // Hiệu ứng gõ chữ cho từng đoạn thoại
    useEffect(() => {
        clearInterval(intervalRef.current);

        textRef.current = currentText;
        setDisplayedText('');
        setIsComplete(false);

        if (!currentText) return;

        let charIndex = 0;
        intervalRef.current = setInterval(() => {
            if (charIndex < textRef.current.length) {
                setDisplayedText(textRef.current.substring(0, charIndex + 1));
                charIndex++;
            } else {
                clearInterval(intervalRef.current);
                setIsComplete(true);
            }
        }, 25);

        return () => clearInterval(intervalRef.current);
    }, [currentText]);

    // Click để skip / chuyển đoạn / hoàn tất node
    const handleClick = () => {
        // Chưa gõ xong -> skip
        if (!isComplete) {
            clearInterval(intervalRef.current);
            setDisplayedText(textRef.current);
            setIsComplete(true);
            return;
        }

        // Đã gõ xong, còn đoạn tiếp theo -> chuyển đoạn
        if (currentIndex < safeDialogues.length - 1) {
            setCurrentIndex((prev) => prev + 1);
            return;
        }

        // Đã là đoạn cuối -> báo hoàn tất để hiển thị lựa chọn
        onTextComplete?.();
    };

    // Nhấn Space để skip / chuyển đoạn (giống click)
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === 'Space') {
                e.preventDefault();
                handleClick();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    });

    return (
        <div
            className="dialog-box relative p-5 md:p-6 cursor-pointer"
            onClick={handleClick}
        >
            {/* Speaker name - chỉ hiển thị khi không phải Người dẫn chuyện */}
            {currentSpeaker && currentSpeaker !== 'Người dẫn chuyện' && (
                <div className="mb-3">
                    <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-brass-400/20 to-transparent border-l-2 border-brass-400 rounded-r-md">
                        <span className="text-brass-300 font-serif-vn text-sm md:text-base font-semibold tracking-wide">
                            {currentSpeaker}
                        </span>
                    </span>
                </div>
            )}

            {/* Text content - vùng cuộn cố định bên trong hộp thoại */}
            <div className="mt-2 h-[120px] md:h-[130px] overflow-y-auto">
                <p className="text-gray-200 font-body-vn text-sm md:text-base leading-relaxed whitespace-pre-line">
                    {displayedText}
                    {!isComplete && (
                        <span className="typewriter-cursor" />
                    )}
                </p>
            </div>

            {/* Click hint */}
            <div className="absolute bottom-2 right-4">
                <span className="text-brass-400/40 text-xs font-body-vn">
                    {isComplete ? 'Nhấn hoặc Space để tiếp tục ▸' : 'Nhấn hoặc Space để bỏ qua ▸'}
                </span>
            </div>
        </div>
    );
}
