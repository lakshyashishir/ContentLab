import './App.css';
import Column from './components/Column/Column'

const mockData = [
  {
    title: 'To DO',
    tasks: ['Top 10 Gadets Video','Cen 105 Rant', 'Linkedin Weekly Post', 'Instagram Sponsor Mamaearth Story', 'Twitter thread on ChatGPT'],
    color: '#d88469',
    input: '',
  },
  {
    title: 'In progress',
    tasks: ['Syntax Error Winner Template', 'Old KB Vlog - At 3 AM!'],
    color: '#c39757',
    input: '',
  },
  {
    title: 'Done',
    tasks: ['Linux Advantage Video', 'Top 10 Bruh Moments', 'Syntax Error Announcemnt post'],
    color: '#45904f',
    input: '',
  }
]

const getColumnSection = () => (
  <section className="columns">
    <Column
      itemList={mockData[0].tasks}
      colTitle={mockData[0].title}
      color={mockData[0].color}
      />
    <Column
      itemList={mockData[1].tasks}
      colTitle={mockData[1].title}
      color={mockData[1].color}
      />
    <Column
      itemList={mockData[2].tasks}
      colTitle={mockData[2].title}
      color={mockData[2].color}
      />
  </section>
);

function Board1() {
  return (
    <div className="app">

      {getColumnSection()}
      
    </div>
  );
}

export default Board1;
