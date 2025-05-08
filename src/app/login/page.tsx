'use client';
import React from 'react';

const page = () => {
  const handleLogin = (provider: string) => {
    // 예시용: 실제 소셜 로그인 로직 연결 필요
    alert(`${provider} 로그인 시도`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center `">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">소셜 로그인</h2>

        <button
          onClick={() => handleLogin('Google')}
          className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-800 py-3 px-4 rounded-lg hover:shadow-md transition mb-4"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-3" />
          구글 계정으로 로그인
        </button>

        <button
          onClick={() => handleLogin('Naver')}
          className="w-full flex items-center justify-center bg-[#03C75A] text-white py-3 px-4 rounded-lg hover:opacity-90 transition mb-4"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Naver_Logotype.svg" alt="Naver" className="w-5 h-5 mr-3 bg-white rounded-sm" />
          네이버 계정으로 로그인
        </button>

        <button
          onClick={() => handleLogin('Kakao')}
          className="w-full flex items-center justify-center bg-[#FEE500] text-black py-3 px-4 rounded-lg hover:opacity-90 transition"
        >
          <img src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" alt="Kakao" className="w-5 h-5 mr-3" />
          카카오 계정으로 로그인
        </button>
      </div>
    </div>
  );
};

export default page;
