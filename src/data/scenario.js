export const scenario = {
  // --- CHƯƠNG 1: KHỞI ĐỘNG CHIẾN DỊCH ---
  start: {
    speaker: "Người dẫn chuyện",
    text: "Tháng 12/1953, thực dân Pháp nhảy dù xuống Điện Biên Phủ, xây dựng 49 cứ điểm với 16.200 quân tinh nhuệ. Tại lán Tỉn Keo, Bộ Chính trị họp dưới sự chủ trì của Bác Hồ cùng Đại tướng Võ Nguyên Giáp để đưa ra quyết định lịch sử.",
    image: "hop_tin_keo.webp",
    options: [
      { text: "Chọn Điện Biên Phủ làm điểm quyết chiến chiến lược", next: "assignment", impact: { vp: 3 } },
      { text: "Rút quân về giữ vùng đồng bằng", next: "bad_ending_early", impact: { vp: -30 } }
    ]
  },

  assignment: {
    speaker: "Chủ tịch Hồ Chí Minh",
    text: "Trận này rất quan trọng, phải đánh cho thắng. Chắc thắng mới đánh, không chắc thắng không đánh.",
    image: "bac_ho_giao_nhiem_vu.webp",
    options: [{ text: "Hứa với Bác: 'Quyết tâm đánh thắng!'", next: "decide_strategy_intro", impact: { vp: 2 } }]
  },

  // --- CHƯƠNG 2: PHƯƠNG CHÂM TÁC CHIẾN ---
  decide_strategy_intro: {
    speaker: "Người dẫn chuyện",
    text: "Đêm 25/01/1954, Sở chỉ huy Mường Phăng chìm trong tĩnh lặng. Trên bàn làm việc, ngọn đèn dầu của Đại tướng vẫn cháy sáng. Địch đã tăng cường lực lượng, Điện Biên Phủ không còn là một tập đoàn cứ điểm sơ hở như dự tính ban đầu...",
    image: "muong_phang_dem.webp",
    options: [{ text: "Theo dõi tâm trạng Đại tướng", next: "decide_strategy_vng" }]
  },

  decide_strategy_vng: {
    speaker: "Đại tướng Võ Nguyên Giáp",
    text: "Địch không còn ở thế bị động nhảy dù. Nếu ta đánh nhanh theo kế hoạch cũ, liệu xương máu chiến sĩ có đổ xuống vô ích? Phải tạm dừng nổ súng để kéo pháo ra...",
    image: "muong_phang_vng.webp",
    options: [
      { text: "Chuyển sang 'Đánh chắc, tiến chắc'", next: "steady_path", impact: { vp: 20 } },
      { text: "Giữ nguyên 'Đánh nhanh, thắng nhanh'", next: "fast_path_fail", impact: { vp: -25 } }
    ]
  },

  steady_path: {
    speaker: "Người dẫn chuyện",
    text: "Quyết định kéo pháo ra là một hành trình gian nan nhưng đảm bảo sự chắc thắng cho quân ta.",
    image: "keo_phao_ra.webp",
    options: [{ text: "Tiến ra trận địa pháo", next: "artillery_struggle", impact: { vp: 5 } }]
  },

  fast_path_fail: {
    speaker: "Người dẫn chuyện",
    text: "Lệnh nổ súng sớm khiến trận địa pháo của ta bị máy bay Pháp oanh tạc dữ dội khi chưa kịp ngụy trang kỹ. Nhiều khẩu pháo bị phá hủy ngay trước giờ khai hỏa.",
    image: "phao.webp",
    options: [{ text: "Khẩn trương cứu số pháo còn lại", next: "artillery_struggle", impact: { vp: -10 } }]
  },

  // --- SCENE MIÊU TẢ SỰ GIAN KHỔ CỦA CHIẾN SĨ (MỚI) ---
  artillery_struggle: {
    speaker: "Người dẫn chuyện",
    text: "Dưới ánh đuốc lờ mờ, hàng trăm chiến sĩ gồng mình bám chặt vào dây cáp. Tiếng hò dô vang vọng giữa rừng đêm, hòa cùng tiếng thở dốc và tiếng xích sắt nghiền trên đá hộc. Vai áo ai cũng đẫm mồ hôi và bùn đất, nhưng không một bàn tay nào rời khỏi dây pháo.",
    image: "chien_si_keo_phao.webp",
    options: [{ text: "Vượt qua dốc cao", next: "artillery_transition" }]
  },

  artillery_transition: {
    speaker: "Người dẫn chuyện",
    text: "Dưới những cơn mưa rừng xối xả và làn bom đạn dày đặc của kẻ thù, hàng vạn chiến sĩ pháo binh vẫn kiên cường bám trụ. Những khẩu pháo nặng hàng tấn đang được nhích từng mét một qua những con dốc dựng đứng của vùng núi Tây Bắc.",
    image: "keo_phao_dem.webp",
    options: [{ text: "Bỗng nhiên nghe tiếng la thất thanh...", next: "hero_to_vinh_dien_1" }]
  },

  // --- SCENE ANH HÙNG: TÔ VĨNH DIỆN (CỐ ĐỊNH) ---
  hero_to_vinh_dien_1: {
    speaker: "Chiến sĩ kéo pháo",
    text: "Đứt dây rồi! Giữ lấy pháo! Anh em ơi, pháo trôi rồi!!!",
    image: "canh_hon_loan.webp",
    options: [{ text: "...", next: "hero_to_vinh_dien_2" }]
  },
  hero_to_vinh_dien_2: {
    speaker: "Người dẫn chuyện",
    text: "Giữa đêm tối, một chiến sĩ lao mình xuống dốc, dùng cơ thể chèn lại khối thép nặng hàng tấn đang lao vun vút xuống vực sâu.",
    image: "to_vinh_dien_hi_sinh.webp",
    options: [{ text: "...", next: "hero_to_vinh_dien_reveal" }]
  },
  hero_to_vinh_dien_reveal: {
    speaker: "Người dẫn chuyện",
    text: "Đó là anh Tô Vĩnh Diện - Trung đội phó thuộc Đại đội 829, Tiểu đoàn 394, Trung đoàn 367.",
    image: "to_vinh_dien_hi_sinh.webp",
    options: [{ text: "Nghe lời cuối của anh", next: "hero_to_vinh_dien_3" }]
  },
  hero_to_vinh_dien_3: {
    speaker: "Tô Vĩnh Diện",
    text: "Pháo... pháo có việc gì không anh em?",
    image: "to_vinh_dien_loicuoi.webp",
    options: [{ text: "Nén đau thương, tiếp tục chiến dịch", next: "logistics_transition", impact: { vp: 2 } }]
  },

  // --- SCENE CHUYỂN BỐI CẢNH HẬU CẦN (MỚI) ---
  logistics_transition: {
    speaker: "Người dẫn chuyện",
    text: "Nén nỗi đau mất mát đồng đội, quân ta khẩn trương củng cố trận địa pháo. Tuy nhiên, một bài toán nan giải khác đang đặt ra: Làm sao nuôi sống 5 vạn bộ đội và dân công giữa vòng vây lửa đạn khi mùa mưa đang cận kề?",
    image: "chuan_bi_hau_can.webp",
    options: [{ text: "Bắt đầu cuộc chiến hậu cần", next: "logistics_choice" }]
  },

  // --- CHƯƠNG 3: ĐIỂM RẼ NHÁNH 2 (HẬU CẦN) ---
  logistics_choice: {
    speaker: "Người dẫn chuyện",
    text: "Pháp tin rằng ta không thể tiếp tế cho mặt trận xa hậu phương hàng trăm km qua đèo Pha Đinh hiểm trở.",
    image: "xe_dap_tho.webp",
    options: [
      { text: "Huy động 260.000 dân công và xe đạp thồ", next: "camouflage_tactic", impact: { lp: 20 } },
      { text: "Duy trì vận tải cơ giới (Xe tải) để đi nhanh", next: "truck_disaster", impact: { lp: -15, vp: -5 } }
    ]
  },

  truck_disaster: {
    speaker: "Người dẫn chuyện",
    text: "Các đoàn xe tải bị máy bay Pháp phát hiện trên đèo Pha Đinh và oanh tạc dữ dội. Nguồn cung lương thực bị gián đoạn nghiêm trọng.",
    image: "oanhtac.webp",
    options: [{ text: "Chuyển sang huy động dân công bù đắp", next: "camouflage_tactic", impact: { lp: 5 } }]
  },

  camouflage_tactic: {
    speaker: "Dân công hỏa tuyến",
    text: "Máy bay địch soi rất kỹ ban đêm. Chúng ta nên xử lý thế nào để đoàn xe thồ vượt qua an toàn?",
    image: "nguy_trang.webp",
    options: [
      { text: "Ngụy trang lá rừng, đi đêm không đèn", next: "battle_preparation_transition", impact: { lp: 5, vp: 2 } },
      { text: "Đi thưa, dãn khoảng cách lớn để tránh bom", next: "battle_preparation_transition", impact: { lp: 2, vp: 0 } }
    ]
  },

  // --- SCENE CHUYỂN TIẾP TỚI ĐỢT TẤN CÔNG (MỚI) ---
  battle_preparation_transition: {
    speaker: "Người dẫn chuyện",
    text: "Lương thực đã đủ, đạn dược đã sẵn sàng. Những hầm pháo ngụy trang khéo léo đã hướng nòng về phía cứ điểm Him Lam. Cả mặt trận nín thở chờ đợi một hiệu lệnh lịch sử. Thời khắc quyết chiến đã điểm!",
    image: "san_sang_chien_dau.webp",
    options: [{ text: "Phát lệnh nổ súng!", next: "phase_1_start" }]
  },

  // --- CHƯƠNG 4: ĐỢT 1 - ANH HÙNG: PHAN ĐÌNH GIÓT (CỐ ĐỊNH) ---
  phase_1_start: {
    speaker: "Người dẫn chuyện",
    text: "17h05 ngày 13/03/1954, Đợt 1 tấn công Him Lam bắt đầu. Hỏa lực từ lỗ châu mai số 3 của địch quá mạnh, chặn đứng bước tiến quân ta.",
    image: "him_lam.webp",
    options: [{ text: "Một chiến sĩ xông lên", next: "him_lam_intensity" }]
  },

  // --- SCENE BỐI CẢNH TRẬN ĐÁNH ÁC LIỆT (MỚI BỔ SUNG) ---
  him_lam_intensity: {
    speaker: "Người dẫn chuyện",
    text: "Hỏa lực của Pháp từ các lô cốt quá mạnh, những làn đạn máy liên thanh quét điên cuồng khiến quân ta không thể tiến công. Giữa làn mưa bom bão đạn, một người lính bất ngờ đứng thẳng dậy, hô vang: 'Xung phong!'",
    image: "xungphong2.webp",
    options: [{ text: "Chứng kiến sự hy sinh anh dũng", next: "hero_phan_dinh_giot_1" }]
  },

  hero_phan_dinh_giot_1: {
    speaker: "Người dẫn chuyện",
    text: "Người chiến sĩ Phan Đình Giót dùng hết sức còn lại nâng khẩu tiểu liên lên, bắn mạnh vào lỗ châu mai kẻ thù. Anh áp lồng ngực vào lỗ châu mai chặn dòng hỏa lực đang khạc lửa, mở đường cho đồng đội xông lên diệt cứ điểm.",
    image: "phan_dinh_giot_action.webp",
    options: [{ text: "...", next: "hero_phan_dinh_giot_2" }]
  },

  hero_phan_dinh_giot_2: {
    speaker: "Phan Đình Giót",
    text: "Quyết hy sinh vì Đảng, vì dân!",
    image: "phan_dinh_giot_loicuoi.webp",
    options: [{ text: "Nén đau thương, tràn lên chiếm cứ điểm", next: "phase_2_transition", impact: { vp: 5 } }]
  },
  phase_2_transition: {
    speaker: "Người dẫn chuyện",
    text: "Chiến thắng Him Lam mở màn vang dội, nhưng quân ta cũng chịu nhiều tổn thất. Toàn bộ mặt trận khẩn trương chấn chỉnh lực lượng, củng cố trận địa. Trước mắt chúng ta lúc này là cụm cứ điểm phòng thủ kiên cố nhất của địch: Đồi A1.",
    image: "cu diem himlam.jpg",
    options: [{ text: "Hoàn tất chuẩn bị cho đợt 2", next: "phase_2_choice" }]
  },

  // --- CHƯƠNG 5: ĐIỂM RẼ NHÁNH 3 (VÂY LẤN ĐỒI A1) ---
  phase_2_choice: {
    speaker: "Người dẫn chuyện",
    text: "Trước hệ thống hầm ngầm kiên cố của đồi A1, ta nên áp dụng phương án tác chiến nào?",
    image: "dao_hao.webp",
    options: [
      { text: "Đào hào vây lấn, thắt chặt vòng vây", next: "hero_be_van_dan_intro", impact: { vp: 10, lp: 5 } },
      { text: "Tấn công trực diện để dứt điểm nhanh", next: "assault_bloodshed", impact: { vp: -20 } }
    ]
  },

  assault_bloodshed: {
    speaker: "Người dẫn chuyện",
    text: "Tấn công trực diện khiến quân ta chịu hỏa lực mạnh, tổn thất lớn. Ta buộc phải quay lại phương án đào hào vây lấn.",
    image: "dbpbaovay.jpg",
    options: [{ text: "Triển khai đào hào", next: "hero_be_van_dan_intro", impact: { vp: -5 } }]
  },

  hero_be_van_dan_intro: {
    speaker: "Người dẫn chuyện",
    text: "Trong lúc đại quân đang vây lấn đồi A1, tại đồi E, tiểu đội của Bế Văn Đàn chỉ còn lại 3 người đối mặt với đợt phản công dữ dội của địch.",
    image: "cp43-9d61a.webp",
    options: [{ text: "Quyết bám trụ trận địa", next: "hero_be_van_dan_1" }]
  },

  hero_be_van_dan_1: {
    speaker: "Bế Văn Đàn",
    text: "Kẻ thù trước mặt, bắn chết chúng nó đi! Lấy vai tôi làm giá súng đây!",
    image: "be_van_dan_hero.webp",
    options: [{ text: "...", next: "hero_be_van_dan_final" }]
  },

  hero_be_van_dan_final: {
    speaker: "Người dẫn chuyện",
    text: "Bế Văn Đàn đã hy sinh khi đôi tay vẫn còn ghì chặt chân súng trên vai cho đồng đội nhả đạn. Sự quả cảm ấy đã bẻ gãy đợt phản công của kẻ thù.",
    image: "be_van_dan_victory.webp",
    options: [{ text: "Tiến về cao điểm A1", next: "tunnel_a1", impact: { vp: 5 } }]
  },

  // --- CHƯƠNG 6: TIẾNG NỔ NGÀN CÂN ---
  tunnel_a1: {
    speaker: "Người dẫn chuyện",
    text: "Đúng 20 giờ 30 phút ngày 06/05/1954, khối bộc phá 1000kg thổi bay một mảng lớn hệ thống phòng thủ của địch trên đồi A1.",
    image: "boc_pha_a1_no.webp",
    options: [{ text: "Phát lệnh Tổng công kích!", next: "battle_a1_combat", impact: { vp: 10 } }]
  },

  // --- CHƯƠNG 7: QUYẾT CHIẾN ĐỒI A1 & HẦM DE CASTRIES ---
  battle_a1_combat: {
    speaker: "Chiến sĩ Quân đội",
    text: "Các chiến sĩ đại đoàn 312 và 316 từ các hướng hào vây lấn đồng loạt xông lên. Địch vẫn chống trả điên cuồng từ các ngách hầm ngầm!",
    image: "giap_la_ca_a1.webp",
    options: [
      { text: "Dùng bộc phá ống tiêu diệt từng ụ súng", next: "final_assault_decast", impact: { vp: 5 } },
      { text: "Xung phong trực diện vào làn đạn máy liên thanh", next: "final_assault_decast", impact: { vp: -10 } }
    ]
  },

  victory_a1_flag: {
    speaker: "Người dẫn chuyện",
    text: "Sau nhiều giờ chiến đấu giáp lá cà vô cùng ác liệt, quân ta đã làm chủ hoàn toàn 'điểm cao chết chóc'. Lá cờ 'Quyết chiến quyết thắng' kiêu hãnh tung bay trên nóc hầm đồi A1, báo hiệu ngày tàn của tập đoàn cứ điểm.",
    image: "nhiep-anh-070521-6.jpg",
    options: [{ text: "Chứng kiến khoảnh khắc lịch sử", next: "de_castries_surrender" }]
  },

  final_assault_decast: {
    speaker: "Người dẫn chuyện",
    text: "Sáng 07/05/1954, các cánh quân ta vượt qua cầu Mường Thanh, đánh thẳng vào trung tâm - nơi có hầm chỉ huy của tướng De Castries.",
    image: "tan_cong_muong_thanh.webp",
    options: [
      { text: "Đưa tổ xung kích đánh thẳng vào sở chỉ huy", next: "victory_a1_flag", impact: { vp: 5 } },
      { text: "Vây chặt và dùng loa kêu gọi địch ra hàng", next: "victory_a1_flag", impact: { vp: 2 } }
    ]
  },

  de_castries_surrender: {
    speaker: "Tướng De Castries",
    text: "Họ đã thắng... không phải bằng hỏa lực, mà bằng một ý chí sắt đá.",
    image: "tuong decat.jpg",
    options: [{ text: "Chứng kiến khoảnh khắc lịch sử", next: "final_gate" }]
  },

  // --- HỆ THỐNG KẾT THÚC ---
  final_gate: {
    next: (stats) => {
      if (stats.vp >= 65 && stats.lp >= 15) return "true_ending";
      if (stats.vp < 45) return "bad_ending_military";
      return "bad_ending_logistics";
    }
  },

  true_ending: {
    speaker: "Người dẫn chuyện",
    text: "17h30 ngày 07/05/1954. Lá cờ đỏ sao vàng tung bay trên nóc hầm De Castries! Bạn đã hoàn thành sứ mệnh lịch sử.",
    image: "victory_flag.webp",
    isEnd: true
  },

  bad_ending_military: {
    speaker: "Người dẫn chuyện",
    text: "Do sai lầm chiến thuật, quân ta chịu tổn thất quá lớn trước hỏa lực Pháp. Lịch sử đã không mỉm cười với sự nóng vội.",
    image: "defeat.jpg",
    isEnd: true
  },

  bad_ending_logistics: {
    speaker: "Người dẫn chuyện",
    text: "Quân ta kiệt quệ lương thực và đạn dược. Ta buộc phải rút lui khi chiến thắng đã ở rất gần.",
    image: "logistics_fail.jpg",
    isEnd: true
  },

  bad_ending_early: {
    speaker: "Người dẫn chuyện",
    text: "Bỏ lỡ thời cơ vàng, thực dân Pháp rảnh tay củng cố quyền lực. Cuộc kháng chiến rơi vào bế tắc đau thương.",
    image: "defeat.jpg",
    isEnd: true
  }
};
