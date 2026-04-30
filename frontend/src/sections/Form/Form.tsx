import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router';

function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    loanAmount: '',
    loanType: '信用貸款',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    gtag_report_conversion('/');

    try {
      const res = await fetch('/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Request failed');
      }

      alert('表單已送出，專員將盡快與您聯絡！');
      navigate('/');
    } catch (error) {
      console.error('Submission error:', error);
      alert('送出失敗，請稍後再試。');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  function gtag_report_conversion(url: string) {
    var callback = function () {
      if (typeof url != 'undefined') {
        window.location.href = url;
      }
    };

    if (typeof window.gtag !== 'function') {
      console.warn('gtag not loaded');
      return;
    }

    window.gtag('event', 'conversion', {
      send_to: 'AW-18084191325/W_DKCNeUzKQcEN24m69D',
      value: 1.0,
      currency: 'TWD',
      transaction_id: '',
      event_callback: callback,
      // 'new_customer': true /* calculate dynamically, populate with true/false */,
    });
    return false;
  }

  return (
    <section className='min-h-screen bg-zinc-50 pt-32 pb-16 px-5 md:px-0'>
      <div className='mx-auto max-w-2xl'>
        <button
          onClick={() => navigate('/')}
          className='mb-6 flex items-center gap-2 text-zinc-500 hover:text-emerald-600 transition-colors group'
        >
          <svg
            className='w-5 h-5 transition-transform group-hover:-translate-x-1'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M10 19l-7-7m0 0l7-7m-7 7h18'
            />
          </svg>
          <span className='font-medium'>返回首頁</span>
        </button>

        <div className='bg-white rounded-3xl border border-zinc-200 p-8 shadow-xl'>
          <div className='mb-8 text-center'>
            <h1 className='text-3xl font-bold text-zinc-900 mb-2'>
              立即線上諮詢
            </h1>
            <p className='text-zinc-600'>
              請填寫以下資訊，我們將由專人為您服務
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <label
                  htmlFor='name'
                  className='text-sm font-medium text-zinc-700'
                >
                  姓名
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='請輸入您的姓名'
                  className='w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all'
                />
              </div>
              <div className='space-y-2'>
                <label
                  htmlFor='phone'
                  className='text-sm font-medium text-zinc-700'
                >
                  電話
                </label>
                <input
                  id='phone'
                  name='phone'
                  type='tel'
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder='請輸入聯絡電話'
                  className='w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all'
                />
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-2'>
                <label
                  htmlFor='loanAmount'
                  className='text-sm font-medium text-zinc-700'
                >
                  預計額度 (萬)
                </label>
                <input
                  id='loanAmount'
                  name='loanAmount'
                  type='number'
                  value={formData.loanAmount}
                  onChange={handleChange}
                  placeholder='例如: 50'
                  className='w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all'
                />
              </div>
              <div className='space-y-2'>
                <label
                  htmlFor='loanType'
                  className='text-sm font-medium text-zinc-700'
                >
                  諮詢類別
                </label>
                <select
                  id='loanType'
                  name='loanType'
                  value={formData.loanType}
                  onChange={handleChange}
                  className='w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all appearance-none bg-white'
                >
                  <option value='信用貸款'>信用貸款</option>
                  <option value='房屋貸款'>房屋貸款</option>
                  <option value='汽車貸款'>汽車貸款</option>
                  <option value='債務整合'>債務整合</option>
                  <option value='其他'>其他</option>
                </select>
              </div>
            </div>

            <div className='space-y-2'>
              <label
                htmlFor='message'
                className='text-sm font-medium text-zinc-700'
              >
                備註事項 (選填)
              </label>
              <textarea
                id='message'
                name='message'
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder='有什麼想告訴我們的嗎？'
                className='w-full px-4 py-3 rounded-xl border border-zinc-200 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 transition-all'
              ></textarea>
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full py-4 rounded-xl bg-linear-to-r from-emerald-600 to-emerald-500 text-white font-bold text-lg shadow-lg shadow-emerald-200/50 hover:-translate-y-1 transition-all disabled:opacity-70 disabled:hover:translate-y-0'
            >
              {isSubmitting ? '處理中...' : '確認送出'}
            </button>

            <p className='text-center text-xs text-zinc-400'>
              送出表單代表您同意我們的隱私權條款
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Form;
