import logo from './logo.svg';
import './App.css';

function App() {
  // 识字内容数组
  const literacyItems = [
    { id: 1, character: '一', pinyin: 'yī', meaning: 'one' },
    { id: 2, character: '二', pinyin: 'èr', meaning: 'two' },
    { id: 3, character: '三', pinyin: 'sān', meaning: 'three' },
    { id: 4, character: '四', pinyin: 'sì', meaning: 'four' },
    { id: 5, character: '五', pinyin: 'wǔ', meaning: 'five' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>幼儿识字教育</h1>
        <div className="literacy-container">
          {literacyItems.map(item => (
            <div key={item.id} className="literacy-card">
              <div className="character">{item.character}</div>
              <div className="pinyin">{item.pinyin}</div>
              <div className="meaning">{item.meaning}</div>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
