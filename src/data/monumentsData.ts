export interface Monument {
  id: string;
  order: number;
  name: string;
  hanTu: string;
  category: string;
  zone: 'khu1' | 'khu2' | 'khu3' | 'khu4' | 'khu5';
  zoneName: string;
  description: string;
  history: string;
  meaning: string;
  image: string;
  imageCaption: string;
  imageNotice?: string;
  source: string;
  audio: string;
  highlightFacts: string[];
  diagramPos: { x: number; y: number }; // Percentage on virtual tour diagram (0-100)
}

export interface HistoricalSource {
  id: string;
  title: string;
  type: 'Thư tịch cổ' | 'Hồ sơ quốc gia' | 'Tổ chức quốc tế' | 'Cổng thông tin chính thức';
  authorOrIssuer: string;
  periodOrYear: string;
  urlOrCitation: string;
  accessedDate: string;
  description: string;
}

export const MONUMENTS_DATA: Monument[] = [
  {
    id: 'tu-tru',
    order: 1,
    name: 'Tứ Trụ (Nghi Môn Ngoại)',
    hanTu: '四柱',
    category: 'Khu vực Tiền án & Cổng ngoài',
    zone: 'khu1',
    zoneName: 'Khu vực Tiền án & Nhập đạo',
    description: 'Bốn cột trụ hoa biểu bề thế xây bằng gạch mở đầu cho quần thể di tích Văn Miếu. Hai trụ giữa cao hơn đỉnh đắp hình bốn con nghê chầu quay đầu vào nhau; hai trụ hai bên thấp hơn đỉnh chạm hình chim phượng hoàng lồng cánh.',
    history: 'Công trình được tu sửa lớn qua các triều Hậu Lê và Nguyễn. Đôi câu đối chữ Hán lớn trên hai cột giữa do Bảng nhãn Nguyễn Nghiễm (thân phụ của Đại thi hào Nguyễn Du) cung kính soạn vào thế kỷ 18 để ca ngợi đạo học phương Nam.',
    meaning: 'Bốn cột trụ sừng sững tựa như bốn cột rường cột của quốc gia, xác lập ranh giới tôn nghiêm giữa đời sống thường nhật và chốn tôn vinh đạo học ngàn năm.',
    image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Khu vực Tứ Trụ hoa biểu trước cổng Văn Miếu (Ảnh tư liệu tham khảo)',
    imageNotice: 'Ảnh tư liệu chụp thực tế tại di tích Văn Miếu – Quốc Tử Giám Hà Nội.',
    source: 'Hồ sơ Di tích quốc gia đặc biệt Văn Miếu – Quốc Tử Giám (Cục Di sản Văn hóa, Bộ VHTTDL); Trung tâm HĐVHKH Văn Miếu – Quốc Tử Giám.',
    audio: 'Chào mừng quý khách đến với Văn Miếu – Quốc Tử Giám. Trước mắt quý khách là Tứ Trụ, hay Nghi Môn Ngoại, cửa ngõ đầu tiên trên trục thần đạo của di tích. Bốn cột hoa biểu xây bằng gạch vững chãi, hai cột giữa đắp hình bốn con nghê chầu, hai cột ngoài đắp hình phượng hoàng lồng cánh, biểu trưng cho sự trang nghiêm và linh thiêng của đạo học Đại Việt.',
    highlightFacts: [
      'Được tôn tạo và lưu giữ câu đối của Bảng nhãn Nguyễn Nghiễm soạn thế kỷ 18.',
      'Đỉnh trụ đắp tứ nghê và chim phượng hướng về trục thần đạo.',
      'Điểm khởi đầu chính thức của hành trình tham quan Văn Miếu.'
    ],
    diagramPos: { x: 50, y: 94 }
  },
  {
    id: 'ho-van',
    order: 2,
    name: 'Hồ Văn (Hồ Giám)',
    hanTu: '湖文',
    category: 'Khu vực Tiền án',
    zone: 'khu1',
    zoneName: 'Khu vực Tiền án & Nhập đạo',
    description: 'Hồ nước rộng hơn một héc-ta nằm đối diện cổng chính Văn Miếu qua phố Quốc Tử Giám. Giữa hồ nổi lên gò Kim Châu rợp bóng cây cổ thụ, trên gò có Phán Thủy Đình cổ kính.',
    history: 'Trong lịch sử, Hồ Văn là nơi tụ hội bình văn, bình thơ của các bậc nho sinh trường Giám xưa. Phán Thủy Đình trên gò Kim Châu được tôn tạo vào thời Nguyễn làm nơi tao đàn ngâm vịnh.',
    meaning: 'Theo thuật phong thủy truyền thống, Hồ Văn đóng vai trò là "minh đường tụ thủy" tụ khí sinh tài, tạo thế phong thủy hài hòa, mang lại sự tĩnh tại, thanh thoát cho không gian tôn nghiêm của Văn Miếu.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Mặt nước Hồ Văn và gò Kim Châu tĩnh lặng đối diện cổng Văn Miếu',
    imageNotice: 'Ảnh tư liệu cảnh quan khu di tích Hồ Văn.',
    source: 'Đại Việt Sử ký Toàn thư; Cổng thông tin Trung tâm Hoạt động VHKH Văn Miếu – Quốc Tử Giám (vanmieu.gov.vn).',
    audio: 'Hồ Văn, xưa kia còn gọi là hồ Minh Đường, nằm ở phía trước cổng Văn Miếu. Hồ rộng lớn, ở giữa có gò Kim Châu và Phán Thủy Đình – nơi tụ hội ngâm thơ, bình văn của các nhà nho Thăng Long. Đây là yếu tố phong thủy minh đường tụ thủy giúp cân bằng cảnh quan và bồi đắp sinh khí.',
    highlightFacts: [
      'Đóng vai trò "minh đường tụ thủy" theo thuật phong thủy phương Đông.',
      'Giữa hồ có gò Kim Châu với Phán Thủy Đình truyền thống.',
      'Nơi tao nhân mặc khách và học sĩ thời xưa bình văn giảng sách.'
    ],
    diagramPos: { x: 26, y: 90 }
  },
  {
    id: 'cong-van-mieu',
    order: 3,
    name: 'Cổng Văn Miếu (Đại Môn / Tam Quan Ngoại)',
    hanTu: '文廟門',
    category: 'Khu thứ nhất: Nhập đạo',
    zone: 'khu1',
    zoneName: 'Khu vực Tiền án & Nhập đạo',
    description: 'Cổng chính của quần thể di tích, xây dạng tam quan 2 tầng 3 cửa vòm cuốn bằng gạch. Tầng trên có mái lợp ngói mũi hài, chính giữa đắp biển đề ba chữ Hán lớn "Văn Miếu Môn". Trước cổng hai bên có hai tấm bia "Hạ Mã".',
    history: 'Dựng từ thời Hậu Lê và được trùng tu lớn thời Nguyễn. Hai tấm bia đá "Hạ Mã" (下馬) dựng năm Tân Mão (1771) niên hiệu Cảnh Hưng thứ 32 dưới thời vua Lê Hiển Tông.',
    meaning: 'Biển chữ "Văn Miếu Môn" khẳng định đây là cổng đền thờ đạo học. Hai bia Hạ Mã nhắc nhở bất kể bậc quyền quý, vương hầu hay thứ dân khi đi qua cổng đền đều phải xuống ngựa đi bộ để tỏ lòng thành kính với các bậc tiên hiền.',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Cổng Văn Miếu Môn rêu phong cổ kính (Ảnh tư liệu tham khảo)',
    imageNotice: 'Ảnh tư liệu kiến trúc cổng tam quan ngoại Văn Miếu.',
    source: 'Văn bia Hạ Mã (1771); Hồ sơ Di tích quốc gia đặc biệt Văn Miếu – Quốc Tử Giám.',
    audio: 'Quý vị đang dừng chân trước Cổng Văn Miếu, hay Văn Miếu Môn. Đây là cổng tam quan hai tầng uy nghi với mái ngói cổ truyền. Hai bên cổng là hai tấm bia đá mang chữ Hạ Mã dựng từ năm 1771, quy định bất kỳ ai đi qua chốn này, từ bậc vương hầu đến thường dân, đều phải xuống ngựa để bày tỏ lòng thành kính tuyệt đối.',
    highlightFacts: [
      'Kiến trúc tam quan 2 tầng 3 cửa cuốn vòm truyền thống.',
      'Sở hữu 2 tấm bia Hạ Mã dựng năm 1771 thời vua Lê Hiển Tông.',
      'Cánh cổng chính thức bắt đầu trục thần đạo tiến vào nội tự.'
    ],
    diagramPos: { x: 50, y: 83 }
  },
  {
    id: 'cong-dai-trung',
    order: 4,
    name: 'Cổng Đại Trung (Đại Trung Môn)',
    hanTu: '大中門',
    category: 'Khu thứ nhất: Nhập đạo',
    zone: 'khu1',
    zoneName: 'Khu vực Tiền án & Nhập đạo',
    description: 'Cổng thứ hai trên trục thần đạo nằm giữa bức tường ngăn khu thứ nhất và khu thứ hai. Cổng gồm ba gian xây trên nền gạch cao, lợp ngói âm dương cổ kính. Hai bên tả hữu có hai cổng nhỏ: Thành Đức Môn và Đạt Tài Môn.',
    history: 'Được bảo tồn từ thời Hậu Lê qua triều Nguyễn. Mang cấu trúc vì kèo gỗ truyền thống với ngói mũi hài rêu phong.',
    meaning: '"Đại Trung" có ý nghĩa là đường lối trung dung, chính đại quang minh của đạo Nho. Hai cửa nhỏ hai bên mang thông điệp sâu sắc: người học muốn thành tựu phụng sự đất nước thì phải đồng thời "Thành Đức" (rèn luyện nhân đức) và "Đạt Tài" (phát triển tài năng).',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Cổng Đại Trung Môn với hai cửa phụ Thành Đức và Đạt Tài',
    imageNotice: 'Ảnh tư liệu kiến trúc cổng Đại Trung.',
    source: 'Trung tâm Hoạt động VHKH Văn Miếu – Quốc Tử Giám (vanmieu.gov.vn).',
    audio: 'Bước qua khoảng sân rợp bóng cây cổ thụ, quý khách đến với Cổng Đại Trung. Cổng mang ý nghĩa hướng người học theo con đường trung chính, ngay thẳng. Hai bên tả hữu là Thành Đức Môn và Đạt Tài Môn – gửi gắm triết lý giáo dục toàn diện: Đức phải thành và Tài phải đạt.',
    highlightFacts: [
      'Gồm cổng chính Đại Trung và hai cổng phụ Thành Đức, Đạt Tài.',
      'Ngăn cách không gian Nhập đạo và không gian Thành đức.',
      'Đại diện cho triết lý tu thân: Đức và Tài song hành.'
    ],
    diagramPos: { x: 50, y: 73 }
  },
  {
    id: 'khue-van-cac',
    order: 5,
    name: 'Khuê Văn Các (Gác Sao Khuê)',
    hanTu: '奎文閣',
    category: 'Khu thứ hai: Thành đức',
    zone: 'khu2',
    zoneName: 'Khu thứ hai: Thành đức',
    description: 'Công trình kiến trúc độc đáo hai tầng tám mái bằng gỗ lim sơn son thếp vàng kết hợp gạch nung. Tầng dưới gồm 4 cột gạch vuông vắn vững chãi. Tầng gác trên làm bằng gỗ với các cửa sổ tròn có then hoa tỏa đều như vầng hào quang rạng chiếu của ngôi sao Khuê.',
    history: 'Được dựng vào năm Ất Sửu (1805) thời vua Gia Long triều Nguyễn bởi Tổng trấn Bắc thành Nguyễn Văn Thành. Năm 1999, hình ảnh Khuê Văn Các chính thức được chọn làm biểu tượng của Thủ đô Hà Nội theo Luật Thủ đô.',
    meaning: 'Sao Khuê là sao chủ về văn chương học thuật trong nhị thập bát tú. Tầng dưới vuông (tượng trưng cho Đất), cửa sổ trên gác tròn (tượng trưng cho Trời) hòa quyện triết lý âm dương vũ trụ, tượng trưng cho đỉnh cao trí tuệ và sự tỏa sáng của nền văn hiến Thăng Long ngàn năm.',
    image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Khuê Văn Các – Biểu tượng đỉnh cao trí tuệ của Thủ đô Hà Nội',
    imageNotice: 'Ảnh tư liệu chuẩn mực chụp công trình Khuê Văn Các.',
    source: 'Đại Nam Thực lục; Luật Thủ đô (1999); Hồ sơ Di tích quốc gia đặc biệt Văn Miếu – Quốc Tử Giám.',
    audio: 'Trước mắt quý khách là Khuê Văn Các – Gác Sao Khuê, biểu tượng thiêng liêng của Thủ đô Hà Nội ngàn năm văn hiến. Được xây dựng năm 1805 dưới thời Nguyễn bởi Tổng trấn Nguyễn Văn Thành, Khuê Văn Các gồm hai tầng tám mái. Những ô cửa tròn tầng gác trên tựa như ánh sao Khuê – chòm sao chủ về văn học nghệ thuật tỏa sáng rạng ngời.',
    highlightFacts: [
      'Xây dựng năm 1805 bởi Tổng trấn Bắc thành Nguyễn Văn Thành.',
      'Được chọn làm biểu tượng chính thức của Thủ đô Hà Nội theo Luật Thủ đô.',
      'Kiến trúc Trời tròn Đất vuông độc nhất vô nhị trong kiến trúc cổ Việt Nam.'
    ],
    diagramPos: { x: 50, y: 62 }
  },
  {
    id: 'gieng-thien-quang',
    order: 6,
    name: 'Giếng Thiên Quang (Thiên Quang Tỉnh)',
    hanTu: '天光井',
    category: 'Khu thứ ba: Vườn Bia & Thiên Quang',
    zone: 'khu3',
    zoneName: 'Khu thứ ba: Vườn Bia & Thiên Quang',
    description: 'Giếng hình vuông rộng lớn bốn mùa ắp nước trong xanh như gương soi, bốn phía xây tường gạch có lối đi bao quanh. Giếng nằm ngay sau Khuê Văn Các và nằm chính giữa hai dãy Vườn Bia Tiến sĩ.',
    history: 'Hình thành từ các triều đại trước và được hoàn thiện cấu trúc đồng bộ cùng thời điểm dựng Khuê Văn Các đầu thế kỷ 19.',
    meaning: '"Thiên Quang" nghĩa là ánh sáng của bầu trời. Giếng mang dáng hình vuông (tượng trưng cho Đất) thu nhận hình bóng tròn của cửa gác Khuê Văn Các (tượng trưng cho Trời), biểu hiện sự giao hòa Trời - Đất. Đồng thời mặt nước phẳng lặng nhắc nhở người quân tử giữ lòng sáng trong, soi tỏ sự đời.',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Mặt nước phẳng lặng của giếng Thiên Quang soi bóng Khuê Văn Các',
    imageNotice: 'Ảnh tư liệu mặt nước giếng Thiên Quang.',
    source: 'Hồ sơ Di tích quốc gia đặc biệt Văn Miếu – Quốc Tử Giám; Trung tâm HĐVHKH Văn Miếu.',
    audio: 'Giếng Thiên Quang, có nghĩa là Giếng Ánh Sáng Bầu Trời. Mặt giếng phẳng lặng vuông vắn như một tấm gương lớn thu nhận mọi tinh tú của trời đất. Sự kết hợp giữa giếng vuông và cửa tròn Khuê Văn Các phản ánh triết lý Trời tròn Đất vuông sâu sắc của văn hóa phương Đông.',
    highlightFacts: [
      'Mang tên "Thiên Quang" – ánh sáng rạng rỡ của bầu trời.',
      'Giếng hình vuông tượng trưng cho Đất, tiếp nhận ánh sáng từ Trời.',
      'Nằm ở vị trí trung tâm kết nối Khuê Văn Các và 82 bia Tiến sĩ.'
    ],
    diagramPos: { x: 50, y: 52 }
  },
  {
    id: 'vuon-bia-tien-si',
    order: 7,
    name: 'Vườn Bia Tiến Sĩ (82 Bia Tiến Sĩ)',
    hanTu: '進士題名碑',
    category: 'Khu thứ ba: Vườn Bia & Thiên Quang',
    zone: 'khu3',
    zoneName: 'Khu thứ ba: Vườn Bia & Thiên Quang',
    description: 'Gồm 82 tấm bia đá xanh nguyên khối đặt trên lưng 82 con rùa đá vững chãi, chia thành hai dãy đăng đối hai bên tả hữu của giếng Thiên Quang. Các văn bia khắc chữ Hán tinh xảo, ghi tên tuổi quê quán của 1.304 vị Tiến sĩ đỗ đạt qua 82 khoa thi.',
    history: 'Năm Giáp Thìn (1484), vua Lê Thánh Tông niên hiệu Hồng Đức thứ 15 đã chuẩn y việc dựng bia đề danh Tiến sĩ bắt đầu từ khoa thi Nhâm Tuất 1442 cho đến khoa thi năm 1779 thời Lê Trung hưng. Năm 2010 và 2011, 82 Bia Tiến sĩ được UNESCO vinh danh là Di sản Tư liệu Thế giới. Năm 2015 được công nhận là Bảo vật Quốc gia.',
    meaning: 'Nơi lưu giữ pho sử đá vô giá về nền giáo dục khoa cử Việt Nam. Bia khoa thi 1442 khắc lời răn dạy muôn đời của Đông các Đại học sĩ Thân Nhân Trung: "Hiền tài là nguyên khí của quốc gia, nguyên khí thịnh thì thế nước mạnh rồi lên cao, nguyên khí suy thì thế nước yếu rồi xuống thấp."',
    image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Dãy bia Tiến sĩ đặt trên lưng rùa đá xanh rêu phong cổ kính',
    imageNotice: 'Ảnh tư liệu khu nhà che bia Tiến sĩ Văn Miếu.',
    source: 'Đại Việt Sử ký Toàn thư; Hồ sơ UNESCO Di sản Tư liệu Thế giới (Memory of the World); Văn bia Tiến sĩ khoa thi 1442.',
    audio: 'Quý vị đang chiêm ngưỡng Vườn Bia Tiến sĩ – Di sản Tư liệu Thế giới được UNESCO vinh danh và là Bảo vật Quốc gia Việt Nam. 82 tấm bia đá xanh đặt trên lưng rùa ghi danh 1.304 vị đỗ đại khoa từ năm 1442 đến năm 1779. Đây chính là nơi lưu giữ câu danh ngôn bất hủ: Hiền tài là nguyên khí của quốc gia.',
    highlightFacts: [
      'Gồm đúng 82 tấm bia ghi danh 1.304 vị đỗ đại khoa từ 1442 đến 1779.',
      'Khởi xướng dựng bia năm 1484 dưới triều vua Lê Thánh Tông.',
      'Di sản Tư liệu Thế giới của UNESCO và là Bảo vật Quốc gia Việt Nam.'
    ],
    diagramPos: { x: 74, y: 52 }
  },
  {
    id: 'cua-dai-thanh',
    order: 8,
    name: 'Cửa Đại Thành (Đại Thành Môn)',
    hanTu: '大成門',
    category: 'Khu thứ tư: Đại Thành',
    zone: 'khu4',
    zoneName: 'Khu thứ tư: Đại Thành',
    description: 'Cổng lớn ba gian dẫn vào khu vực thờ tự linh thiêng của Văn Miếu. Cổng có ba cửa gỗ lim sơn đỏ, cột gỗ tròn kê trên chân tảng đá. Hai bên cổng chính có hai cổng nhỏ: Kim Thanh Môn (bên trái) và Ngọc Chấn Môn (bên phải).',
    history: 'Tồn tại từ thời kỳ đầu khởi dựng Văn Miếu triều Lý (1070) và được tu bổ qua các đời Trần, Hậu Lê, Nguyễn.',
    meaning: '"Đại Thành" nghĩa là thành tựu vĩ đại, bắt nguồn từ lời ca ngợi đạo học Khổng Tử tập hợp được mọi tinh hoa của tiền nhân. Hai cửa bên "Kim Thanh" (tiếng chuông vàng) và "Ngọc Chấn" (tiếng khánh ngọc) ví như âm vang trọn vẹn, mở đầu và kết thúc viên mãn của sự nghiệp giáo dục nhân cách.',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Cửa Đại Thành dẫn vào khu nội tự thiêng liêng',
    imageNotice: 'Ảnh tư liệu Cửa Đại Thành.',
    source: 'Khâm định Việt sử Thông giám Cương mục; Trung tâm HĐVHKH Văn Miếu.',
    audio: 'Cửa Đại Thành mở ra không gian thờ tự cốt lõi của Văn Miếu. Tên Đại Thành hàm ý sự tập hợp thành tựu vĩ đại của tri thức. Cửa giữa thường chỉ mở trong các dịp tế lễ trọng thể; hai bên là Kim Thanh Môn và Ngọc Chấn Môn tượng trưng cho tiếng chuông vàng khánh ngọc ngân vang khúc nhạc đạo học.',
    highlightFacts: [
      'Cổng ngói ba gian dẫn vào khu vực điện thờ chính.',
      'Tả hữu có hai cổng nhỏ Kim Thanh Môn và Ngọc Chấn Môn.',
      'Mang ý nghĩa sự hoàn bị và thành tựu đỉnh cao của đạo học.'
    ],
    diagramPos: { x: 50, y: 43 }
  },
  {
    id: 'san-dai-bai',
    order: 9,
    name: 'Sân Đại Bái',
    hanTu: '大拜庭',
    category: 'Khu thứ tư: Đại Thành',
    zone: 'khu4',
    zoneName: 'Khu thứ tư: Đại Thành',
    description: 'Khoảng sân gạch rộng thênh thang lát gạch Bát Tràng cổ kính nằm giữa Cửa Đại Thành và Tòa Đại Bái. Hai bên sân tả hữu là hai dãy nhà Tả Vu và Hữu Vu.',
    history: 'Nơi diễn ra các nghi thức đại lễ tế Khổng Tử của vua quan và sĩ đại phu triều đình vào các tiết xuân thu nhị kỳ thời phong kiến.',
    meaning: 'Không gian chuẩn bị lễ nghi và tâm thế trang nghiêm tĩnh tại của các học trò và quan lại trước khi bước vào điện thờ bái lạy các bậc thánh hiền.',
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Sân Đại Bái rộng lớn lát gạch Bát Tràng giữa lòng Văn Miếu',
    imageNotice: 'Ảnh tư liệu không gian sân Đại Bái.',
    source: 'Đại Việt Sử ký Toàn thư; Lịch triều Hiến chương loại chí (Phan Huy Chú).',
    audio: 'Quý khách đang đứng tại Sân Đại Bái. Khoảng sân rộng này xưa kia là nơi diễn ra các nghi lễ tế tế đức Khổng Tử và chư vị hiền triết vào mùa xuân và mùa thu hàng năm. Hai bên sân là hai dãy nhà Tả Vu và Hữu Vu, nơi chuẩn bị phẩm vật hành lễ.',
    highlightFacts: [
      'Khoảng sân rộng lát gạch Bát Tràng phục vụ nghi lễ triều đình xưa.',
      'Nằm đối xứng hài hòa giữa Tả Vu và Hữu Vu.',
      'Nơi diễn ra các buổi lễ tế xuân thu truyền thống.'
    ],
    diagramPos: { x: 50, y: 35 }
  },
  {
    id: 'nha-dai-bai',
    order: 10,
    name: 'Nhà Đại Bái (Đại Bái Đường)',
    hanTu: '大拜堂',
    category: 'Khu thứ tư: Đại Thành',
    zone: 'khu4',
    zoneName: 'Khu thứ tư: Đại Thành',
    description: 'Tòa nhà gỗ lim đồ sộ 9 gian rộng lớn với hệ thống cột cái, cột con vững chãi. Chính giữa treo bức hoành phi sơn son thếp vàng bốn chữ Hán lớn "Vạn thế sư biểu" (Bậc thầy của muôn đời) và hai con hạc đồng ngự lưng rùa cao lớn.',
    history: 'Xây dựng và trùng tu lớn qua các thời Lê - Nguyễn. Bức hoành phi "Vạn thế sư biểu" do vua Khang Hy nhà Thanh ban tặng năm 1684, sau đó được triều Nguyễn cho khắc sao lại để thờ phụng.',
    meaning: 'Nơi triều đình và sĩ tử kính bái, tưởng niệm bậc thầy của muôn đời, tôn vinh truyền thống tôn sư trọng đạo ngàn đời của dân tộc Việt Nam.',
    image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Tòa Đại Bái Đường trang nghiêm với hoành phi Vạn thế sư biểu',
    imageNotice: 'Ảnh tư liệu kiến trúc gian chính Nhà Đại Bái.',
    source: 'Hồ sơ Di tích quốc gia đặc biệt; Trung tâm HĐVHKH Văn Miếu – Quốc Tử Giám.',
    audio: 'Nhà Đại Bái gồm 9 gian với kiến trúc gỗ lim cổ kính. Gian chính điện uy nghiêm nổi bật với bức đại tự Vạn thế sư biểu – Bậc thầy của muôn đời. Đây là nơi các quan lại và sĩ tử thực hiện các nghi thức dâng hương bái vọng các bậc tiền nhân đã khai sinh và truyền thụ đạo học.',
    highlightFacts: [
      'Kiến trúc 9 gian gỗ lim cổ truyền bề thế.',
      'Treo bức đại tự nổi tiếng "Vạn thế sư biểu".',
      'Đôi hạc đồng ngự lưng rùa biểu trưng cho sự trường tồn và thanh cao.'
    ],
    diagramPos: { x: 50, y: 28 }
  },
  {
    id: 'dien-dai-thanh',
    order: 11,
    name: 'Điện Đại Thành',
    hanTu: '大成殿',
    category: 'Khu thứ tư: Đại Thành',
    zone: 'khu4',
    zoneName: 'Khu thứ tư: Đại Thành',
    description: 'Nằm song song phía sau Nhà Đại Bái, kết nối tạo thành hình chữ Nhị. Gian chính giữa đặt ngai thờ tượng Đức Khổng Tử bằng đồng uy nghiêm. Hai bên phối thờ Tứ phối (Nhan Hồi, Tăng Tử, Tử Tư, Mạnh Tử) cùng Thập triết.',
    history: 'Khởi dựng vào mùa thu tháng 8 năm Canh Tuất (1070) dưới triều vua Lý Thánh Tông. Đây là dấu mốc đầu tiên khai sinh Văn Miếu Thăng Long được ghi chép trong chính sử.',
    meaning: 'Trái tim linh thiêng nhất của Văn Miếu, nơi hội tụ tinh hoa tri thức và đạo lý làm người của nền văn minh Nho học phương Đông tại Đại Việt.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Điện Đại Thành – Nơi khởi lập Văn Miếu từ mùa thu năm 1070',
    imageNotice: 'Ảnh tư liệu Điện Đại Thành nơi tôn trí tượng thờ.',
    source: 'Đại Việt Sử ký Toàn thư, Bản kỷ Toàn thư Quyển III (Kỷ Nhà Lý, năm 1070); Khâm định Việt sử Thông giám Cương mục.',
    audio: 'Điện Đại Thành là nơi tôn nghiêm nhất trong quần thể Văn Miếu, được vua Lý Thánh Tông khởi dựng vào mùa thu năm Canh Tuất 1070. Gian chính tôn trí tượng Đức Khổng Tử và bài vị Tứ phối. Nơi đây đánh dấu cội nguồn nền Nho học Đại Việt gần một thiên niên kỷ trước.',
    highlightFacts: [
      'Được vua Lý Thánh Tông dựng vào mùa thu năm Canh Tuất (1070).',
      'Tôn thờ tượng Đức Khổng Tử và bài vị Tứ phối (Nhan Hồi, Tăng Tử, Tử Tư, Mạnh Tử).',
      'Nơi thiêng liêng nhất, cội nguồn lịch sử của di tích Văn Miếu.'
    ],
    diagramPos: { x: 50, y: 22 }
  },
  {
    id: 'cong-thai-hoc',
    order: 12,
    name: 'Cổng Thái Học',
    hanTu: '太學門',
    category: 'Khu thứ năm: Thái Học',
    zone: 'khu5',
    zoneName: 'Khu thứ năm: Quốc Tử Giám / Thái Học',
    description: 'Cổng dẫn từ khu vực thờ tự Văn Miếu sang khu Thái Học (vốn là Quốc Tử Giám xưa). Cổng xây ba gian mái ngói, tạo sự chuyển tiếp nhịp nhàng giữa hai phân khu lớn của di tích.',
    history: 'Nguyên là cổng ngăn giữa Văn Miếu và Quốc Tử Giám thời xưa. Công trình nguyên bản bị phá hủy trong chiến tranh năm 1946 và được phục dựng hoàn thiện vào năm 1999–2000 nhân kỷ niệm 990 năm Thăng Long – Hà Nội.',
    meaning: 'Cột mốc kết nối mang tính biểu tượng giữa chốn thờ phụng đạo học linh thiêng và cái nôi rèn luyện đào tạo nhân tài của đất nước.',
    image: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Cổng Thái Học dẫn lối sang khu trường đại học đầu tiên',
    imageNotice: 'Ảnh tư liệu Cổng Thái Học phục dựng kỷ niệm 990 năm Thăng Long.',
    source: 'Kỷ yếu Phục dựng công trình Thái Học (Trung tâm HĐVHKH Văn Miếu – Quốc Tử Giám, năm 2000).',
    audio: 'Bước qua Cổng Thái Học, quý khách đang tiến vào không gian của Quốc Tử Giám xưa – trường đại học đầu tiên của Việt Nam. Cổng kết nối giữa không gian thờ tự và không gian học tập nghiên cứu, gợi nhắc mối liên hệ khăng khít giữa tri thức và nhân cách.',
    highlightFacts: [
      'Gạch nối giữa khu đền thờ Văn Miếu và trường Quốc Tử Giám.',
      'Được phục dựng công phu năm 1999–2000 nhân kỷ niệm 990 năm Thăng Long.',
      'Mở ra không gian giáo dục đại học cổ truyền của dân tộc.'
    ],
    diagramPos: { x: 50, y: 16 }
  },
  {
    id: 'nha-tien-duong-thai-hoc',
    order: 13,
    name: 'Nhà Tiền Đường Thái Học',
    hanTu: '太學前堂',
    category: 'Khu thứ năm: Thái Học',
    zone: 'khu5',
    zoneName: 'Khu thứ năm: Quốc Tử Giám / Thái Học',
    description: 'Tòa nhà gỗ lim 9 gian rộng lớn với cấu trúc vì kèo truyền thống, mái lợp ngói mũi hài có đầu đao uốn cong thanh thoát. Bên trong là không gian sinh hoạt văn hóa học thuật, trưng bày hiện vật khoa cử.',
    history: 'Xây dựng trên nền Quốc Tử Giám thành lập năm Bính Thìn (1076) thời vua Lý Nhân Tông. Công trình hiện tại được phục dựng khánh thành vào năm 2000.',
    meaning: 'Nơi diễn ra các buổi lễ vinh danh thủ khoa xuất sắc, tọa đàm khoa học, trao học bổng và các sự kiện khuyến học nhằm tiếp nối truyền thống hiếu học của dân tộc trong thời đại mới.',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Gian Tiền Đường Thái Học bề thế nơi tổ chức các sự kiện văn hóa học thuật',
    imageNotice: 'Ảnh tư liệu Nhà Tiền Đường Thái Học.',
    source: 'Đại Việt Sử ký Toàn thư (năm 1076); vanmieu.gov.vn.',
    audio: 'Nhà Tiền Đường Thái Học là không gian hội tụ học thuật đương đại trên nền đất Quốc Tử Giám xưa – được vua Lý Nhân Tông khởi lập năm 1076. Ngày nay, đây là nơi vinh danh các thủ khoa xuất sắc của các trường đại học và tổ chức những sự kiện văn hóa giáo dục trọng đại.',
    highlightFacts: [
      'Xây dựng trên nền Quốc Tử Giám thành lập năm 1076.',
      'Kiến trúc 9 gian gỗ lim truyền thống bề thế và uy nghi.',
      'Nơi tổ chức các sự kiện vinh danh thủ khoa và giao lưu văn hóa quốc tế.'
    ],
    diagramPos: { x: 50, y: 10 }
  },
  {
    id: 'nha-hau-duong-thai-hoc',
    order: 14,
    name: 'Nhà Hậu Đường Thái Học',
    hanTu: '太學後堂',
    category: 'Khu thứ năm: Thái Học',
    zone: 'khu5',
    zoneName: 'Khu thứ năm: Quốc Tử Giám / Thái Học',
    description: 'Công trình kiến trúc 2 tầng bằng gỗ lim kiên cố. Tầng 1 tôn vinh danh sư Chu Văn An (1292–1370) – Quốc Tử Giám Tư nghiệp, cùng tượng đồng đúc nguyên khối trang nghiêm và bảo tàng tư liệu giáo dục. Tầng 2 tôn vinh ba vị minh quân có công lớn nhất: Lý Thánh Tông (sáng lập Văn Miếu 1070), Lý Nhân Tông (sáng lập Quốc Tử Giám 1076), và Lê Thánh Tông (ban lệnh dựng bia Tiến sĩ 1484).',
    history: 'Hoàn thành xây dựng và an vị tượng thờ các bậc tiền nhân vào năm 2000.',
    meaning: 'Nơi tưởng niệm và tôn vinh công đức vĩ đại của ba vị vua anh minh khai mở nền đại học dân tộc, đồng thời ngợi ca phẩm tiết thanh cao và chuẩn mực sư phạm bất hủ của "người thầy của muôn đời" Chu Văn An.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Nhà Hậu Đường Thái Học – Nơi tôn vinh Thầy Chu Văn An và 3 vị vua khởi lập',
    imageNotice: 'Ảnh tư liệu kiến trúc 2 tầng Nhà Hậu Đường Thái Học.',
    source: 'Đại Việt Sử ký Toàn thư; Ban Quản lý Di tích Văn Miếu – Quốc Tử Giám (2000).',
    audio: 'Nhà Hậu Đường Thái Học gồm hai tầng bằng gỗ lim trang trọng. Tầng một là nơi thờ Thầy giáo Chu Văn An – Quốc Tử Giám Tư nghiệp, người thầy mẫu mực muôn đời của dân tộc. Tầng hai tôn trí tượng thờ ba vị minh quân: vua Lý Thánh Tông, vua Lý Nhân Tông và vua Lê Thánh Tông.',
    highlightFacts: [
      'Tầng 1 thờ danh sư Chu Văn An – biểu tượng đạo đức của người thầy Việt Nam.',
      'Tầng 2 thờ ba vị hoàng đế: Lý Thánh Tông, Lý Nhân Tông và Lê Thánh Tông.',
      'Tượng đồng được đúc công phu bởi các nghệ nhân đúc đồng truyền thống.'
    ],
    diagramPos: { x: 50, y: 4 }
  },
  {
    id: 'lau-chuong-lau-trong',
    order: 15,
    name: 'Lầu Chuông & Lầu Trống (Khu Thái Học)',
    hanTu: '鐘樓鼓樓',
    category: 'Khu thứ năm: Thái Học',
    zone: 'khu5',
    zoneName: 'Khu thứ năm: Quốc Tử Giám / Thái Học',
    description: 'Hai tòa lầu bằng gỗ mái đao cong cổ kính nằm đăng đối hai bên sân Thái Học. Lầu Chuông (bên trái) treo quả đại hồng chung bằng đồng đúc hoa văn tinh xảo; Lầu Trống (bên phải) đặt chiếc trống sấm lớn sơn son vẽ hình rồng vàng lộng lẫy.',
    history: 'Được chế tác và dựng hoàn thiện trong dự án phục dựng khu Thái Học nhân dịp kỷ niệm 990 năm Thăng Long – Hà Nội (năm 2000).',
    meaning: 'Âm vang của tiếng chuông đồng và tiếng trống sấm biểu trưng cho tiếng gọi non sông, sự thức tỉnh trí tuệ và khích lệ tinh thần hiếu học, rèn đức luyện tài của muôn triệu thế hệ học trò Việt Nam.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Lầu Chuông và Lầu Trống đăng đối hai bên sân Thái Học',
    imageNotice: 'Ảnh tư liệu kiến trúc Lầu Chuông và Lầu Trống khu Thái Học.',
    source: 'Trung tâm Hoạt động VHKH Văn Miếu – Quốc Tử Giám (2000).',
    audio: 'Điểm dừng chân thứ 15 trên hành trình tham quan là Lầu Chuông và Lầu Trống. Chuông đồng và trống sấm hòa vang trong các dịp đại lễ, gửi gắm ước vọng quốc thái dân an và thức dậy hào khí học vấn ngàn năm của dân tộc.',
    highlightFacts: [
      'Nằm đối xứng uy nghiêm hai bên sân trước Nhà Tiền Đường Thái Học.',
      'Sở hữu quả đại hồng chung bằng đồng và trống sấm sơn son thếp vàng.',
      'Biểu trưng cho âm vang của hào khí Thăng Long – Hà Nội ngàn năm văn hiến.'
    ],
    diagramPos: { x: 74, y: 10 }
  }
];

export const GENERAL_SOURCES: HistoricalSource[] = [
  {
    id: 'src-1',
    title: 'Đại Việt Sử ký Toàn thư',
    type: 'Thư tịch cổ',
    authorOrIssuer: 'Ngô Sĩ Liên và các sử thần triều Hậu Lê biên soạn',
    periodOrYear: 'Hoàn thành năm 1479 (Bản in Nội các quan bản 1697)',
    urlOrCitation: 'Viện Khoa học Xã hội Việt Nam dịch và chú giải, NXB Khoa học Xã hội, Hà Nội, 1993.',
    accessedDate: '2026-11-08',
    description: 'Bộ chính sử ghi chép đầy đủ về việc vua Lý Thánh Tông dựng Văn Miếu năm 1070, vua Lý Nhân Tông lập Quốc Tử Giám năm 1076 và triều Lê Thánh Tông bắt đầu dựng bia Tiến sĩ năm 1484.'
  },
  {
    id: 'src-2',
    title: 'Hồ sơ Di sản Tư liệu Thế giới: 82 Bia Tiến sĩ Văn Miếu – Quốc Tử Giám',
    type: 'Tổ chức quốc tế',
    authorOrIssuer: 'UNESCO (Tổ chức Giáo dục, Khoa học và Văn hóa Liên Hợp Quốc)',
    periodOrYear: 'Ghi danh năm 2010 (khu vực Châu Á - TBD) và 2011 (quốc tế)',
    urlOrCitation: 'UNESCO Memory of the World Register (Item: Stone Stele Records of Royal Examinations of the Le and Mac Dynasties).',
    accessedDate: '2026-11-08',
    description: 'Tài liệu di sản tư liệu thế giới ghi nhận giá trị độc bản, tính xác thực và tầm ảnh hưởng quốc tế của 82 văn bia Tiến sĩ tại Hà Nội.'
  },
  {
    id: 'src-3',
    title: 'Hồ sơ Xếp hạng Di tích Quốc gia Đặc biệt Văn Miếu – Quốc Tử Giám',
    type: 'Hồ sơ quốc gia',
    authorOrIssuer: 'Thủ tướng Chính phủ (Quyết định số 548/QĐ-TTg) & Cục Di sản Văn hóa - Bộ VHTTDL',
    periodOrYear: 'Quyết định ký ngày 10/05/2012',
    urlOrCitation: 'Cổng thông tin Cục Di sản Văn hóa (dsvh.gov.vn)',
    accessedDate: '2026-11-08',
    description: 'Hồ sơ khoa học và pháp lý xác lập Văn Miếu – Quốc Tử Giám là Di tích Quốc gia Đặc biệt của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam.'
  },
  {
    id: 'src-4',
    title: 'Khâm định Việt sử Thông giám Cương mục',
    type: 'Thư tịch cổ',
    authorOrIssuer: 'Quốc sử quán triều Nguyễn biên soạn dưới sự chỉ đạo của vua Tự Đức',
    periodOrYear: 'Hoàn thành năm 1884',
    urlOrCitation: 'Viện Sử học Việt Nam phiên dịch, NXB Giáo dục, Hà Nội, 1998.',
    accessedDate: '2026-11-08',
    description: 'Bộ sử khảo cứu và đính chính các sự kiện lịch sử khoa cử, lễ nghi và các đợt trùng tu Văn Miếu qua các triều đại.'
  },
  {
    id: 'src-5',
    title: 'Cổng thông tin Trung tâm Hoạt động VHKH Văn Miếu – Quốc Tử Giám',
    type: 'Cổng thông tin chính thức',
    authorOrIssuer: 'Sở Văn hóa và Thể thao Hà Nội',
    periodOrYear: 'Cập nhật thường xuyên',
    urlOrCitation: 'https://vanmieu.gov.vn',
    accessedDate: '2026-11-08',
    description: 'Đơn vị trực tiếp quản lý, bảo tồn và phát huy giá trị di tích Văn Miếu – Quốc Tử Giám tại số 58 phố Quốc Tử Giám, Đống Đa, Hà Nội.'
  }
];

export const VIRTUAL_TOUR_STATS = {
  totalMonuments: 15,
  zonesCount: 5,
  foundingYear: 1070,
  universityYear: 1076,
  totalSteles: 82,
  totalDoctors: 1304,
  unescoYear: 2011,
};
