import { logo } from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt='sumz logo' className='w-28 object-contain'/>
        <button type='button' onClick={() => {
            window.open('')
        }} className='black_btn'>Github</button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'>
            OpenAI GPT-4
        </span>
      </h1>
      <h3 className='desc'>Introducing Sumz, the ultimate AI-powered tool that condenses lengthy articles into concise summaries. With Sumz, you can save time and quickly grasp the key points of any article. Simply input the article, and our advanced algorithms will analyze and generate a summary that captures the essence of the content</h3>
    </header>
  );
};

export default Hero;
