function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold mb-2">회사 정보</h4>
          <p>상호명: plantshop</p>
          <p>대표: 김식물</p>
          <p>사업자등록번호: 987-65-43210</p>
          <p>주소: 서울특별시 성동구 식물로 12길 34</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">고객센터</h4>
          <p>전화: 1644-5678</p>
          <p>이메일: support@plantshop.co.kr</p>
          <p>운영시간: 평일 09:00 ~ 18:00</p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="space-x-4">
            <a href="#" className="hover:underline">
              Instagram
            </a>
            <a href="#" className="hover:underline">
              Facebook
            </a>
            <a href="#" className="hover:underline">
              YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 text-center py-4 text-gray-500">© 2025 plantshop. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
