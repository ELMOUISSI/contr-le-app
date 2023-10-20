import React from 'react';
import './mysiteweb.css'; // استيراد ملف الأنماط الخاص بالصفحة

function Page() {
  return (
    <div className="page">
      <h1>مرحبًا بك في صفحتنا الجديدة</h1>
      <p>هذه هي صفحة مبدئية جميلة بنيت باستخدام React</p>
      <img src="image.jpg" alt="صورة توضيحية" />
    </div>
  );
}

export default Page;
